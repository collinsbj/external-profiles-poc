import type {Meta, StoryObj} from "@storybook/react"
import forbesConfig from "config/forbes"
import kiplingerConfig from "config/kiplinger"
import Header from "./index"

type ComponentProps = Parameters<typeof Header>[0]
type CustomArgs = ComponentProps & {text: string}

const meta: Meta<CustomArgs> = {
  title: "UI/Header",
  component: Header,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<CustomArgs>

export const Default: Story = {
  render: (args, {globals: {theme}}) => {
    let site = forbesConfig
    switch (theme) {
      case "kiplinger":
        site = kiplingerConfig
        break
    }
    return <Header site={site} />
  },
}
