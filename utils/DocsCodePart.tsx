import {AiOutlineCopy} from "react-icons/ai"
import {MdDone} from 'react-icons/md'
export default function CodePart({codeObj,copy,setCopy}){
    return (
        <div className="flex flex-col m4 items-center">
                  <div className="w-4/5 bg-gray-100 py-3 rounded-md pl-4  text-black 
                  text-sm flex items-center justify-between lg:text-xl lg:w-full lg:ml-20 "
                  >
                    <h1>
                    </h1>
                    <label>
                    {
                      codeObj.install1
                    }
                    </label>
                    <a>
                      {
                      copy == 0
                      ?<AiOutlineCopy onClick={()=>{
                        setCopy(1)
                      navigator.clipboard.writeText(codeObj.install1)}}
                      className="mr-4 text-gray-600"/>
                      :<MdDone  onClick={()=>{
                        setCopy(1)
                      navigator.clipboard.writeText(codeObj.install1)}} className="mr-4 text-gray-600 text-2xl"/>
}
                    </a>
                    
                  </div>
                
                </div>
        
    )
}