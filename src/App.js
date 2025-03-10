import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/pages/home";
import manipedi from "./components/pages/manipedi";
import extensions from "./components/pages/extensions";
import hairColor from "./components/pages/hairColor";
import waxing from "./components/pages/waxing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/mani+pedi" Component={manipedi} />
          <Route path="/hair+coloring" Component={hairColor} />
          <Route path="/extensions" Component={extensions} />
          <Route path="/waxing" Component={waxing} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
