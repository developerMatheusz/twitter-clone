import type { Meta, StoryObj } from "@storybook/react";
import Navigation from ".";

const meta: Meta<typeof Navigation> = {
  title: "Navigation",
  component: Navigation,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const DefaultNavigation: Story = {
  argTypes: {
    profileInfo: {
      type: "symbol"
    }
  },
  render: () => <Navigation />
};
