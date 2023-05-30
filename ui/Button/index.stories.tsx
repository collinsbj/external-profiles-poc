import type {Meta, StoryObj} from "@storybook/react"

import Button from "./index"

type ComponentProps = Parameters<typeof Button>[0]
type CustomArgs = ComponentProps & {text: string}

const meta: Meta<CustomArgs> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    intent: "primary",
    size: "medium",
    fullWidth: false,
    text: "Button",
  },
}

export default meta
type Story = StoryObj<CustomArgs>

export const Default: Story = {
  render: ({text, ...args}) => <Button {...args}>{text}</Button>,
}
