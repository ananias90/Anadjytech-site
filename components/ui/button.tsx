import { Button } from "@/components/ui/button";

import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500",
  outline:
    "border border-slate-300 text-slate-100 hover:bg-slate-800/50 focus:ring-slate-400",
  ghost: "text-slate-100 hover:bg-slate-800/50 focus:ring-slate-400",
};
const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
