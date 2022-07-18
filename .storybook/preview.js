import { theme } from "../src/theme";

// config theme chakra for storybook
export const parameters = {
   actions: { argTypesRegex: "^on[A-Z].*" },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
   chakra: {
      theme: theme,
   },
};
