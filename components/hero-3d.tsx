"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Icosahedron, MeshDistortMaterial, MeshTransmissionMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import * as THREE from "three"

function CoreBlob() {
  const inner = useRef<THREE.Mesh>(null)
  const outer = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (inner.current) {
      inner.current.rotation.x = t * 0.18
      inner.current.rotation.y = t * 0.22
    }
    if (outer.current) {
      outer.current.rotation.x = -t * 0.08
      outer.current.rotation.y = -t * 0.06
    }
  })

  return (
    <group>
      {/* Inner solid distorted core */}
      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <Icosahedron ref={inner} args={[1.35, 16]}>
          <MeshDistortMaterial
            color="#13130f"
            roughness={0.35}
            metalness={0.7}
            distort={0.42}
            speed={1.4}
            envMapIntensity={1.1}
          />
        </Icosahedron>
      </Float>

      {/* Outer wireframe shell */}
      <Icosahedron ref={outer} args={[2.3, 1]}>
        <meshBasicMaterial color="#ede6d6" wireframe transparent opacity={0.18} />
      </Icosahedron>

      {/* Tiny accent prism */}
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[1.9, 1.3, 0.4]}>
          <tetrahedronGeometry args={[0.18, 0]} />
          <meshBasicMaterial color="#d4ff4f" />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-1.7, -1.4, -0.6]}>
          <icosahedronGeometry args={[0.14, 0]} />
          <meshBasicMaterial color="#ede6d6" />
        </mesh>
      </Float>
    </group>
  )
}

function ParallaxRig() {
  const group = useRef<THREE.Group>(null)
  const target = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (!group.current) return
    const { pointer } = state
    target.current.x += (pointer.x * 0.25 - target.current.x) * 0.05
    target.current.y += (pointer.y * 0.2 - target.current.y) * 0.05
    group.current.rotation.y = target.current.x
    group.current.rotation.x = -target.current.y
  })

  return (
    <group ref={group}>
      <CoreBlob />
    </group>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5.4], fov: 38 }}
      className="!cursor-none"
    >
      <color attach="background" args={["#0a0a09"]} />
      <fog attach="fog" args={["#0a0a09", 6, 14]} />

      {/* Lighting */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} color="#ede6d6" />
      <pointLight position={[-3, -2, -2]} intensity={1.1} color="#d4ff4f" />
      <pointLight position={[4, -3, 3]} intensity={0.6} color="#ede6d6" />

      <Suspense fallback={null}>
        <ParallaxRig />
      </Suspense>
    </Canvas>
  )
}

// Re-export type to silence accidental tree-shaking imports
export { MeshTransmissionMaterial }
