import type { Meta, StoryObj } from "@storybook/react";
import Cover from ".";

const meta: Meta<typeof Cover> = {
  title: "Cover",
  component: Cover,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Cover>;

export const DefaultCover: Story = {
  args: {
    src: "",
    editable: false
  },
  argTypes: {
    src: {
      type: "symbol"
    },
    editable: {
      type: "boolean"
    },
    onChange: {
      type: "function"
    }
  },
  render: (args) => <Cover {...args} />
};

export const CoverWithImage: Story = {
  args: {
    src: "/background_profile.jpg",
    editable: true
  },
  argTypes: {
    src: {
      type: "symbol"
    },
    editable: {
      type: "boolean"
    },
    onChange: {
      type: "function"
    }
  },
  render: (args) => <Cover {...args} />
};
