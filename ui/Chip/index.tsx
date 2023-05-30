import {cva} from "class-variance-authority"

type Props = {
  children: React.ReactNode
  size?: "small" | "medium" | "large"
  intent?: "primary" | "secondary"
} & React.ComponentPropsWithoutRef<"div">

const chipStyles = cva(["rounded-3xl", "cursor-default", "w-fit"], {
  variants: {
    size: {
      small: ["px-2", "py-0.5"],
      medium: ["px-4", "py-1"],
      large: ["px-6", "py-2"],
    },
    intent: {
      primary: [
        "bg-background-secondary",
        "text-background-secondary-text-accent",
      ],
      secondary: [
        "bg-background-primary",
        "text-background-primary-text-accent",
      ],
    },
  },
  defaultVariants: {
    size: "medium",
    intent: "primary",
  },
})

export default function Chip({
  children,
  size = "medium",
  intent = "primary",
  ...props
}: Props) {
  return (
    <div className={chipStyles({size, intent})} {...props}>
      {children}
    </div>
  )
}
