import type { Preview } from "@storybook/react";
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
