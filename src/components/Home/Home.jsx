import React from "react";
import Hero from "../Hero/Hero";
import Menu from "../Menu/Menu";
import Akciok from "../Akciok/Akciok";
import Kapcsolat from "../Kapcsolat/Kapcsolat";
import Rolunk from "../Rolunk/Rolunk";
import Helyszinek from "../Helyszinek/Helyszinek";

const Home = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <Akciok />
      <Rolunk />
      <Kapcsolat />
      <Helyszinek />
    </div>
  );
};

export default Home;
