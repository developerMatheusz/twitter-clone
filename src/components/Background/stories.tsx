import type { Meta, StoryObj } from "@storybook/react";
import Background from ".";

const meta: Meta<typeof Background> = {
  title: "Background",
  component: Background,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Background>;

export const DefaultBackground: Story = {
  render: () => (
    <div className="w-screen h-screen m-0 p-0">
      <Background />
    </div>
  )
};
