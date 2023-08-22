import type { Meta, StoryObj } from "@storybook/react";
import Posts from ".";

const meta: Meta<typeof Posts> = {
  title: "Posts",
  component: Posts,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Posts>;

export const DefaultPosts: Story = {
  args: {
    posts: [
      {
        _id: "1",
        createdAt: new Date("2023-07-29T12:34:56").getTime(),
        author: {
          _id: "1",
          email: "matheusdevopsoficial@gmail.com",
          emailVerified: null,
          image: "/background_profile.jpg",
          name: "Matheus Zanela",
          username: "matheuszanela"
        },
        text: "Uma foto para alegrar seu dia!",
        commentsCount: 5,
        images: ["/background_profile.jpg", "/background.png"],
        likesCount: 5,
        big: false,
        likedByMe: true
      }
    ],
    idsLikedByMe: []
  },
  argTypes: {
    posts: {
      type: "symbol"
    },
    idsLikedByMe: {
      type: "symbol"
    },
    fetchHomePosts: {
      type: "function"
    }
  },
  render: (args) => (
    <div className="max-w-xl">
      <Posts {...args} />
    </div>
  )
};
