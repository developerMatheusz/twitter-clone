import type { Meta, StoryObj } from "@storybook/react";
import Menu from ".";

const meta: Meta<typeof Menu> = {
  title: "Menu",
  component: Menu,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const DefaultMenu: Story = {
  render: () => (
    <div className="w-96">
      <Menu />
    </div>
  )
};
