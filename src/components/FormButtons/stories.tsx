import type { Meta, StoryObj } from "@storybook/react";
import FormButtons from ".";

const meta: Meta<typeof FormButtons> = {
  title: "FormButtons",
  component: FormButtons,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof FormButtons>;

export const DefaultFormButtons: Story = {
  argTypes: {
    setText: {
      type: "function"
    },
    setImages: {
      type: "function"
    }
  },
  render: (args) => <FormButtons {...args} />
};
