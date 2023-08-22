import type { Meta, StoryObj } from "@storybook/react";
import UsernameForm from ".";

const meta: Meta<typeof UsernameForm> = {
  title: "UsernameForm",
  component: UsernameForm,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof UsernameForm>;

export const DefaultUsernameForm: Story = {
  render: () => <UsernameForm />
};
