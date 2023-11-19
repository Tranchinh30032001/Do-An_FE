import React from "react";

function BigBanner({ title, src, heading, content }) {
  return (
    <div>
      <h1 className="text-[28px] font-semibold bg-bgNavbar text-white w-fit px-10">{title}</h1>
      <div>
        <img src={src} />
      </div>
      <div>
        <h2 className="my-4 text-[20px] font-semibold">{heading}</h2>
        <p className="truncate-text">{content}</p>
      </div>
    </div>
  );
}

export default BigBanner;
