import { useState } from "react";
import TestimonialCard from "../cards/TestimonialCard"
import { testimonialdata } from "../utility/testimonaildata"



import Slider from "react-slick";


const Testimonial = () => {

    const [activeImage, setActiveImage]  = useState(0)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrow:false,
        autoplaySpeed: 3000,
        beforeChange:(current,next) => setActiveImage(next)
      };

  return (
<section className="bg-lightBlue-0 w-full lg:h-[450px]  flex items-center justify-center max-w-[1300px] p-[10px] py-[2rem]">


    <div  className="flex md:flex-row flex-col justify-between items-center gap-[50px]">

        
        <div className="flex flex-col gap-[20px]">
        <h1   className=" font-[700] md:text-[48px] md:leading-[62px] text-[38px] leading-[50px] text-[#2E2E2E] font-ibm w-full">What <span className="text-normalBlue-0"> Our Member&apos;s</span><br className="" /> Saying About Us</h1>

        <p className=" font-[400] text-[16px] leading-[20px] text-[#2E2E2E] font-ibm  max-w-[419px] w-full"        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>

        <div className="flex items-center  gap-[30px]">

            <ul className="flex">
                
    {
        testimonialdata.map((t,index)=>(  
                <li className={` relative transition-all duration-300 ml-[-10px]  ${activeImage === index? "z-10 scale-110" : "z-0"}`} key={t.id}><img src={t.img} alt="testimonial image" className="w-[52px] h-[52px]" /></li>

                
    ))
}
            </ul>

            <h1 className=" font-[600] text-[16px] leading-[20px] text-[#2E2E2E] font-ibm  max-w-[419px] w-full"   >100+ Reviews</h1>

        </div>
        
        </div>


        


<div className="max-w-[590px] w-full grid grid-cols-1">

    <Slider  {...settings}>



    
{
        testimonialdata.map((t)=>(  

            <div key={t.id} className="">
<TestimonialCard  

img={t.img}
rating={t.rating}
title={t.title}
text={t.text}

/>




            </div>


        ))
    }
    
    </Slider>
</div>
                            
   
        


         </div>

   
</section>
  )
}

export default Testimonial
