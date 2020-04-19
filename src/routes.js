import React from "react";
import asyncComponent from "./components/AsyncComponent";
import Feed from "./containers/Feed";

const AsyncFeed = asyncComponent(() => import("./containers/Feed"));

export default [
  {
    path: "/",
    component: <Feed />,
  },
];
