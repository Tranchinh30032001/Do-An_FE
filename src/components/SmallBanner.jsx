import React from "react";

function SmallBanner({ src, heading, time }) {
  return (
    <div>
      <div>
        <img src={src} />
      </div>
      <div className="my-2">
        <h2 className="text-[13px] font-semibold">{heading}</h2>
      </div>
      <p className="text-[14px]">{time}</p>
    </div>
  );
}

export default SmallBanner;
