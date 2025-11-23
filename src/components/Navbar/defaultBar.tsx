import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";

export function DefaultBar(){
    const navigate = useNavigate();


    return(
        <div className="fixed top-0 left-0 right-0 h-20 bg-neutral-800 flex justify-between items-center">
            <div className="py-2 px-5">
                <img src={logo} onClick={()=>{
                    navigate("/")
                }} alt="logo" className="h-14 rounded-2xl hover:cursor-pointer" />

            </div>
            <div className="px-5">
                <Button variant={"link"} onClick={()=>{
                    navigate('/ai');
                }} className="text-white hover : cursor-pointer">Generate README using AI</Button>
            </div>
        </div>
    )
}