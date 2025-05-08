import { useState } from "react";

import { GiCrystalBars, GiWingedSword } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
import { MobileNav } from "./MobileNav";
import "./header.css";
import { Button } from "../common/Button";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header
      className={`bg-(--bgColor) h-20 md:h-20 py-4 px-4 md:px-8 overflow-hidden duration-300 ${
        isOpen && "h-80"
      } border-b border-(--secondaryColor) sticky top-0 z-40 shadow-md`}
    >
      <div className="flex justify-between items-center">
        <Link to="/">
          <p className="flex items-center text-base md:text-lg lg:text-xl">
            <GiWingedSword className="text-2xl" />
            <span className="text-(--secondaryColor) flex font-bold">GGS</span>
            triker.
          </p>
        </Link>
        <ul className="hidden md:flex gap-6 lg:gap-12 items-center text-sm lg:text-base">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Games</NavLink>
          <li>
            <GiCrystalBars className="neon-glow" />
          </li>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        <div className="hidden md:block">
          <Button name={"Explore Games"}>
            <FaGamepad className="text-xl" />
          </Button>
        </div>
        <div className="md:hidden">
          <Hamburger
            rounded
            label="Show menu"
            size={25}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
      <div className="">
        <MobileNav />
      </div>
    </header>
  );
};
