/* eslint-disable react/prop-types */


const TestimonialCard = ({img,rating,title,text}) => {
  return (
    <section className="bg=-white border-[1px] border-[#A8A8A8] flex flex-col rounded-[20px] bg-white  h-[250px] items-center justify-center p-[10px]">

        <div className="flex flex-col items- gap-[20px]">

            <div className="flex items-center justify-between">

                <div className=" flex items-center gap-[7px]">
                <img src={img}  alt="testimonial_image"  className="w-[52px] h-[52px] object-cover" />
                <ul className="flex flex-col gap-[7px]"> 
                    <li className="font-[600] text-[16px] leading-[20px] text-[#2E2E2E] font-ibm">{title}</li>
                    <li className="font-[400] text-[12px] leading-[15px] text-[#2E2E2E] font-ibm">{rating}</li>
                </ul>

                </div>


                <ul className="flex gap-[5px]">
                    <li><i className="ri-star-fill text-[#F5BF00] md:text-[40px] text-[20px]"></i></li>
                    <li><i className="ri-star-fill text-[#F5BF00] text-[20px] md:text-[40px]"></i></li>
                    <li><i className="ri-star-fill text-[#F5BF00] text-[20px] md:text-[40px]"></i></li>
                    <li><i className="ri-star-fill text-[#F5BF00] text-[20px] md:text-[40px]"></i></li>
                     <li><i className="ri-star-fill text-[#F5BF00] text-[20px] md:text-[40px]"></i></li>
                </ul>
            </div>

            <div className="">
                <p  className="font-[400] text-[16px] leading-[20px] text-[#2E2E2E] font-ibm">{text}</p>
            </div>

        </div>


</section>
  )
}

export default TestimonialCard
