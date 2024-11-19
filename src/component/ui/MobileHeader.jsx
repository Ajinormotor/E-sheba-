import { Link } from "react-router-dom"


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

const MobileHeader = () => {
  return (
<section className="lg:hidden flex flex-col items-center justify-center  p-[20px]  gap-[25px] bg-white rounded-[10px] shadow-md  py-[3rem] absolute z-[20] w-full">



<div className="">
    <ul className="flex  flex-col gap-[15px] w-full items-center justify-center">
        {nav_link.map((n)=> (
            <Link  key={n.id} to={n.path} className="text-shadyBlue-0 font-[400] text-[20px] leading-[26px]">{n.display}</Link>
        ))}
    </ul>
</div>

<div className="flex gap-[15px]">

<button className="bg-transparent w-[122px] h-[51px] border-[1px] border-[#0360D9] rounded-[50px] flex items-center justify-center">
<h1  className=" font-[600] text-[20px] leading-[26px] text-normalBlue-0 font-ibm">Log in</h1>
</button>

<button className="bg-normalBlue-0 w-[122px] h-[51px] border-[1px] border-[#0360D9] rounded-[50px] flex items-center justify-center">
<h1  className=" font-[600] text-[20px] leading-[24px] text-white font-ibm">Sign up</h1>
</button>
</div>

</section>
  )
}

export default MobileHeader
