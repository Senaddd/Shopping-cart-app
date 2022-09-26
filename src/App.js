import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import NavBar from "./components/Navbar/NavBar";
import AboutPage from "./pages/About/AboutPage";
import Cartpage from "./pages/Cart/Cartpage";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/cart" element={<Cartpage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
