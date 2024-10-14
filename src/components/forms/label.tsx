import { LabelHTMLAttributes } from "react"

export type Labelprops = LabelHTMLAttributes<HTMLLabelElement>

export function Label(props: Labelprops) {
  return (
    <label className="flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-3 py-2 text-center text-zinc-950 focus-within:border-cyan-300 focus-within:ring-2 focus-within:ring-cyan-200 hover:shadow-sm"
      {...props}
    />
  )
}