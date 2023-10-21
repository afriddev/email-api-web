import {BiLogoTwitter,BiLogoGithub,BiLogoInstagram,BiLogoGmail} from 'react-icons/bi'

export default function Bottom(){
    return(
        <>
        <div className=" flex bg-bt w-full
        ">
            <div className="flex flex-col bg-bt w-full">
                <ul className="text-white flex w-full justify-center space-x-10 pt-6 pb-6">
                    <BiLogoTwitter className="w-10 h-10 bg-gray-700 p-2 rounded-xl "/>
                    <BiLogoGmail className="w-10 h-10 bg-gray-700 p-2 rounded-xl"/>
                    <BiLogoGithub className="w-10 h-10 bg-gray-700 p-2 rounded-xl"/>
                    <BiLogoInstagram className="w-10 h-10 bg-gray-700 p-2 rounded-xl"/>
                </ul>
                <label className="text-white text-center text-md
                mb-6">SHAIK AFRID 2023 ©</label>
            </div>

        </div>
        </>
    )
}