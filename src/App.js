import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PreNavbar from "./components/PreNavbar/PreNavbar";
import Slider from "./components/Slider/Slider";
import { banner } from "./data/data.json";

function App() {
  return (
    <div>
      <BrowserRouter>
        <PreNavbar></PreNavbar>
        <Navbar></Navbar>
        <Slider start={banner.start}></Slider>
        <Routes>
          <Route to=""></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
