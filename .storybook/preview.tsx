import type { Preview } from "@storybook/react";
import React from "react";
import { Story as StoryType } from "@storybook/react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Story } from "@storybook/react";
import { NavigationProvider } from "../contexts/Navigation";
import { decorator as mockRouterDecorator } from "../__mocks__/next/router";

export const decorators = [
  (Story: Story) => (
    <NavigationProvider>
      <GlobalStyle />
      <Story />
    </NavigationProvider>
  ),
  mockRouterDecorator,
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

//new using chatgpt
// import type { Preview } from "@storybook/react";
// import React from 'react';
// import { Story as StoryType } from "@storybook/react";
// import GlobalStyle from '../styles/GlobalStyle';
// import { Story } from '@storybook/react';
// import { decorator as mockRouterDecorator } from "../__mocks__/next/router";

// export const decorators = [
//   (Story: Story) => (
//     <>
//       <GlobalStyle />
//       <Story />
//     </>
//   ),
//   mockRouterDecorator,
// ];

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// // Add the 'preview' decorator to the list of decorators
// export const parameters = {
//   decorators: [...decorators, (Story: React.ComponentType) => <Story {...preview} />],
// };
