import type { Meta, StoryObj } from "@storybook/react";
import Layout from ".";

const meta: Meta<typeof Layout> = {
  title: "Layout",
  component: Layout,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const DefaultLayout: Story = {
  render: (args) => (
    <Layout {...args}>
      <div className="flex items-center justify-center">
        <span className="text-white">Olá mundo</span>
      </div>
    </Layout>
  )
};
