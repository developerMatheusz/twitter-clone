import type { Meta, StoryObj } from "@storybook/react";
import SectionTrending from ".";

const meta: Meta<typeof SectionTrending> = {
  title: "SectionTrending",
  component: SectionTrending,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof SectionTrending>;

export const DefaultSectionTrending: Story = {
  render: () => (
    <div className="w-96">
      <SectionTrending />
    </div>
  )
};
