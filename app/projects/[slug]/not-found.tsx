import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-term px-6 text-phos">
      <div className="space-y-6 text-center">
        <div className="display-xl text-blood glow-blood flicker">
          GAME OVER
        </div>
        <p className="display-md text-phos glow">
          {"// 404 // FILE_NOT_FOUND"}
        </p>
        <Link
          href="/projects"
          data-cursor="BACK"
          className="term-border-2 inline-flex items-center gap-3 bg-amber px-5 py-3 label-mono text-term transition-colors hover:bg-phos"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {"> CONTINUE"}
        </Link>
      </div>
    </div>
  )
}
