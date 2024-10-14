import { createContext, HTMLAttributes, useContext, useState } from "react"

export type FieldProps = HTMLAttributes<HTMLDivElement>

type FileInputContextProps = {
  files: File[]
  onFileSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export function Field(props: FieldProps) {
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ files, onFileSelected: setFiles }}>
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-600 px-3 py-2 shadow-sm focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-zinc-200"
        {...props}
      />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)