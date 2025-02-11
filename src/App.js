import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import manipedi from "./components/pages/manipedi";
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      {/* <ChakraProvider> */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/manipedi" Component={manipedi} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* </ChakraProvider> */}
    </div>
  );
}

export default App;
