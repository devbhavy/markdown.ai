import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { NewNavbar } from "@/components/Navbar/NewNavbar"
import { Button } from "@/components/ui/button"
import Screenshot from "../assets/Screenshot.png"
import {
  Github,
  Sparkles,
  FileCode2,
  Wand2,
  Download,
  Layers,
} from "lucide-react"

const features = [
  {
    icon: Github,
    title: "From your repo URL",
    description:
      "Paste a GitHub link and get a structured README that matches your stack and folders.",
  },
  {
    icon: Sparkles,
    title: "AI-written sections",
    description:
      "Summaries, install steps, usage, and badges generated in one pass then you refine.",
  },
  {
    icon: FileCode2,
    title: "Real Markdown",
    description:
      "Edit in a familiar editor with preview so what you ship is valid, readable Markdown.",
  },
  {
    icon: Wand2,
    title: "Polish & tone",
    description:
      "Adjust voice, add shields, and tighten wording without starting from a blank file.",
  },
  {
    icon: Download,
    title: "Ready to commit",
    description:
      "Copy when it looks right drop straight into your repository root.",
  },
  {
    icon: Layers,
    title: "Scratch path",
    description:
      "Prefer full control? Create from scratch and still use the same editor experience.",
  },
] as const

const steps = [
  {
    step: 1,
    title: "Paste or start blank",
    body: "Enter a public GitHub URL for instant context, or open the scratch editor.",
  },
  {
    step: 2,
    title: "Generate & review",
    body: "Let the model draft sections, then skim and tweak headings and bullets.",
  },
  {
    step: 3,
    title: "Export & ship",
    body: "Copy Markdown into README.md commit like any doc change.",
  },
] as const

export function Landing() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const raw = location.hash.replace(/^#/, "")
    if (!raw) return
    const id = decodeURIComponent(raw)
    const run = () =>
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    requestAnimationFrame(run)
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen bg-neutral-300">
      <NewNavbar />

      <main className="pt-28 sm:pt-32">
    
        <section
          id="about"
          className="scroll-mt-28 relative overflow-hidden px-4 pb-16 sm:px-6 sm:pb-20 sm:scroll-mt-32"
        >
          <svg
            className="pointer-events-none absolute top-0 right-0 hidden h-[240px] w-[320px] lg:block"
            viewBox="0 0 320 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <pattern
                id="grid-pattern-temp-top"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="2" fill="#9ca3af" />
              </pattern>
            </defs>
            <rect width="320" height="240" fill="url(#grid-pattern-temp-top)" />
          </svg>
          <svg
            className="pointer-events-none absolute bottom-0 left-0 hidden h-[240px] w-[320px] lg:block"
            viewBox="0 0 320 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <pattern
                id="grid-pattern-temp-bottom"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="2" fill="#9ca3af" />
              </pattern>
            </defs>
            <rect width="320" height="240" fill="url(#grid-pattern-temp-bottom)" />
          </svg>

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="text-gray-900 text-3xl font-extrabold md:text-5xl">
              <span className="block">Create Professional READMEs</span>
              <span className="block">
                Instantly with <span className="text-blue-500">AI</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-gray-600 text-base md:text-lg">
              Generate, customize, and polish your project’s readme in seconds.
              Paste your GitHub URL and let AI create a clear, personalized README
              you can edit and ship.
            </p>
            <div className="mt-10 flex flex-col items-center gap-1">
              <Button
                size="lg"
                onClick={() => navigate("/ai")}
                className="bg-blue-500 px-14 py-7 text-xl font-medium hover:cursor-pointer hover:bg-blue-400"
              >
                Get Started
              </Button>
              <Button
                variant="link"
                onClick={() => navigate("/create")}
                className="hover:cursor-pointer"
              >
                or create one from scratch
              </Button>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-14 flex max-w-3xl justify-center px-2 sm:px-0">
            <img
              className="h-auto w-full rounded-2xl shadow-lg ring-1 ring-black/5"
              src={Screenshot}
              alt="markdown.ai editor and preview"
            />
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-28 border-neutral-400/60 border-t bg-gray-800 py-16 text-white sm:py-20 sm:scroll-mt-32"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center font-bold text-2xl tracking-tight sm:text-3xl">
              Features
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-300 text-sm sm:text-base">
              Everything you need to go from empty repo to a README contributors
              actually read.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <li
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                  <p className="mt-2 text-neutral-300 text-sm leading-relaxed">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>


        <section
          id="how-it-works"
          className="scroll-mt-28 border-neutral-400/40 border-t bg-neutral-200 py-16 sm:py-20 sm:scroll-mt-32"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-center font-bold text-2xl text-gray-900 tracking-tight sm:text-3xl">
              How it works
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600 text-sm sm:text-base">
              Three steps from link to README :
            </p>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map(({ step, title, body }) => (
                <li
                  key={step}
                  className="relative rounded-2xl border border-neutral-300 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 font-semibold text-sm text-white">
                    {step}
                  </span>
                  <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </div>
  )
}
