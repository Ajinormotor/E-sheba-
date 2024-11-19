import CountUp from "react-countup"



const BottomHero = () => {
  return (
   <section className="flex items-center justify-center lg:justify-start w-full md:h-[134px] h-[100px] bg-normalBlue-0 md:pl-[5rem]">

    <ul className="flex items-center justify-between md:gap-[30px] gap-[20px] p-[5px]">

        <li className="flex flex-col items-center gap-[7px]">
            <h1  className=" font-[700] md:text-[64px] md:leading-[83px] text-[32px] leading-[54px] text-white font-ibm">24/7</h1>
            <p className=" font-[400] text-[16px] leading-[20px] text-white font-ibm">Online Support</p>
            </li>

            <li className="h-[79px] border-[1px] border-white bg-white"></li>

            <li className="flex flex-col items-center gap-[7px]">
            <h1  className=" font-[700] md:text-[64px] md:leading-[83px] text-[32px] leading-[54px] text-white font-ibm"><CountUp  end={100} duration={2}  />+</h1>
            <p className=" font-[400] text-[16px] leading-[20px] text-white font-ibm">Doctors</p>
            </li>

            <li className="h-[79px] border-[1px] border-white bg-white"></li>

            <li className="flex flex-col items-center gap-[7px]">
            <h1  className=" font-[700] md:text-[64px] md:leading-[83px] text-[32px] leading-[54px] text-white font-ibm"><CountUp end={1000000} duration={2}      
               formattingFn={(value) => {
       
          if (value >= 1000000) return '1M+';
          return value.toLocaleString(); 
          
        }}
 /></h1>
            <p className=" font-[400] text-[16px] leading-[20px] text-white font-ibm">Active Patients</p>
            </li>

         

            
    </ul>

   </section>
  )
}

export default BottomHero
