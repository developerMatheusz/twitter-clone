import type { Meta, StoryObj } from "@storybook/react";
import TopNavLink from ".";

const meta: Meta<typeof TopNavLink> = {
  title: "TopNavLink",
  component: TopNavLink,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof TopNavLink>;

export const DefaultTopNavLink: Story = {
  render: () => <TopNavLink />
};
