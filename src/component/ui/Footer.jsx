import { Link } from "react-router-dom";
import facebook from "/image/facebook.svg";
import insta from "/image/insta.svg";
import twitter from "/image/twitter.svg";
import map from "/image/map.svg";

const Footer = () => {
  return (
    <section className=" bg-normalBlue-0 max-w-[1440px] flex flex-col p-[10px]  md:p-[40px] gap-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-[25px]">
        {/* first div */}
        <div className="flex flex-col gap-[20px]">
          <h1 className=" font-[600] text-[24px] leading-[31px] text-white font-ibm">
            {" "}
            E-sheba
          </h1>

          <p className=" font-[400] text-[16px] leading-[20px] text-white font-ibm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
            feugiat lectus risus sed ullamcorper. Auctor semper fermentum.
          </p>

          <p className=" font-[400] text-[16px] leading-[20px] text-white font-ibm">
            volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
            Nibh est sit lobortis id semper.
          </p>

          <ul className="flex gap-[10px]">
            <li>
              <img
                src={facebook}
                alt="facebook_logo"
                className="w-[16px] h-[16px]"
              />
            </li>
            <li>
              <img src={insta} alt="insta_logo" className="w-[16px] h-[16px]" />
            </li>
            <li>
              <img
                src={twitter}
                alt="twitter_logo"
                className="w-[16px] h-[16px]"
              />
            </li>
          </ul>
        </div>

        {/* second div */}
        <div className=" flex flex-col gap-[20px]">
          <h1 className=" font-[600] text-[24px] leading-[31px] text-white font-ibm">
            {" "}
            Useful Links
          </h1>

          <ul className="flex flex-col gap-[10px] text-white">
            <li>
              <Link to="#">About Us</Link>
            </li>

            <li>
              <Link to="#">Privacy Policy</Link>
            </li>

            <li>
              <Link to="#">Our Mission</Link>
            </li>

            <li>
              <Link to="#">Our Team</Link>
            </li>
          </ul>
        </div>

        {/* third div */}

        <div className="flex flex-col gap-[15px]">
          <h1 className=" font-[600] text-[24px] leading-[31px] text-white font-ibm">
            {" "}
            Address
          </h1>
          <img
            src={map}
            alt="map_icon"
            className="w-full h-[160px] object-cover rounded-[10px]"
          />
        </div>
      </div>

      <div className="border-t-[1px] border-white w-full flex items-center justify-center h-[30px] gap-[2px] py-2  text-center">
        <div className="flex gap-[3px]">
          <i className="ri-copyright-line text-white text-[16px] md:pt-[1.9rem] pt-[1rem]"></i>
          <h1 className=" font-[600] text-[16px] leading-[20px] text-white font-ibm text-center md:pt-[2rem] pt-[1.1rem] ">
            2022 All Right Reserved
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
