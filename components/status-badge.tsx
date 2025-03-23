import type React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const statusBadgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", {
  variants: {
    variant: {
      completed: "bg-green-500/10 text-green-400 border border-green-500/20",
      "in-progress": "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      default: "bg-gray-500/10 text-gray-400 border border-gray-500/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  status: string
}

export function StatusBadge({ className, variant, status, ...props }: StatusBadgeProps) {
  return (
    <div className={cn(statusBadgeVariants({ variant: variant as any }), className)} {...props}>
      {status}
    </div>
  )
}

