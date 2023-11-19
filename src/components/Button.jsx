import React from "react";
import { cn } from "../utils/cn";

function Button({ className, name, children, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        "btn btn-sm border-none h-[40px] bg-colorBlue px-5 font-medium text-white hover:bg-colorBlueHover active:opacity-50",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {children}
        <p>{name}</p>
      </div>
    </button>
  );
}

export default Button;
