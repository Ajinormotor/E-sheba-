/* eslint-disable react/prop-types */



import {  NavLink } from "react-router-dom"
import logo from "/image/E-sheba_logo.svg"
import { useEffect, useRef, useState } from "react"
import MobileHeader from "./MobileHeader"


import { debounce } from "lodash";

const nav_link = [
    {
        id:"1",
        path:"/",
        display: "Home"

    },

    {
        id:"2",
        path:"/about",
        display: "About"

    },
    {
        id:"3",
        path:"/application",
        display: "Application"

    }, {
        id:"4",
        path:"/history",
        display: "History"

    },


]

const Header = () => {


    const [toggleMenu, setToggleMenu] = useState(false)

    const headerRef = useRef(null)

    useEffect(() => {
        const handleHeader = debounce(() => {
          if (document.documentElement.scrollTop > 70 || document.body.scrollTop > 70) {
            headerRef.current.classList.add("header_shrink");
          } else {
            headerRef.current.classList.remove("header_shrink");
          }
        }, 100); // Debounce interval
    
        window.addEventListener("scroll", handleHeader);
        return () => {
          window.removeEventListener("scroll", handleHeader);
        };
      }, []);
   
    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev)
      
      }

    
  return (
<section ref={headerRef}   className={`sticky top-0 z-[1200] w-full max-w-[1300px]  p-[15px] md:p-0   flex flex-col   bg-lightBlue-0 
items-center justify-between  md:px-8 transition-all ${
    toggleMenu ? "header_shrink" : ""
  }`}>


<div className={`${toggleMenu? "block fixed z-[1200] w-full top-[79px] left-0" : "hidden"}`}>
  <MobileHeader toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu} />
  </div>


<div className="flex items-center z-[1200] w-full py-[0.2rem] md:p-[20px] justify-between px-[0.5rem]">


    <div className="">
  <img src={logo}  alt=""  className="w-[124px] h-[42px]"  />
    </div>

    <div className="lg:flex hidden">

    <ul className="flex gap-[15px]">

  {nav_link.map((n) => (

    <NavLink
      key={n.id}
      to={n.path}
      className={({ isActive }) =>
        `relative font-[400] text-[20px] leading-[26px] font-ibm after:content-[''] 
        after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 
        after:transition-all after:duration-300 after:ease-in-out 
        hover:after:w-full hover:text-normalBlue-0 ${
          isActive
            ? "text-normalBlue-0 after:w-full after:bg-normalBlue-0 font-[600]"
            : "text-shadyBlue-0"
        }`
      }
    >
      {n.display}
    </NavLink>
  ))}
  
</ul>


    </div>

    <div className="hidden lg:flex gap-[15px]">

<button className="bg-transparent w-[122px] h-[51px] border-[1px] border-[#0360D9] rounded-[50px] flex items-center justify-center">
    <h1  className=" font-[600] text-[20px] leading-[26px] text-normalBlue-0 font-ibm">Log in</h1>
</button>

<button className="bg-normalBlue-0 w-[122px] h-[51px] border-[1px] border-[#0360D9] rounded-[50px] flex items-center justify-center">
    <h1  className=" font-[600] text-[20px] leading-[24px] text-white font-ibm">Sign up</h1>
</button>
    </div>

    <div className="flex lg:hidden mr-2"  onClick={handleToggleMenu}>
{toggleMenu?
        

        <i className="ri-close-line text-black font-bold text-[22px]"></i>
        :
<i className="ri-menu-2-line text-black font-bold text-[22px]"></i>


}
    </div>
    </div>

</section>

        )
}

export default Header
