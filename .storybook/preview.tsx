import { SessionProvider } from "next-auth/react";
import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import "../src/styles/globals.css";

TimeAgo.addLocale(en);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "twitter-dark",
    values: [
      {
        name: "twitter-light",
        value: "white"
      },
      {
        name: "twitter-dark",
        value: "black"
      }
    ]
  }
};

export const decorators = [
  (Story) => {
    return (
      <SessionProvider>
        <Story />
      </SessionProvider>
    );
  }
];
