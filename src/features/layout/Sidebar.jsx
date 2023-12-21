/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { ClassIcon } from "../../assets/imgs";
import { FaRegUser, FaLayerGroup } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";

function Sidebar({ className }) {
  const navigate = useNavigate();
  const { qlActive } = useSelector((state) => state.active);

  const [active, setActive] = useState(qlActive);

  useEffect(() => {
    setActive(qlActive);
  }, [qlActive]);

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center h-20 border-b bg-[#5272F2]">
          <div className="text-white font-semibold">Quản Lý Sinh Viên</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col space-y-1">
            <li
              onClick={() => {
                setActive("Trang Chủ");
                navigate("/app/portal");
              }}
            >
              <a
                href="#"
                className={clsx(
                  "relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                  {
                    "bg-blue-400": active === "Trang Chủ",
                  }
                )}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Trang Chủ</span>
              </a>
            </li>
            <li
              onClick={() => {
                setActive("Khoa");
                navigate("/app/quanly-khoa");
              }}
            >
              <a
                href="#"
                className={clsx(
                  "relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                  {
                    "bg-blue-400": active === "Khoa",
                  }
                )}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Khoa</span>
              </a>
            </li>
            <li
              onClick={() => {
                setActive("Lớp");
                navigate("/app/quanly-lop");
              }}
            >
              <a
                href="#"
                className={clsx(
                  "relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                  {
                    "bg-blue-400": active === "Lớp",
                  }
                )}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaLayerGroup />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Lớp</span>
              </a>
            </li>
            <li
              onClick={() => {
                setActive("Giáo Viên");
                navigate("/app/quanly-giaovien");
              }}
            >
              <a
                href="#"
                className={clsx(
                  "relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                  {
                    "bg-blue-400": active === "Giáo Viên",
                  }
                )}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaRegUser />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Giáo Viên</span>
              </a>
            </li>
            <li
              onClick={() => {
                setActive("Sinh Viên");
                navigate("/app/quanly-sinhvien");
              }}
            >
              <a
                href="#"
                className={clsx(
                  "relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                  {
                    "bg-blue-400": active === "Sinh Viên",
                  }
                )}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaRegUser />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Sinh Viên</span>
              </a>
            </li>
            <li
              onClick={() => {
                setActive("Quản Lý Điểm Danh");
                navigate("/app/quanly-hoithao");
              }}
              className=""
            >
              <a
                href="#"
                className={clsx(
                  "relative flex flex-row items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6",
                  {
                    "bg-blue-400": active === "Quản Lý Điểm Danh",
                  }
                )}
              >
                <div className="flex flex-row items-center h-8 gap-2 px-5">
                  <img src={ClassIcon} className="w-5" />
                  <div className="text-sm font-light tracking-wide text-gray-500">Quản Lý Hội Thảo</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
