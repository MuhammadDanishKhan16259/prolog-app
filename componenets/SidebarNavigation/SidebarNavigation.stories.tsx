// import type { Meta, StoryObj } from "@storybook/react";
// // import { Header } from "./Header";
// import { SidebarNavigation } from "./SidebarNavigation";
// const meta = {
//   title: "UI/SidebarNavigation",
//   component: SidebarNavigation,
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ["autodocs"],
//   parameters: {
//     // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
//     layout: "fullscreen",
//   },
// } satisfies Meta<typeof SidebarNavigation>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: "Jane Doe",
//     },
//   },
// };

// export const LoggedOut: Story = {};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SidebarNavigation } from "./SidebarNavigation";
export default {
  title: "UI/SidebarNavigation",
  component: SidebarNavigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SidebarNavigation>;
const Template: ComponentStory<typeof SidebarNavigation> = () => (
  <SidebarNavigation />
);
export const Default = Template.bind({});
Default.args = {};
