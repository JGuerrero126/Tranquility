import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/pages/home";
import manipedi from "./components/pages/manipedi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/manipedi-pricing" Component={manipedi} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
