import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] w-full rounded-md border border-line bg-primary px-4 py-5 text-base text-content transition-colors duration-200 outline-none placeholder:text-content-muted focus:border-accent",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
