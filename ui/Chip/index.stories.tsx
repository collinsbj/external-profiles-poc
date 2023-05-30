import type {Meta, StoryObj} from "@storybook/react"

import Chip from "./index"

type ComponentProps = Parameters<typeof Chip>[0]
type CustomArgs = ComponentProps & {text: string}

const meta: Meta<CustomArgs> = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: {
    intent: "primary",
    size: "medium",
    text: "Chip",
  },
}

export default meta
type Story = StoryObj<CustomArgs>

export const Default: Story = {
  render: ({text, ...args}) => <Chip {...args}>{text}</Chip>,
}
