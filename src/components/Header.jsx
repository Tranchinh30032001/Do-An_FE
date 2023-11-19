import React from "react";
import { KmaIcon, HeadingKma } from "../assets/imgs";
import { FaHome } from "react-icons/fa";
import { dataNavbar } from "../services/dataNavbar";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const natigate = useNavigate();

  return (
    <>
      {/* logo */}
      <div className="bg-bgHeader py-4">
        <div className="flex items-center gap-20 containerHeader mx-auto">
          <img className="w-[160px] h-[160px]" src={KmaIcon} />
          <div className="flex items-center justify-between w-full">
            <img src={HeadingKma} />
            <div
              onClick={() => (window.location.href = "/login")}
              className="btn px-6 py-2 bg-bgNavbar rounded-lg cursor-pointer text-white"
            >
              Login
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="bg-bgNavbar ">
        <div className="flex items-center container border-l-[1px] border-gray-300">
          <FaHome size={52} className="text-white px-2" />
          {dataNavbar.map((item, index) => {
            return (
              <Link className="text-white text-[18px] uppercase py-3 px-2 border-l-[1px] border-gray-300" key={index}>
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Header;
