import type { Meta, StoryObj } from "@storybook/react";
import SinglePost from ".";

const meta: Meta<typeof SinglePost> = {
  title: "SinglePost",
  component: SinglePost,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof SinglePost>;

export const DefaultSinglePost: Story = {
  args: {
    id: "1",
    post: {
      _id: "1",
      author: {
        _id: "1",
        email: "matheusdevopsoficial@gmail.com",
        emailVerified: null,
        image:
          "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
        name: "Matheus Zanela",
        username: "matheuszanela"
      },
      big: true,
      commentsCount: 5,
      likedByMe: true,
      likesCount: 5,
      text: "Olá mundo!",
      images: ["/background.png", "/background_profile.jpg"],
      createdAt: new Date("2023-07-29T12:34:56").getTime(),
      parent: {
        _id: "2",
        email: "carlosoliveira@gmail.com",
        emailVerified: null,
        image:
          "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
        name: "Carlos Oliveira",
        username: "carlosoliveira"
      }
    },
    replies: [],
    repliesLikedByMe: []
  },
  render: (args) => (
    <div className="max-w-xl">
      <SinglePost {...args} />
    </div>
  )
};
