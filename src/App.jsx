import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Akciok from "./components/Akciok/Akciok";
import Rolunk from "./components/Rolunk/Rolunk";
import Kapcsolat from "./components/Kapcsolat/Kapcsolat";
import Helyszinek from "./components/Helyszinek/Helyszinek";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/akciok" element={<Akciok />} />
          <Route path="/rolunk" element={<Rolunk />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/helyszinek" element={<Helyszinek />} />
      </Routes>
    </>
  );
}

export default App;
