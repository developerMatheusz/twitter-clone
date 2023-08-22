import type { Meta, StoryObj } from "@storybook/react";
import Form from ".";

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Form>;

export const DefaultForm: Story = {
  args: {
    text: "",
    images: ["background_profile.jpg", "background.png"],
    placeholder: "O que está acontecendo?",
    isUploading: false
  },
  argTypes: {
    text: {
      type: "symbol"
    },
    setText: {
      type: "function"
    },
    images: {
      type: "symbol"
    },
    placeholder: {
      type: "string"
    },
    isUploading: {
      type: "boolean"
    }
  },
  render: (args) => <Form {...args} />
};

export const FormWithLoading: Story = {
  args: {
    text: "",
    images: ["background_profile.jpg", "background.png"],
    placeholder: "O que está acontecendo?",
    isUploading: true
  },
  argTypes: {
    text: {
      type: "symbol"
    },
    setText: {
      type: "function"
    },
    images: {
      type: "symbol"
    },
    placeholder: {
      type: "string"
    },
    isUploading: {
      type: "boolean"
    }
  },
  render: (args) => <Form {...args} />
};
