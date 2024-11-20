import { Helmet } from "react-helmet"
import gilf from "/image/eazy_gilf1.gif"

const Application = () => {
  return (

  <section className=" flex flex-col items-center justify-center py-[2rem]">

<Helmet>
    <title>E-sheba | Application </title>
    <meta name="description" content=""  />
</Helmet>


    <div className="">
        <img src={gilf} alt="about_gilf"  className="w-[] h-[]" />
    </div>

    <div className="">
        <h1  className=" font-[700] text-[40px] leading-[45px] text-black font-ibm text-center">Page details coming soon.....</h1>
    </div>

  </section>
  )
}

export default Application
