import type { Meta, StoryObj } from "@storybook/react";
import PostButtons from ".";

const meta: Meta<typeof PostButtons> = {
  title: "PostButtons",
  component: PostButtons,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof PostButtons>;

export const DefaultPostButtons: Story = {
  args: {
    username: "matheuszanela",
    id: "1",
    likesCountDefault: 2,
    commentsCountDefault: 5,
    likedByMeDefault: true,
    size: "normal"
  },
  argTypes: {
    username: {
      type: "symbol"
    },
    id: {
      type: "symbol"
    },
    likesCountDefault: {
      type: "symbol"
    },
    commentsCountDefault: {
      type: "symbol"
    },
    likedByMeDefault: {
      type: "symbol"
    },
    size: {
      type: "symbol"
    }
  },
  render: (args) => <PostButtons {...args} />
};
