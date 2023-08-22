import type { Meta, StoryObj } from "@storybook/react";
import PostForm from ".";

const meta: Meta<typeof PostForm> = {
  title: "PostForm",
  component: PostForm,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof PostForm>;

export const DefaultPostForm: Story = {
  argTypes: {
    onPost: {
      type: "function"
    },
    placeholder: {
      type: "string"
    },
    parent: {
      type: "symbol"
    }
  },
  render: (args) => <PostForm {...args} />
};
