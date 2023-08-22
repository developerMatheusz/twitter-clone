import type { Meta, StoryObj } from "@storybook/react";
import EditableImage from ".";

const meta: Meta<typeof EditableImage> = {
  title: "EditableImage",
  component: EditableImage,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof EditableImage>;

export const DefaultEditableImage: Story = {
  args: {
    type: "cover",
    src: "background_profile.jpg",
    className: "h-36",
    editable: true
  },
  argTypes: {
    type: {
      type: "symbol"
    },
    src: {
      type: "symbol"
    },
    className: {
      type: "symbol"
    },
    editable: {
      type: "boolean"
    },
    onChange: {
      type: "function"
    }
  },
  render: (args) => <EditableImage {...args} />
};
