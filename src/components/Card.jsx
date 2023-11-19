import React, { memo } from "react";
import { cn } from "../utils/cn";

function Card({ title, number, className, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        "bg-blue-400 rounded-lg p-4 hover:opacity-50 active:opacity-80 min-h-[200px] cursor-pointer",
        className
      )}
    >
      <div>
        <h1 className="text-white font-bold text-[24px]">{number}</h1>
        <h2 className="mt-2 text-white font-bold">{title}</h2>
      </div>
    </div>
  );
}

export default memo(Card);
