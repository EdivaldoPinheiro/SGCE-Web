"use client";
import { useTheme } from "next-themes"
import { Toaster as Sonner2 } from "sonner"

const ToasterError = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner2
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast2:
            "group toast group-[.toaster]:bg-red-200 group-[.toaster]:text-cyan-900 group-[.toaster]:border-inherit group-[.toaster]:shadow-lg",
          description2: "group-[.toast]:text-cyan-900 ",
          actionButton2:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton2:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props} />)
  );
}

export { ToasterError }