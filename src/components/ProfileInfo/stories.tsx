import type { Meta, StoryObj } from "@storybook/react";
import ProfileInfo from ".";

const meta: Meta<typeof ProfileInfo> = {
  title: "ProfileInfo",
  component: ProfileInfo,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProfileInfo>;

export const DefaultProfileInfo: Story = {
  args: {
    profileInfo: {
      _id: "1",
      name: "Matheus Zanela",
      username: "matheuszanela",
      bio: "Mares e marés, carros e corridas",
      email: "matheusdevopsoficial@gmail.com",
      image:
        "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
      cover: "/background.png",
      emailVerified: false
    }
  },
  argTypes: {
    profileInfo: {
      type: "symbol"
    }
  },
  render: (args) => <ProfileInfo {...args} />
};
