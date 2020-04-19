import React from "react";
import asyncComponent from "./components/AsyncComponent";

const AsyncFeed = asyncComponent(() => import("./containers/Feed"));

export default [
  {
    path: "/",
    component: <AsyncFeed />,
  },
];
