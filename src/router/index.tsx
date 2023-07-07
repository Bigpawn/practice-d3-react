import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CanvasRandomMotion from "../pages/CanvasRandomMotion";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/canvasRandomMotion" element={<CanvasRandomMotion />} />
    </Routes>
  );
};

export default Router;
