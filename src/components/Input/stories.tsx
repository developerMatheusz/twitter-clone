import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    type: "text",
    value: "Matheus Zanela",
    typeInput: "input",
    placeholder: "O que está acontecendo?",
    compact: false,
    post: false,
    hidden: false,
    bgTransparent: false
  },
  argTypes: {
    type: {
      type: "symbol"
    },
    value: {
      type: "string"
    },
    typeInput: {
      type: "symbol"
    },
    placeholder: {
      type: "string"
    },
    onChange: {
      type: "function"
    },
    compact: {
      type: "boolean"
    },
    post: {
      type: "boolean"
    },
    fileInputRef: {
      type: "symbol"
    },
    hidden: {
      type: "boolean"
    }
  },
  render: (args) => (
    <div className="w-96">
      <Input {...args} />
    </div>
  )
};

export const DefaultTextArea: Story = {
  args: {
    type: "text",
    value: "",
    typeInput: "textarea",
    placeholder: "O que está acontecendo?",
    compact: true,
    post: true,
    hidden: false,
    bgTransparent: false
  },
  argTypes: {
    type: {
      type: "symbol"
    },
    value: {
      type: "symbol"
    },
    typeInput: {
      type: "symbol"
    },
    placeholder: {
      type: "string"
    },
    onChange: {
      type: "function"
    },
    compact: {
      type: "boolean"
    },
    post: {
      type: "boolean"
    },
    fileInputRef: {
      type: "symbol"
    },
    hidden: {
      type: "boolean"
    },
    bgTransparent: {
      type: "boolean"
    }
  },
  render: (args) => (
    <div className="w-96">
      <Input {...args} />
    </div>
  )
};
