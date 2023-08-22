import type { Meta, StoryObj } from "@storybook/react";
import Logo from ".";

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const DefaultLogo: Story = {
  args: {
    size: "normal"
  },
  render: (args) => <Logo {...args} />
};
