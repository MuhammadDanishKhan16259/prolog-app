import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  // component: {
  //   devServer: {
  //     framework: "react",
  //     bundler: "webpack",
  //   },
  // },

  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners

    // },

    baseUrl: "http://localhost:3000",
  },
});
// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     baseUrl: "http://localhost:3000",
//   },

//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "webpack",
//     },
//   },
// });
