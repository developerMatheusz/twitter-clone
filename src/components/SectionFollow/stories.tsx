import type { Meta, StoryObj } from "@storybook/react";
import SectionFollow from ".";

const meta: Meta<typeof SectionFollow> = {
  title: "SectionFollow",
  component: SectionFollow,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof SectionFollow>;

export const DefaultSectionFollow: Story = {
  args: {
    profileInfo: [
      {
        _id: "1",
        name: "João Santana",
        username: "joaosantana",
        bio: "Batata frita empanada com mostarda",
        cover: "/background.png",
        email: "joaobirimbal@gmail.com",
        emailVerified: false,
        image: "/background_profile.jpg"
      }
    ]
  },
  argTypes: {
    profileInfo: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="w-96">
      <SectionFollow {...args} />
    </div>
  )
};
