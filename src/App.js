import { Routes, Route } from "react-router-dom";
import Navbar from "./compunents/Navbar";
import Home from "./compunents/Home";

const App = () => {
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
