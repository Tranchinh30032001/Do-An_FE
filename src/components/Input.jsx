/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useState } from "react";
import { cn } from "../utils/cn";

function FieldInput({ label, name, placeholder, type = "text", className, required, value, ...props }) {
  return (
    <div className={cn("relative mt-4")}>
      <div className={cn("flex items-center w-full", className)}>
        {label && (
          <label
            className={cn("font-medium flex-shrink-0 text-black", {
              "after:content-['*'] after:ml-1 after:text-red-500": required,
            })}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <div className="flex items-center w-full relative">
          <input
            value={value}
            {...props}
            type={type}
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default memo(FieldInput);
