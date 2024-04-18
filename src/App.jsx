import "./App.css";
import Navbar from "./components/navbar";
import Home from "./view/home";

function App() {
  return (
    <div className="w-full min-h-[100vh] max-h-max relative bg_gradient">
      <Navbar />
      <Home />
      <div className="w-[90%] h-[100vh] m-auto"></div>
    </div>
  );
}

export default App;
