import type { Meta, StoryObj } from "@storybook/react";
import Divider from ".";

const meta: Meta<typeof Divider> = {
  title: "Divider",
  component: Divider,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const DefaultDivider: Story = {
  render: () => (
    <div className="w-96">
      <Divider />
    </div>
  )
};
