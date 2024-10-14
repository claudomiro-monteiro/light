import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

export interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: Inputprops) {
  const { register } = useFormContext()

  return (
    <input id={props.name}
      className="w-full flex-1 border-0 bg-transparent p-0 text-lg text-zinc-700 placeholder-zinc-700 outline-none placeholder:text-base"
      {...register(props.name)}
      {...props}
    />
  )
}