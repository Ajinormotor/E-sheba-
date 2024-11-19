import { chooseusdata } from "../utility/chooseusdata"
import chooseus from "/image/choose us.svg"





const ChooseUs = () => {
  return (
   <section className="flex flex-col  justify-between md:flex-row p-[10px] lg:gap-[80px] gap-[20px] py-[2rem] ">

    <div className=" max-w-[530px] w-full">

<img src={chooseus} alt="chooseus_pics" className="w-full h-full object-cover rounded-[20px]" />
    </div>

    <div className="flex flex-col md:gap-[38px] gap-[25px] w-full">

    <h1   className=" font-[700] md:text-[48px] md:leading-[62px] text-[38px] leading-[50px] text-[#2E2E2E] font-ibm">Why You Choose Us?</h1>

    <ul  className="flex flex-col gap-[15px]">{

        chooseusdata.map((choose)=>(
            <li key={choose.id}  className="flex items-center gap-[7px]">
                <img src={choose.img} alt="chooseus_pics" className="w-[16px]  h-[16px] object-cover" />
                <h1  className=" font-[500] text-[16px] leading-[20px] text-[#2E2E2E]">{choose.text}</h1>

            </li>
        ))
}</ul>

<div className="flex gap-[5px]">
    <h1  className=" font-[500] text-[16px] leading-[20px] text-normalBlue-0">Learn More</h1>
    <i className="ri-arrow-right-line font-bold text-[16px] text-normalBlue-0"></i>
</div>

    </div>

   </section>
  )
}

export default ChooseUs
