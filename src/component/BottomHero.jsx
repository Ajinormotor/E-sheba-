import CountUp from "react-countup"



const BottomHero = () => {
  return (
   <section className="flex items-center justify-center lg:justify-start w-full md:h-[134px] h-[120px] bg-normalBlue-0 md:pl-[5rem] py-[1rem]">

    <ul className="flex items-center justify-between md:gap-[30px] gap-[20px] p-[5px]">

        <li className="flex flex-col items-center gap-[7px]">
            <h1  className=" font-[700] md:text-[64px] md:leading-[83px] text-[30px] leading-[52px] text-white font-ibm">24/7</h1>
            <p className=" font-[400] text-[16px] leading-[20px] text-white font-ibm text-center">Online Support</p>
            </li>

            <li className="h-[102px] border-[1px] border-white bg-white"></li>

            <li className="flex flex-col items-center gap-[7px]">
            <h1  className=" font-[700] md:text-[64px] md:leading-[83px] text-[30px] leading-[52px] text-white font-ibm"><CountUp  end={100} duration={2}  />+</h1>
            <p className=" font-[400] text-[16px] leading-[20px] text-white font-ibm">Doctors</p>
            </li>

            <li className="h-[102px] border-[1px] border-white bg-white"></li>

            <li className="flex flex-col items-center gap-[7px]">
            <h1  className=" font-[700] md:text-[64px] md:leading-[83px] text-[30px] leading-[52px] text-white font-ibm"><CountUp end={1000000} duration={2}      
               formattingFn={(value) => {
       
          if (value >= 1000000) return '1M+';
          return value.toLocaleString(); 
          
        }}
 /></h1>
            <p className=" font-[400] text-[16px] leading-[20px] text-white font-ibm text-center">Active Patients</p>
            </li>

         

            
    </ul>

   </section>
  )
}

export default BottomHero
