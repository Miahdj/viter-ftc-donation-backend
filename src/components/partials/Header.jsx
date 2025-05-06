import React from "react";
import FtcLogoHeader from "../../assets/svg/FtcLogoHeader";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between h-16 border-solid border-b-2 border-black px-2">
        <div>
          <FtcLogoHeader />
        </div>

        <div>
          <div className="rounded-full bg-[#3E9BD0] h-8 w-8 flex items-center justify-center text-white">
            <span className="block">J</span>
            <span className="block">D</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
