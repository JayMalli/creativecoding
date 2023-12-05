import FirebaseContext from "./Context/firebase";
import Home from "./Layouts/Home";
import { firebase } from "./lib/firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Home />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </FirebaseContext.Provider>
  );
}

export default App;
