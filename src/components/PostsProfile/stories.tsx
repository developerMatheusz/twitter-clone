import type { Meta, StoryObj } from "@storybook/react";
import PostsProfile from ".";

const meta: Meta<typeof PostsProfile> = {
  title: "PostsProfile",
  component: PostsProfile,
  parameters: {
    backgrounds: {
      default: "twitter-dark"
    }
  }
};

export default meta;
type Story = StoryObj<typeof PostsProfile>;

export const DefaultPostsProfile: Story = {
  args: {
    profileInfo: {
      _id: "3",
      bio: "Mares e marés, carros e corridas",
      email: "matheusdevopsoficial@gmail.com",
      emailVerified: false,
      name: "Matheus Zanela",
      username: "matheuszanela",
      image:
        "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
      cover: "/background_profile.jpg"
    },
    isMyProfile: true,
    isFollowing: false,
    editMode: false,
    posts: [
      {
        _id: "1",
        createdAt: new Date("2023-07-29T12:34:56").getTime(),
        author: {
          _id: "1",
          email: "matheusdevopsoficial@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
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
    postsLikedByMe: []
  },
  argTypes: {
    profileInfo: {
      type: "symbol"
    },
    isMyProfile: {
      type: "boolean"
    },
    isFollowing: {
      type: "boolean"
    },
    editMode: {
      type: "boolean"
    },
    posts: {
      type: "symbol"
    },
    postsLikedByMe: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="max-w-xl">
      <PostsProfile {...args} />
    </div>
  )
};

export const AnotherPostsProfile: Story = {
  args: {
    profileInfo: {
      _id: "2",
      bio: "Mares e marés, carros e corridas",
      email: "matheusdevopsoficial@gmail.com",
      emailVerified: false,
      name: "Matheus Zanela",
      username: "matheuszanela",
      image:
        "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
      cover: "/background_profile.jpg"
    },
    isMyProfile: false,
    isFollowing: true,
    editMode: false,
    posts: [
      {
        _id: "1",
        createdAt: new Date("2023-07-29T12:34:56").getTime(),
        author: {
          _id: "1",
          email: "matheusdevopsoficial@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
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
    postsLikedByMe: []
  },
  argTypes: {
    profileInfo: {
      type: "symbol"
    },
    isMyProfile: {
      type: "boolean"
    },
    isFollowing: {
      type: "boolean"
    },
    editMode: {
      type: "boolean"
    },
    posts: {
      type: "symbol"
    },
    postsLikedByMe: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="max-w-xl">
      <PostsProfile {...args} />
    </div>
  )
};

export const WithEdit: Story = {
  args: {
    profileInfo: {
      _id: "1",
      bio: "Mares e marés, carros e corridas",
      email: "matheusdevopsoficial@gmail.com",
      emailVerified: false,
      name: "Matheus Zanela",
      username: "matheuszanela",
      image:
        "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
      cover: "/background_profile.jpg"
    },
    isMyProfile: true,
    isFollowing: false,
    editMode: true,
    posts: [
      {
        _id: "1",
        createdAt: new Date("2023-07-29T12:34:56").getTime(),
        author: {
          _id: "1",
          email: "matheusdevopsoficial@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtdLNT9ENJiWUPEIId3xLI9Wp99Y-PH7-8x9amcrrw8jzg=s96-c",
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
    postsLikedByMe: []
  },
  argTypes: {
    profileInfo: {
      type: "symbol"
    },
    isMyProfile: {
      type: "boolean"
    },
    isFollowing: {
      type: "boolean"
    },
    editMode: {
      type: "boolean"
    },
    posts: {
      type: "symbol"
    },
    postsLikedByMe: {
      type: "symbol"
    }
  },
  render: (args) => (
    <div className="max-w-xl">
      <PostsProfile {...args} />
    </div>
  )
};
