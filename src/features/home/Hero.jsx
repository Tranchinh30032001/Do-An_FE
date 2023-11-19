import React from "react";
import { Carousel } from "antd";
import { Cs1, Cs2, Cs3 } from "../../assets/imgs";

function Hero() {
  return (
    <div className="w-full border container">
      <Carousel autoplay>
        <div>
          <img src={Cs1} className="w-full object-contain" />
        </div>
        <div>
          <img src={Cs2} className="w-full object-contain" />
        </div>
        <div>
          <img src={Cs3} className="w-full object-contain" />
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
