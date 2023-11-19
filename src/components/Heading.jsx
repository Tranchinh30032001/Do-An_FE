import React from "react";
import { cn } from "../utils/cn";

function Heading({ heading, className }) {
  return (
    <div className={cn("bg-gray-200 p-2 px-4 w-full", className)}>
      <h1 className="text-[24px] font-bold text-gray-800">{heading}</h1>
    </div>
  );
}

export default Heading;
