const path = require("path");

// config alias storybook: https://github.com/storybookjs/storybook/issues/11989#issuecomment-674833064
module.exports = {
   stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
   addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/preset-create-react-app",
      "@chakra-ui/storybook-addon",
   ],
   typescript: {
      check: false,
      checkOptions: {},
      reactDocgen: "react-docgen-typescript",
      reactDocgenTypescriptOptions: {
         shouldExtractLiteralValuesFromEnum: true,
         propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      },
   },
   framework: "@storybook/react",
   core: {
      builder: "@storybook/builder-webpack5",
   },
   webpackFinal: async (config) => {
      config.resolve.alias = {
         ...config.resolve.alias,
        "@src": path.resolve(__dirname, "../src"),
      };
      return config;
   },
};
