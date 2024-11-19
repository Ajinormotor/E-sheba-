/* eslint-disable react/prop-types */

const ConsultingCard = ({img,text,title}) => {
  return (
<section className="">

    <div className=" flex flex-col items-start justify-center px-[15px] gap-[10px] border-[1px] border-[#021526] rounded-[20px] h-[285px] md:max-w-[285px] w-full hover:bg-realBlue-0 group hover:border-0">

        <div className="rounded-[50%] w-[92px] h-[92px] flex items-center justify-center bg-fcBlue-0">
        <img src={img}  alt="consulting_icon"  className="w-[] h-[]"  />
        </div>

        <h1 className=" font-[700] text-[24px] leading-[31px] group-hover:text-white font-ibm text-darkBlue group">{title}</h1>
        <p className=" font-[400] text-[16px] leading-[21px] text-blurBlue-0 group-hover:text-white font-ibm group">{text}</p>
    </div>
</section>
  )
}

export default ConsultingCard
