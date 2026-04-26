"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uScroll;

  // ---- Ashima simplex noise 3D ----
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  // ---- end noise ----

  // Layered FBM with domain warp
  float fbm(vec3 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v += amp * snoise(p);
      p *= 2.05;
      amp *= 0.55;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

    float t = uTime * 0.06 + uScroll * 0.0006;

    // Domain warp for liquid feel
    vec3 q = vec3(p * 1.4, t);
    float w1 = fbm(q + vec3(0.0, 0.0, 0.0));
    float w2 = fbm(q + vec3(2.7, 5.3, t * 0.4));
    vec2 warp = vec2(w1, w2) * 0.55;
    vec3 r = vec3(p * 1.6 + warp, t);

    float n1 = fbm(r);
    float n2 = fbm(r + vec3(7.1, 3.4, 0.0));
    float n3 = fbm(r * 0.6 + vec3(-4.2, 2.3, t * 0.7));

    // Palette (linear-space ish)
    vec3 ink     = vec3(0.039, 0.039, 0.035);
    vec3 citrus  = vec3(0.831, 1.000, 0.310);
    vec3 plasma  = vec3(0.690, 0.180, 0.870);
    vec3 cyan    = vec3(0.180, 0.820, 0.940);
    vec3 bone    = vec3(0.929, 0.902, 0.839);

    vec3 col = ink;
    col = mix(col, plasma, smoothstep(-0.2, 0.7, n1) * 0.55);
    col = mix(col, cyan,   smoothstep(-0.1, 0.7, n2) * 0.45);
    col = mix(col, citrus, smoothstep( 0.1, 0.7, n3) * 0.55);

    // Soft mouse glow
    float md = length(uv - uMouse);
    float glow = smoothstep(0.55, 0.0, md);
    col += citrus * 0.18 * glow;
    col += bone   * 0.05 * glow;

    // Vignette
    float vig = smoothstep(0.95, 0.25, length(uv - 0.5));
    col *= mix(0.55, 1.0, vig);

    // Subtle film grain
    float grain = fract(sin(dot(uv * uResolution + uTime * 60.0, vec2(12.9898, 78.233))) * 43758.5453);
    col += (grain - 0.5) * 0.025;

    // Lift toward ink so foreground text reads
    col = mix(col, ink, 0.45);

    gl_FragColor = vec4(col, 1.0);
  }
`

function ShaderPlane() {
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const { size } = useThree()
  const mouse = useRef<[number, number]>([0.5, 0.5])
  const scroll = useRef(0)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uScroll: { value: 0 },
    }),
    [],
  )

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current[0] = e.clientX / window.innerWidth
      mouse.current[1] = 1.0 - e.clientY / window.innerHeight
    }
    const onScroll = () => {
      scroll.current = window.scrollY
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useFrame((state) => {
    if (!matRef.current) return
    const u = matRef.current.uniforms
    u.uTime.value = state.clock.elapsedTime
    u.uResolution.value.set(size.width, size.height)
    // smooth follow
    const m = u.uMouse.value as THREE.Vector2
    m.x += (mouse.current[0] - m.x) * 0.05
    m.y += (mouse.current[1] - m.y) * 0.05
    u.uScroll.value += (scroll.current - u.uScroll.value) * 0.08
  })

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}

/** Always-on living WebGL backdrop. Renders behind every section. */
export function AnimatedBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ contain: "strict" }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 1], near: 0.1, far: 10 }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  )
}
