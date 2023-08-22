import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import GifIcon from "../../utils/icon-component/GifIcon";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    label: "Editar perfil",
    type: "normal",
    typeButton: "button",
    children: null
  },
  argTypes: {
    onClick: {
      type: "function"
    },
    label: {
      type: "string"
    },
    type: {
      type: "symbol"
    },
    children: {
      type: "symbol"
    }
  },
  render: (args) => <Button {...args} />
};

export const IconOnlyButton: Story = {
  args: {
    label: "",
    type: "normal",
    typeButton: "button",
    children: <GifIcon />
  },
  argTypes: {
    onClick: {
      type: "function"
    },
    label: {
      type: "symbol"
    },
    type: {
      type: "symbol"
    },
    children: {
      type: "symbol"
    }
  },
  render: (args) => (
    <Button {...args}>
      <GifIcon />
    </Button>
  )
};
