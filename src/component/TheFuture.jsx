import useTheFutureMotion from "../motion/useTheFutureMotion"
import future from "/image/The_future.svg"

import { motion } from "framer-motion"

const TheFuture = () => {
  const {itemVariant} = useTheFutureMotion()


  return (
    <section className="flex flex-col items-center justify-between md:flex-row p-[10px] lg:gap-[20px] gap-[20px] py-[2rem]">


<motion.div variants={itemVariant} initial="hidden" whileInView="visible" exit="next"  className="flex flex-col md:gap-[28px] gap-[25px] max-w-[502px] w-full">

<h1   className=" font-[700] md:text-[48px] md:leading-[62px] text-[38px] leading-[50px] text-[#2E2E2E] font-ibm">The Future <br /> of <span className="text-normalBlue-0"> Quality Health </span> </h1>

<ul  className="flex flex-col gap-[15px]">


        <li  className="flex">

            <p className=" font-[400] text-[16px] leading-[20px] text-[#2E2E2E] font-ibm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel.
                 In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
        </li>

        
<li  className="flex items-center gap-[7px]">

<p className=" font-[400] text-[16px] leading-[20px] text-[#2E2E2E] font-ibm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel.
 In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>

</li>

<li  className="flex items-center gap-[7px]">

<p className=" font-[400] text-[16px] leading-[20px] text-[#2E2E2E] font-ibm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. sed. Nibh est sit lobortis id semper.</p>

</li>


</ul>

<div className="flex gap-[5px]">
<h1  className=" font-[500] text-[16px] leading-[20px] text-normalBlue-0">Learn More</h1>
<i className="ri-arrow-right-line text-[16px] text-normalBlue-0 font-bold"></i>
</div>

</motion.div>


    <div className=" max-w-[660px] w-full">

<img src={future} alt="chooseus_pics" className="w-full h-full object-cover rounded-[20px]" />
    </div>



   </section>
  )
}

export default TheFuture
