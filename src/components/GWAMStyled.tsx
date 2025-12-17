import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import type { VariantProps } from "class-variance-authority"

type ButtonProps = {

} & React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}

export const GWAMButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (<Button className={cn("hover:cursor-pointer", className)} {...props}>
    {children}
  </Button>)
}
export const GWAMIconButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return <GWAMButton size={"sm"} className={cn("w-5 h-5", className)} {...props}>
    {children}
  </GWAMButton>
}

interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> { }
export const GWAMCheck: React.FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <Checkbox
      className={cn('data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600 border-purple-500 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"', className)}
      {...props} />
  )
}