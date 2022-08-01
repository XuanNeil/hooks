import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "@src/components/layout";
import { Title } from "@src/components/title";
import { theme } from "@src/theme";

function App() {
   return (
      <ChakraProvider resetCSS theme={theme}>
         <h1>React hooks</h1>
         <Layout />
         <Title />
      </ChakraProvider>
   );
}

export default App;
