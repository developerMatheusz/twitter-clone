import type { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const NonEditableAvatar: Story = {
  args: {
    src: "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
    big: false,
    editable: false
  },
  argTypes: {
    src: {
      type: "symbol"
    },
    big: {
      type: "boolean"
    },
    onChange: {
      type: "function"
    },
    editable: {
      type: "boolean"
    }
  },
  render: (args) => (
    <div className="flex items-center justify-self-start">
      <Avatar {...args} />
    </div>
  )
};

export const EditableAvatar: Story = {
  args: {
    src: "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
    big: true,
    editable: true
  },
  argTypes: {
    src: {
      type: "symbol"
    },
    big: {
      type: "boolean"
    },
    onChange: {
      type: "function"
    },
    editable: {
      type: "boolean"
    }
  },
  render: (args) => (
    <div className="flex items-center justify-self-start">
      <Avatar {...args} />
    </div>
  )
};
