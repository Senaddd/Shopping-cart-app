import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <div className="App">
        <NavBar />

        <Routes>
          <Route to={"/"} element={<Homepage />}></Route>
          <Route to={"/about"} element={<About />}></Route>
          <Route to={"/products"} element={<Products />}></Route>
          <Route to={"/cart"} element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
