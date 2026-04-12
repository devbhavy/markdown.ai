import { useLocation, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import { Menu, X } from "lucide-react"
import { useState } from "react"


const LANDING_PATH = "/"

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}



export function NewNavbar() {
  const navigate = useNavigate()
  const location = useLocation()

  function goToSection(id: string) {
    const hash = `#${id}`
    if (location.pathname === LANDING_PATH) {
      if (location.hash === hash) {
        scrollToId(id)
        return
      }
      navigate({ pathname: LANDING_PATH, hash }, { replace: false })
    } else {
      navigate({ pathname: LANDING_PATH, hash })
    }
  }
  const [menuVariable,setMenuVariable] = useState(false);

  return (
        <div className="z-20 fixed top-5 left-10 right-10 py-3 px-5 bg-[rgba(255,255,255,0.55)] backdrop-blur-xl text-black flex flex-row justify-between items-center rounded-[34px]">
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <img onClick={()=>{
                            navigate("/")
                        }} className="h-[50px] rounded-3xl hover:cursor-pointer" src={logo} alt="logo.png"></img>

                    </div>
                    <div className="text-2xl font-extrabold">
                        markdown<span className="text-blue-500">.ai</span>
                    </div>
                </div>
                <div className="flex gap-5 items-center font-medium text-xs uppercase font-matter text-black tracking-[1px]">
                        <div
                            className="p-2 hover:bg-gray-300 rounded-md cursor-pointer hidden md:block"
                            onClick={() => goToSection("about")}
                        >
                            about
                        </div>
                        <div
                            className="p-2 hover:bg-gray-300 rounded-md cursor-pointer hidden md:block"
                            onClick={() => {
                                window.open(
                                    "https://github.com/devbhavy/markdown.ai",
                                    "_blank",
                                    "noopener,noreferrer",
                                )
                            }}
                        >
                            github
                        </div>
                        <div
                            className="p-2 hover:bg-gray-300 rounded-md cursor-pointer hidden md:block"
                            onClick={() => goToSection("features")}
                        >
                            features
                        </div>
                        <div
                            className="p-2 hover:bg-gray-300 rounded-md cursor-pointer hidden md:block"
                            onClick={() => goToSection("how-it-works")}
                        >
                            how it works?
                        </div>
                        <div className="relative flex items-center justify-center md:hidden">
                            {menuVariable ? (
                                <X
                                    className="size-6 cursor-pointer text-zinc-800 transition-opacity hover:opacity-70"
                                    strokeWidth={2}
                                    aria-expanded
                                    aria-controls="mobile-nav-menu"
                                    aria-label="Close menu"
                                    onClick={() => {
                                        setMenuVariable(false)
                                    }}
                                />
                            ) : (
                                <Menu
                                    className="size-6 cursor-pointer text-zinc-800 transition-opacity hover:opacity-70"
                                    strokeWidth={2}
                                    aria-expanded={false}
                                    aria-haspopup="true"
                                    aria-label="Open menu"
                                    onClick={() => {
                                        setMenuVariable(true)
                                    }}
                                />
                            )}
                            {menuVariable ? (
                                <div
                                    id="mobile-nav-menu"
                                    role="menu"
                                    aria-orientation="vertical"
                                    className="absolute right-0 top-full z-50 mt-3 w-[min(calc(100vw-5rem),15rem)] overflow-hidden rounded-2xl border border-white/70 bg-[rgba(255,255,255,0.88)] py-1 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.18)] backdrop-blur-xl ring-1 ring-black/4"
                                >
                                    <button
                                        type="button"
                                        role="menuitem"
                                        className="flex w-full items-center px-4 py-3 text-left font-matter text-xs font-medium uppercase tracking-[1px] text-zinc-900 transition-colors hover:bg-blue-500/8 hover:text-blue-600 active:bg-blue-500/12"
                                        onClick={() => {
                                            goToSection("about")
                                            setMenuVariable(false)
                                        }}
                                    >
                                        about
                                    </button>
                                    <button
                                        type="button"
                                        role="menuitem"
                                        className="flex w-full items-center border-t border-zinc-200/80 px-4 py-3 text-left font-matter text-xs font-medium uppercase tracking-[1px] text-zinc-900 transition-colors hover:bg-blue-500/8 hover:text-blue-600 active:bg-blue-500/12"
                                        onClick={() => {
                                            window.open(
                                                "https://github.com/devbhavy/markdown.ai",
                                                "_blank",
                                                "noopener,noreferrer",
                                            )
                                            setMenuVariable(false)
                                        }}
                                    >
                                        github
                                    </button>
                                    <button
                                        type="button"
                                        role="menuitem"
                                        className="flex w-full items-center border-t border-zinc-200/80 px-4 py-3 text-left font-matter text-xs font-medium uppercase tracking-[1px] text-zinc-900 transition-colors hover:bg-blue-500/8 hover:text-blue-600 active:bg-blue-500/12"
                                        onClick={() => {
                                            goToSection("features")
                                            setMenuVariable(false)
                                        }}
                                    >
                                        features
                                    </button>
                                    <button
                                        type="button"
                                        role="menuitem"
                                        className="flex w-full items-center border-t border-zinc-200/80 px-4 py-3 text-left font-matter text-xs font-medium uppercase tracking-[1px] text-zinc-900 transition-colors hover:bg-blue-500/8 hover:text-blue-600 active:bg-blue-500/12"
                                        onClick={() => {
                                            goToSection("how-it-works")
                                            setMenuVariable(false)
                                        }}
                                    >
                                        how it works?
                                    </button>
                                </div>
                            ) : null}
                        </div>
                </div>
            </div>

    )
}