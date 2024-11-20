import BottomHero from "./BottomHero"
import hero_arrow from "/image/hero_pics.svg"
import location_icon from "/image/location_icon.svg"
import doctor_icon from "/image/doctor_Icon.svg"
import search_icon from "/image/bi_search.svg"





const Hero = () => {



  return (
<section className="flex flex-col flex-grow bg-lightBlue-0 w-full max-w-[1300px] min-h-screen md:h-[85vh] relative">
  <div className="flex-grow flex flex-col justify-center items-center p-[5px] ">

    <div className="flex flex-col gap-[20px] w-full items-start md:px-[2rem] z-10">
      {/* First Div */}
      <div className="w-full gap-[35px] px-[0.5rem]">
        <div className="flex flex-col">
          <h1 className="font-[700] md:text-[64px] md:leading-[83px] text-[35px] leading-[55px] text-darkBlue-0 font-ibm w-full">
            Find & Search Your
          </h1>
          <ul className="flex items-start md:gap-[20px]">
            <li className="flex flex-col md:max-w-[278px]">
              <h1 className="font-[700] md:text-[64px] md:leading-[83px] text-[37px] leading-[57px] text-darkBlue-0 font-ibm w-full text-normalBlue-0">
                Favourite
              </h1>
              <img
                src={hero_arrow}
                alt="underline_icon"
                className="w-[68%] md:w-full md:h-[20px] h-[15px]"
              />
            </li>
            <li className="ml-[-4.4rem] md:ml-0">
              <h1 className="font-[700] md:text-[64px] md:leading-[83px] text-[37px] leading-[57px] text-darkBlue-0 font-ibm">
                Doctor
              </h1>
            </li>
          </ul>
        </div>
        <p className="max-w-[419px] w-full font-[400] text-[16px] leading-[20px] text-blurBlue-0 font-ibm pt-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
        </p>
      </div>

      {/* Second Div */}
      <div className="bg-white lg:max-w-[590px] w-full h-[73px] flex rounded-[50px] items-center justify-around px-0.5rem]">
        <div className="flex items-center">
          <img
            src={doctor_icon}
            alt="underline_icon"
            className="w-[16px] h-[16px] md:mr-2"
          />
          <select
            className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-full w-[140px]"
            defaultValue=""
          >
            <option
              value=""
              disabled
              className="font-[400] text-[16px] leading-[20px] text-black font-ibm"
            >
              Doctor’s Name
            </option>
            <option value="option1">Dr Faruk</option>
            <option value="option2">Dr Annabel </option>
            <option value="option3">Dr Christopher</option>
          </select>
        </div>

        <div className="flex items-center">
          <img
            src={location_icon}
            alt="underline_icon"
            className="w-[16px] h-[16px] md:mr-2"
          />
          <select
            className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option
              value=""
              disabled
              className="font-[400] text-[16px] leading-[20px] text-black font-ibm"
            >
              Location
            </option>
            <option value="option1">USA</option>
            <option value="option2">England</option>
            <option value="option3">France</option>
          </select>
        </div>

        <div className="rounded-[50%] md:w-[56px] w-[36px] h-[36px] md:h-[56px] bg-normalBlue-0 flex items-center justify-center">
          <img
            src={search_icon}
            alt="underline_icon"
            className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
          />
        </div>
      </div>
    </div>

    {/* Image Div */}
    <div className="bg-moonBlue-0 max-w-[750px] h-[600px] rounded-[50%] w-full absolute opacity-[50%] right-0 hidden md:block z-[5]"></div>
  </div>

  {/* BottomHero aligned at the bottom */}
  <div className="self-end w-full mb-[4.9rem]">
    <BottomHero />
  </div>
</section>

  )
}

export default Hero
