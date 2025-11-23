  //Ai-generator

  import { AiPageNavbar } from "@/components/Navbar/AipageNavbar";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Spinner } from "@/components/ui/spinner";
  import axios from "axios";
  import { CircleArrowRightIcon } from "lucide-react";

  import { createContext, useContext, useState } from "react";
  import ReactMarkdown from "react-markdown";

  const API = import.meta.env.VITE_API_URL;

  const ReadmeContext = createContext<any>(null);

  export function AiGenerator(){
    const [readme,setReadme] = useState("");
    const [loading,setLoading] = useState(false);
    const [input,setInput] = useState({
      url : ""
    });

    

    async function handleSubmit(e : any){
      e.preventDefault()
      console.log(input);
      setLoading(true);
      try{
        const response = await axios.post(`${API}/app/public/generate-readme`,input);
        const temp = response.data;
        setReadme(temp)

        
        console.log("hi there")
        console.log(temp);
        setLoading(false);

      }catch(err){
        setLoading(false);
        alert(err)

      }
    }

    function handleChange(e:any){
      const {value,name} = e.target;
      setInput(prev => ({...prev,[name] : value}));

    }
    


    return(
      <ReadmeContext.Provider value={[readme,setReadme]}>
        <div className="pt-20 min-h-screen bg-neutral-200 ">
        <AiPageNavbar></AiPageNavbar>
        <div className="flex items-center content-center flex-col p-10">
          <div className="text-5xl font-black">
            Instant AI-Generated READMEs.
          </div>
          <div className="text-lg p-5 flex flex-col content-center font-light">
            <div>
              <div>
                Easily create detailed, professional READMEs for any GitHub repository
              </div>
              <div>
                Just paste your repo link and let AI handle the rest.
              </div>
            </div>
            
            <div className="mt-25 font-medium">
              <form className="flex flex-row gap-x-7 content-center items-center" onSubmit={handleSubmit}>
                <Input onChange={handleChange} name="url" className="w-xl h-14 border-2 border-gray-500" placeholder="Input a Github Url Ex : https://github.com/devbhavy/Sahay"></Input>
                <div>
                  <Button variant={"outline"}  className="hover:cursor-pointer" size={"icon-lg"} type="submit">
                    <CircleArrowRightIcon></CircleArrowRightIcon>
                  </Button>
                </div>

              </form>
            </div>

            
          </div>
          <div className="flex flex-row content-center items-center mt-8">
            {loading ? <Spinner/> : <div/>}
          </div>

          <div className="w-[calc(100dvw/1.5)]">
            {readme.length==0?<div/>:<ReadmeDisplay/>}
          </div>
        </div>
      </div>

      </ReadmeContext.Provider>
      
    )
  }


  function ReadmeDisplay(){
    const [input,setInput] = useContext(ReadmeContext);

    return(
      <div className="flex h-[calc(100vh-5rem)] mt-5 justify-center">
          <div className=" flex-1 p-4 flex flex-col h-full">
              <div className="py-2 text-blue-500 font-bold underline-offset-2 underline text-xl">
                  Markdown Input :
              </div>
            <textarea
              className=" border-2 border-gray-400 bg-white w-full h-full resize-none p-4"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className=" bg-gray-300 flex-1 p-4 overflow-y-auto h-full ">
              <div className="prose prose-custom max-w-none text-black">
                  <ReactMarkdown>
                      {input}
                  </ReactMarkdown>
              </div>
          </div>
      </div>
    )
    

  }