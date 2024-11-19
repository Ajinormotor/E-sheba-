/* eslint-disable react/prop-types */



import { Link } from "react-router-dom"
import logo from "/image/E-sheba_logo.svg"
import { useEffect, useRef } from "react"


const nav_link = [
    {
        id:"1",
        path:"#",
        display: "Home"

    },

    {
        id:"2",
        path:"#",
        display: "About"

    },
    {
        id:"3",
        path:"#",
        display: "Application"

    }, {
        id:"4",
        path:"#",
        display: "History"

    },


]

const Header = ({toggleMenu,setToggleMenu}) => {


    const headerRef = useRef(null)

    useEffect(()=>{
        const handleHeader = () => {
            

            if( document.documentElement.scrollTop > 70|| document.body.scrollTop > 70 ){
                headerRef.current.classList.add("header_shrink")
            } else{
                headerRef.current.classList.remove("header_shrink")
            }

        }

        window.addEventListener("scroll", handleHeader);

        return () => {

            window.removeEventListener("scroll", handleHeader);
        }

    },[])

    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev)
      
      }

    
  return (
<section ref={headerRef} className=" w-full max-w-[1300px]  flex items-center justify-between h-auto p-[20px] md:px-[2rem]   md:pt-[1rem]">

    <div className="">
  <img src={logo}  alt=""  className="w-[124px] h-[42px]"  />
    </div>

    <div className="lg:flex hidden">
        <ul className="flex gap-[15px]">
            {nav_link.map((n)=> (
                <Link  key={n.id} to={n.path} className="text-shadyBlue-0 font-[400] text-[20px] leading-[26px]">{n.display}</Link>
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

</section>

        )
}

export default Header
