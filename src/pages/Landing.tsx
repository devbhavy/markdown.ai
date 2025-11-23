import { Button } from "@/components/ui/button"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"
import screenshot from "../assets/Screenshot.png"

function Landing(){
    const navigate = useNavigate()
    return(
        <div className="h-[1500px]">
            <div className="h-2/3 bg-neutral-100  relative overflow-hidden">
                <div className="h-20 pt-5 pl-40">
                    <img onClick={()=>{
                        navigate("/")
                    }} className="h-full rounded-3xl hover:cursor-pointer" src={logo} alt="logo.png"></img>
                </div>
                <div className="mt-20 flex flex-col items-center ">
                    <div className="text-gray-900 font-extrabold text-5xl flex flex-col justify-center items-center z-50">
                       <p>Create Professional READMEs</p>
                       <p>
                       Instantly with <span className="text-blue-500">AI</span>
                        </p> 
                    </div>
                    <div className="flex flex-col items-center mt-6 text-gray-500 text-lg ">
                        <p>
                        Generate, customize, and polish your project’s readme in seconds</p>
                        <p>
                        Just paste your project’s GitHub URL and let AI instantly create and personalize a stunning readme for you!
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col items-center">
                        <Button size={"lg"} onClick={()=>{
                            navigate("/ai")
                        }} className="bg-blue-500 hover:bg-blue-400  px-14 py-7 font-medium text-xl hover:cursor-pointer">Get Started</Button>
                        <div>
                            <Button onClick={()=>{
                                navigate("/create")
                            }} variant="link" className="hover:cursor-pointer">or create one from scratch</Button>
                        </div>
                    </div>
                </div>
                <svg className="absolute -top-[400px] right-0 h-[700px] " viewBox="0 0 404 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern
                        id="grid-pattern"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                        >
                        
                        <circle cx="2" cy="2" r="2" fill="#d4d4d4" />
                        </pattern>
                    </defs>

                    
                    <rect width="404" height="100%" fill="url(#grid-pattern)" />
                </svg>
                <svg className="absolute botton-0 left-0 h-[700px] " viewBox="0 0 404 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern
                        id="grid-pattern"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                        >
                        
                        <circle cx="2" cy="2" r="2" fill="#d4d4d4" />
                        </pattern>
                    </defs>

                    
                    <rect width="404" height="100%" fill="url(#grid-pattern)" />
                </svg>


            </div>
            <div className="bg-neutral-600 h-1/3 relative">
                <div className="flex flex-row justify-center absolute -top-96 left-1/2 -translate-x-1/2 w-4/5">
                    <img className="h-[650px] z-40 rounded-2xl" src={screenshot} alt="screenshot.png" />

                </div>
                
            </div>
        </div>
    )
}


export {Landing}