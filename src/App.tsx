import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@src/theme";

function App() {
   return (
      <ChakraProvider resetCSS theme={theme}>
         <h1>React hooks</h1>
      </ChakraProvider>
   );
}

export default App;
