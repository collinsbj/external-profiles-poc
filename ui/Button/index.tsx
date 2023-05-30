import {cva} from "class-variance-authority"

type Props = {
  children: React.ReactNode
  fullWidth?: boolean
  size?: "small" | "medium" | "large"
  intent?: "primary" | "secondary"
} & React.ComponentPropsWithoutRef<"button">

const buttonStyles = cva(["uppercase", "rounded"], {
  variants: {
    fullWidth: {
      true: ["w-full"],
    },
    size: {
      small: ["p-1"],
      medium: ["p-2"],
      large: ["p-3"],
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
    fullWidth: false,
    size: "medium",
    intent: "primary",
  },
})

export default function Button({
  children,
  fullWidth = false,
  size = "medium",
  intent = "primary",
  ...props
}: Props) {
  return (
    <button className={buttonStyles({fullWidth, size, intent})} {...props}>
      {children}
    </button>
  )
}
