import type { Meta, StoryObj } from "@storybook/react";
import PostContent from ".";

const meta: Meta<typeof PostContent> = {
  title: "PostContent",
  component: PostContent,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof PostContent>;

export const DefaultPostContent: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: {
      _id: "1",
      email: "matheusdevopsoficial@gmail.com",
      emailVerified: null,
      image:
        "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
      name: "Matheus Zanela",
      username: "matheuszanela"
    },
    parent: {
      _id: "2",
      email: "joaodapenha@gmail.com",
      emailVerified: null,
      image:
        "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
      name: "João da Penha",
      username: "joaodapenha"
    },
    images: ["/background_profile.jpg", "background.png"],
    createdAt: new Date("2023-07-28"),
    _id: "1",
    big: true,
    likesCount: 4,
    commentsCount: 4,
    likedByMe: true
  },
  argTypes: {
    text: {
      type: "string"
    },
    author: {
      type: "symbol"
    },
    parent: {
      type: "symbol"
    },
    images: {
      type: "symbol"
    },
    createdAt: {
      type: "symbol"
    },
    _id: {
      type: "symbol"
    },
    big: {
      type: "symbol"
    },
    likesCount: {
      type: "number"
    },
    commentsCount: {
      type: "number"
    },
    likedByMe: {
      type: "boolean"
    }
  },
  render: (args) => (
    <div className="w-96">
      <PostContent {...args} />
    </div>
  )
};
