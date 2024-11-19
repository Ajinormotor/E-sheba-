import ConsultingCard from "../cards/ConsultingCard"
import { consultingdata } from "../utility/consultingdata"

const Consulting = () => {
  return (
 <section className="flex flex-col items-start justify-start  max-w-[1300px] gap-[3rem] py-[2rem] p-[10px]">

    {/* Heading */}
    <div className="flex items-start justify-start w-full">
  <h1   className=" font-[700] md:text-[48px] md:leading-[62px] text-[38px] leading-[50px] text-[#2E2E2E] font-ibm">Our Consulting Specialists </h1>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">

{
   consultingdata.map((c)=> (
    <div className=""  key={c.id}>
        <ConsultingCard 
        img={c.img}
        title={c.title}
        text={c.text}
        />
    </div>
   ))
}
    </div>
 </section>
  )
}

export default Consulting
