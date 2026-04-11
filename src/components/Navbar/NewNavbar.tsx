import { useLocation, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"

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
                <div className="flex gap-5 font-medium text-xs uppercase font-matter text-black tracking-[1px]">
                    <div
                      className="p-2 hover:bg-gray-300 rounded-md cursor-pointer"
                      onClick={() => goToSection("about")}
                    >
                      about
                    </div>
                    <div className="p-2 hover:bg-gray-300 rounded-md cursor-pointer" onClick={()=>{
                        navigate("https://github.com/devbhavy/markdown.ai")
                    }}>
                        github
                    </div>
                    <div
                      className="p-2 hover:bg-gray-300 rounded-md cursor-pointer"
                      onClick={() => goToSection("features")}
                    >
                      features
                    </div>
                    <div
                      className="p-2 hover:bg-gray-300 rounded-md cursor-pointer"
                      onClick={() => goToSection("how-it-works")}
                    >
                      how it works?
                    </div>

                </div>

            </div>

    )
}