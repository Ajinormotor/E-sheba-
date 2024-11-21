import { NavLink } from "react-router-dom";

const nav_link = [
  {
    id: "1",
    path: "/",
    display: "Home",
  },

  {
    id: "2",
    path: "/about",
    display: "About",
  },
  {
    id: "3",
    path: "/application",
    display: "Application",
  },
  {
    id: "4",
    path: "/history",
    display: "History",
  },
];

const MobileHeader = () => {
  return (
    <section className="lg:hidden flex flex-col items-center justify-center  p-[20px]  gap-[25px] bg-white rounded-[10px] shadow-md  py-[3rem] absolute z-[20] w-full">
      <div className="">
        <ul className="flex flex-col text-center gap-[15px]">
          {nav_link.map((n) => (
            <NavLink
              key={n.id}
              to={n.path}
              className={({ isActive }) =>
                `relative font-[400] text-[20px] leading-[26px] font-ibm after:content-[''] 
  after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 
  after:transition-all after:duration-300 after:ease-in-out 
  hover:after:w-full hover:text-normalBlue-0 ${
    isActive
      ? "text-normalBlue-0 after:w-full after:bg-normalBlue-0 font-[600]"
      : "text-shadyBlue-0"
  }`
              }
            >
              {n.display}
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="flex gap-[15px]">
        <button className="bg-transparent hover:bg-normalBlue-0 group w-[122px] h-[51px] border-[1px] border-[#0360D9] rounded-[50px] flex items-center justify-center">
          <h1 className=" font-[600] text-[20px] leading-[26px] group-hover:text-white text-normalBlue-0 font-ibm">
            Log in
          </h1>
        </button>

        <button className="bg-normalBlue-0 hover:bg-transparent group w-[122px] h-[51px] border-[1px] border-[#0360D9] rounded-[50px] flex items-center justify-center">
          <h1 className=" font-[600] text-[20px] leading-[24px] group-hover:text-normalBlue-0 text-white font-ibm">
            Sign up
          </h1>
        </button>
      </div>
    </section>
  );
};

export default MobileHeader;
