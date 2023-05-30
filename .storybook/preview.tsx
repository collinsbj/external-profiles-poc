import type {Preview} from "@storybook/react"
import type {Meta, StoryObj} from "@storybook/react"
import "../app/globals.css"

const preview: Preview = {
  globalTypes: {
    theme: {
      defaultValue: "forbes",
      toolbar: {
        title: "Brand",
        items: [
          {value: "forbes", title: "Forbes"},
          {value: "kiplinger", title: "Kiplinger"},
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story: StoryObj, context) => {
      const theme = context.globals.theme
      return (
        <div data-theme={theme}>
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
