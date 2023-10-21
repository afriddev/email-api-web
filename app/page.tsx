"use client"
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import LgNavBar from '../utils/LgNavBar'
import NavBar from '../utils/NavBar'
import Bottom from '../utils/Bottom'
import Home from './home/app'
import About from './about/page'
import Docs from './docs/page'
const App = () => {
  const [nav, setNav] = useState(0)
  const [indexOfPage,setIndexOfPage] = useState(2);
  function setIndex(val){
    setIndexOfPage(val);
    setNav(0)
  }
  return (
    <>
      <div>
        <div>
          <div
            className=" flex w-full  justify-between bg-white"
            id="heroSection">
           <img onClick={()=>{
             setIndex(0)
           }} src="heroLogoSmall.jpg" className="w-3/5 
           pt-2 ml-4 lg:w-1/6"/>
           <li className="sm:hidden md:hidden lg:block"><LgNavBar setIndex={setIndex}/></li>
            <li
              className="list-none text-4xl  text-center text-gray-900 pt-5 pr-5 lg:hidden"
              onClick={() => {
                nav == 0 ? setNav(1) : setNav(0)
              }}
            >
              {nav == 0 ? <BiMenuAltRight /> : <AiOutlineClose />}
            </li>
          </div>
          
          {nav == 1 ?  <NavBar setIndex={setIndex} /> : null}
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
