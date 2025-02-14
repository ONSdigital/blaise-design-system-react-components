module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}