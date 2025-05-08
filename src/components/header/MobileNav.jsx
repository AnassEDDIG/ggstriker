import { AiFillCaretRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const MobileNav = () => {
  return (
    <ul className="flex flex-col md:hidden mt-10 w-full text-center space-y-4">
      <NavLink className="py-1" to="/">
        Home
      </NavLink>
      <NavLink className="py-1" to="/games">
        Games
      </NavLink>
      <NavLink className="py-1" to="/about">
        About
      </NavLink>
      <NavLink className="py-1" to="/contact">
        Contact
      </NavLink>
    </ul>
  );
};
