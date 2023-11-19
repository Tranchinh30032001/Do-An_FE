import React from "react";

function Bangdiem() {
  return (
    <div className="flex gap-9">
      {/* <div className="peer/hello group grid place-item-center place-items-center h-20 w-20 bg-blue-400 hover:bg-yellow-300 duration-1000">
        <div className="w-5 h-5 bg-black group-hover:border-2 border-white"></div>
        <div className="w-5 h-5 bg-black"></div>
      </div>

      <div className="peer-hover/hello:bg-red-500 group grid place-item-center place-items-center h-20 w-20 bg-blue-400 hover:bg-yellow-300 duration-1000">
        <div className="peer-hover:bg-red-500 w-5 h-5 bg-black "></div>
      </div> */}
      <div className="grid grid-cols-5 gap-10 p-5 sm:max-md:grid-cols-2">
        <div className="bg-black w-20 h-20 shadow-neon"></div>
      </div>
    </div>
  );
}

export default Bangdiem;
