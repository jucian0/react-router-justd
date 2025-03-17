"use client"

import { Toaster as ToasterPrimitive, type ToasterProps } from "sonner"
import { useColorScheme } from "~/modules/color-scheme/component"

const Toast = ({ ...props }: ToasterProps) => {
  const theme = useColorScheme()
  return (
    <ToasterPrimitive
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      toastOptions={{
        classNames: {
          toast: "toast border-0! inset-ring! inset-ring-fg/10!",
          title: "title",
          description: "description",
          actionButton: "bg-primary! hover:bg-primary/90! text-primary-fg!",
          cancelButton: "bg-transparent! hover:bg-secondary! hover:text-secondary-fg!",
          closeButton: "close-button",
        },
      }}
      {...props}
    />
  )
}

export type { ToasterProps }
export { Toast }
