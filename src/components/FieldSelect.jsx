import React from "react";
import { cn } from "../utils/cn";

function FieldSelect({ required, label, className, options, firstSelect, ...props }) {
  if (firstSelect == null) {
    firstSelect = options[0].msgv;
  }

  return (
    <div className={cn({ className })}>
      <label
        htmlFor="countries"
        className={cn("w-[100px] font-medium flex-shrink-0 text-black", {
          "after:content-['*'] after:ml-1 after:text-red-500": required,
        })}
      >
        {label}
      </label>
      <select
        {...props}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options?.map((item) => (
          <option key={crypto.randomUUID()} value={item.msgv}>
            {item.ten}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FieldSelect;
