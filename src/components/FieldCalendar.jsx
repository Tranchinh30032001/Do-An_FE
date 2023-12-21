import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function FieldCalender({ label, name, value, ...props }) {
  return (
    <div className="flex items-center w-full">
      <div className="border-[1px] border-gray-300 rounded-lg w-full">
        <Datepicker value={value} classNames="w-full" {...props} useRange={false} asSingle={true} />
      </div>
    </div>
  );
}

export default FieldCalender;
