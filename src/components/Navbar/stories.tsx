import type { Meta, StoryObj } from "@storybook/react";
import Navbar from ".";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const DefaultNavbar: Story = {
  render: () => (
    <div className="w-96">
      <Navbar />
    </div>
  )
};
