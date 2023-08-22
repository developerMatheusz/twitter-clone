import type { Meta, StoryObj } from "@storybook/react";
import ProvidersForm from ".";

const meta: Meta<typeof ProvidersForm> = {
  title: "ProvidersForm",
  component: ProvidersForm,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProvidersForm>;

export const DefaultProvidersForm: Story = {
  args: {
    providers: [
      {
        id: "google"
      }
    ]
  },
  argTypes: {
    providers: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="max-w-2xl">
      <ProvidersForm {...args} />
    </div>
  )
};
