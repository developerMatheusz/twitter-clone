import type { Meta, StoryObj } from "@storybook/react";
import ItemsNavbar from ".";

const meta: Meta<typeof ItemsNavbar> = {
  title: "ItemsNavbar",
  component: ItemsNavbar,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof ItemsNavbar>;

export const DefaultItemsNavbar: Story = {
  argTypes: {
    profileInfo: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-80">
      <ItemsNavbar {...args} />
    </div>
  )
};
