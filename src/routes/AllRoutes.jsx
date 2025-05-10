import React from "react";

import { Home } from "../pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { AllGames } from "../pages/Games/AllGames";
import { GameDetails } from "../pages/details/GameDetails";
import About from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<AllGames />} />
      <Route path="/details/:id/:state" element={<GameDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
