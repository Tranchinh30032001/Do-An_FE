import React from "react";
import Header from "../components/Header";
import Hero from "../features/home/Hero";
import BigBanner from "../components/BigBanner";
import { dataBannerBig, dataBannerSmall, dataNotification, events } from "../utils/dataBanner";
import SmallBanner from "../components/SmallBanner";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <BigBanner
                title={dataBannerBig[0].title}
                src={dataBannerBig[0].thumbnail}
                content={dataBannerBig[0].content}
                heading={dataBannerBig[0].heading}
              />
            </div>
            <div className="col-span-1 mt-11">
              <SmallBanner
                src={dataBannerSmall[0].thumbnail}
                heading={dataBannerSmall[0].heading}
                time={dataBannerSmall[0].timestamp}
              />
              <SmallBanner
                src={dataBannerSmall[1].thumbnail}
                heading={dataBannerSmall[1].heading}
                time={dataBannerSmall[1].timestamp}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="col-span-2">
              <BigBanner
                title={dataBannerBig[1].title}
                src={dataBannerBig[1].thumbnail}
                content={dataBannerBig[1].content}
                heading={dataBannerBig[1].heading}
              />
            </div>
            <div className="col-span-1 mt-11">
              <SmallBanner
                src={dataBannerSmall[2].thumbnail}
                heading={dataBannerSmall[2].heading}
                time={dataBannerSmall[2].timestamp}
              />
              <SmallBanner
                src={dataBannerSmall[3].thumbnail}
                heading={dataBannerSmall[3].heading}
                time={dataBannerSmall[3].timestamp}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 border-2">
          <div className="bg-[#F1F1F1] px-4">
            <h1 className="text-[28px] font-semibold bg-bgNavbar text-white w-fit px-10">Thông Báo</h1>
            <h2 className="text-[18px] font-semibold my-2 ">
              {" "}
              KHOA ATTT THÔNG BÁO: Kết quả cuộc thi "Sinh viên với An toàn thông tin" cấp Học viện lần III năm 2023
            </h2>
            <ul>
              {dataNotification.map((item, index) => {
                return <li className="text-[16px] ml-4">{item}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-[28px] font-semibold bg-bgNavbar text-white w-fit px-10">SỰ KIỆN</h2>
            <div className="px-4 py-2">
              {events.map((item, index) => {
                return (
                  <div className="flex items-center gap-4 mt-2">
                    <div className="border-[1px] border-gray-200">
                      <p className=" py-2 bg-[#94B726] text-white font-semibold text-center">{item.thu}</p>
                      <p className="text-center bg-white">{item.ngay}</p>
                    </div>
                    <div className="border-b-[1px] border-gray-400">
                      <p>{item.heading}</p>
                      <p className="text-[14px] text-bgNavbar">{item.diadiem}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
