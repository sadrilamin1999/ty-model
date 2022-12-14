import { Routes, Route } from "react-router-dom";
import Navbar from "./compunents/Navbar";
import Home from "./compunents/Home";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
