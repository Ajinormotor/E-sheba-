

const Newsletter = () => {
  return (
 <section className=" flex flex-col items-center justify-center bg-normalBlue-0 rounded-[20px] gap-[40px] my-[3rem] w-[95%] max-w-[1200px]  py-[3rem] p-[10px]" >

    <div className="flex">
        <h1  className=" font-[600] md:text-[40px] md:leading-[52px] text-[30px] leading-[42px] text-white font-ibm text-center">Subscribe To Our Newsletter</h1>
    </div>

    <div className=" bg-white rounded-[150px] max-w-[956px] h-[85px] w-full flex justify-between items-center px-[2rem]">
        <input type="text" placeholder="Email" className="outline-none border-0 w-full" />
        <div className="bg-normalBlue-0 w-[46px] h-[46px] md:w-[56px] md:h-[56px] flex items-center justify-center rounded-[50%]">
        <i className="ri-arrow-right-line text-white"></i>

        </div>

    </div>

 </section>
  )
}

export default Newsletter
