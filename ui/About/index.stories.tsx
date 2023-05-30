import type {Meta, StoryObj} from "@storybook/react"

import About from "./index"

type ComponentProps = Parameters<typeof About>[0]
type CustomArgs = ComponentProps & {text: string}

const meta: Meta<CustomArgs> = {
  title: "UI/About",
  component: About,
  tags: ["autodocs"],
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Lacus laoreet non curabitur gravida arcu ac. Neque gravida in fermentum et sollicitudin ac orci. Platea dictumst quisque sagittis purus sit amet. Facilisi cras fermentum odio eu feugiat. Velit euismod in pellentesque massa placerat duis ultricies lacus. At lectus urna duis convallis convallis tellus. Commodo elit at imperdiet dui accumsan sit amet nulla. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Senectus et netus et malesuada. Interdum velit euismod in pellentesque massa placerat duis. Praesent tristique magna sit amet purus gravida. Est sit amet facilisis magna etiam. Sapien pellentesque habitant morbi tristique senectus et netus et. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Lacus laoreet non curabitur gravida arcu ac. Neque gravida in fermentum et sollicitudin ac orci. Platea dictumst quisque sagittis purus sit amet. Facilisi cras fermentum odio eu feugiat. Velit euismod in pellentesque massa placerat duis ultricies lacus. At lectus urna duis convallis convallis tellus. Commodo elit at imperdiet dui accumsan sit amet nulla. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Senectus et netus et malesuada. Interdum velit euismod in pellentesque massa placerat duis. Praesent tristique magna sit amet purus gravida. Est sit amet facilisis magna etiam. Sapien pellentesque habitant morbi tristique senectus et netus et. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.",
  },
}

export default meta
type Story = StoryObj<CustomArgs>

export const Default: Story = {
  render: ({text, ...args}) => <About {...args}>{text}</About>,
}
