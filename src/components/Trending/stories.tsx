import type { Meta, StoryObj } from "@storybook/react";
import Trending from ".";

const meta: Meta<typeof Trending> = {
  title: "Trending",
  component: Trending,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Trending>;

export const DefaultTrending: Story = {
  args: {
    title: "Sports · Trending",
    subtitle: "São Paulo e Flamengo",
    description: "1,846 Tweets"
  },
  render: (args) => <Trending {...args} />
};
