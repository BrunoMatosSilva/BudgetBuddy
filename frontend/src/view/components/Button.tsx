import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'>{}

export function Button({...props}: ButtonProps) {
 return (
  <button
  {...props}
  className="bg-violet-950 hover:bg-violet-500 disabled:bg-gray-100
   disabled:text-gray-400 disabled:cursor-not-allowed text-white font-medium
   px-6 h-12 rounded-2xl transition-all"
  />
 )
}
