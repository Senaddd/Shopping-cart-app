import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Cart from "./pages/Cart/Cartpage";
import NavBar from "./components/Navbar/NavBar";
import AboutPage from "./pages/About/AboutPage";
import Cartpage from "./pages/Cart/Cartpage";
function App() {
  return (
    <>
      <div className="App">
        <NavBar />

        <Routes>
          <Route to={"/"} element={<Homepage />}></Route>
          <Route to={"/about"} element={<AboutPage />}></Route>
          <Route to={"/cart"} element={<Cartpage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
