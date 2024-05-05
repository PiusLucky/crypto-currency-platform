import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface ExtendedInputProps extends InputProps {
  gradientClassName?: string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, ExtendedInputProps>(
  ({ className, gradientClassName, type, ...props }, ref) => {
    return (
      <div className="relative z-10">
        <input
          type={type}
          className={cn(
            "flex h-10 rounded-[10px] border border-customDark bg-transparent ml-0.5 w-[calc(100%-4px)]",
            "px-3 py-2 text-sm  file:border-0 file:bg-transparent ",
            "file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none ",
            "disabled:cursor-not-allowed disabled:opacity-50 dark:border-customDark dark:bg-slate-950",
            "dark:ring-offset-customDark dark:placeholder:text-slate-400 ",
            className
          )}
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            "primary-gradient -z-10 h-12 absolute -top-[2px] left-0 right-0 bottom-0 rounded-[10px]",
            gradientClassName
          )}
        ></div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
