"use client"
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import LgNavBar from '../utils/LgNavBar'
import NavBar from '../utils/NavBar'
import Bottom from '../utils/Bottom'
import About from '@/components/About'
import Home from '@/components/Home'
import Docs from '@/components/Docs'
const App = () => {
  const [nav, setNav] = useState(0)
  const [indexOfPage,setIndexOfPage] = useState(0);
  function setIndex(val){
    setIndexOfPage(val);
    setNav(0)
  }
  return (
    <>
      <div>
        <div className='relative z-0'>
          <div
            className=" flex w-full  justify-between bg-white"
            id="heroSection">
           <img onClick={()=>{
             setIndex(0)
           }} src="heroLogoSmall.jpg" className="w-3/5 
           pt-2 ml-4 lg:w-1/6"/>
           <li className="sm:hidden md:hidden lg:block"><LgNavBar setIndex={setIndex} indexOfPage={indexOfPage}/></li>
            <li
              className="list-none text-4xl  text-center text-gray-900 pt-5 pr-5 lg:hidden"
              onClick={() => {
                nav == 0 ? setNav(1) : setNav(0)
              }}
            >
              {nav == 0 ? <BiMenuAltRight /> : <AiOutlineClose />}
            </li>
          </div>
          
          <div className='absolute z-10 right-0 w-3/5 ' >{nav == 1 ?  <NavBar setIndex={setIndex}  indexOfPage={indexOfPage} /> : null}</div>
          {
            indexOfPage == 0
            ?<Home setIndex = {setIndex}/>
            :indexOfPage == 1
            ?<About setIndex={setIndexOfPage}/>
            :<Docs/>
          }
        </div>
        <Bottom/>
      </div>
    </>
  )
}

export default App
