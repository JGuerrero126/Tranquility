import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Home from "./components/pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
