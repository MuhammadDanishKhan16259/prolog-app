import type { Preview } from "@storybook/react";
// import React from 'react';
// import GlobalStyle from '../styles/GlobalStyle';
// import { Story } from '@storybook/react';

// export const decorators = [
//   (Story: Story) => (
//     <>
//       <GlobalStyle />
//       <Story />
//     </>
//   ),
// ];

// import { GlobalStyle} from '../styles/GlobalStyle';
// export const decorators = [
// (Story) (
//   <>
// <GlobalStyle />
// <Story />
// </>
// ),
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
