import {BiLogoTwitter,BiLogoGithub,BiLogoInstagram,BiLogoGmail} from 'react-icons/bi'

export default function Bottom(){
    return(
        <>
        <div className=" flex w-full bottom
        ">
            <div className="flex flex-col  w-full">
                <ul className="text-white  flex w-full justify-center 
                space-x-4 gap-4 pt-6 pb-6">
                    <BiLogoTwitter onClick={()=>{window.open("https://github.com/afriddev")}} size={26} className=" w-10 bg-gray-700 p-2 rounded-xl "/>
                    <BiLogoGmail size={26} className="w-10 bg-gray-700 p-2 rounded-xl" onClick={()=>{window.open("https://github.com/afriddev")}}/>
                    <BiLogoGithub size={26} className="w-10 bg-gray-700 p-2 rounded-xl" onClick={()=>{window.open("https://github.com/afriddev")}}/>
                    <BiLogoInstagram size={26} className="w-10 bg-gray-700 p-2 rounded-xl" onClick={()=>{window.open("https://github.com/afriddev")}}/>
                </ul>
                <label className="pb-2 text-white text-center text-md
                mb-6">SHAIK AFRID 2023 ©</label>
            </div>

        </div>
        </>
    )
}