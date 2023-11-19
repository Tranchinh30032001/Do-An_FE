import React from "react";

function Banner({ BigBanner, SmallBanner1, SmallBanner2 }) {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <div className="grid-cols-2">
          <BigBanner />
        </div>
        <div className="grid-cols-1">
          <SmallBanner1 />
          <SmallBanner2 />
        </div>
      </div>
    </div>
  );
}

export default Banner;
