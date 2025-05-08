import { AiFillTikTok } from "react-icons/ai";
import { FaDiscord, FaFacebookSquare, FaGamepad } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { GiWingedSword } from "react-icons/gi";
import { LiaGamepadSolid } from "react-icons/lia";
import { LuBadgeInfo } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="shadow-lg border-t border-(--secondaryColor)  mt-20 bg-(--bgColor) p-6 text-(--lightGray) text-center md:text-start ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <p className="flex items-center text-base md:text-lg lg:text-xl justify-center md:justify-start">
            <GiWingedSword className="text-2xl mr-1" />
            <span className="text-(--secondaryColor) font-bold">GGS</span>
            <span>triker.</span>
          </p>
          <p className="mt-2 text-sm sm:text-base">
            Thanks for gaming with us — stay adventurous!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-base ">
          <h4 className="text-(--secondaryColor) font-semibold mb-2">
            Quick Links
          </h4>
          <Link
            to="/games"
            className="hover:text-(--secondaryColor) flex items-center gap-1
           justify-center md:justify-start"
          >
            <LiaGamepadSolid />
            Games
          </Link>
          <Link
            to="/contact"
            className="hover:text-(--secondaryColor) flex items-center gap-1 
              justify-center md:justify-start"
          >
            <MdEmail />
            Contact
          </Link>
          <Link
            to="/about"
            className="hover:text-(--secondaryColor) flex items-center gap-1
              justify-center md:justify-start"
          >
            <LuBadgeInfo />
            About
          </Link>
        </div>

        {/* Social & Info */}
        <div className="flex flex-col space-y-2 text-sm sm:text-base items-center md:items-start">
          <h4 className="text-(--secondaryColor) font-semibold mb-2">
            Stay Connected
          </h4>
          <p>Follow us for updates and new drops!</p>
          <div className="flex gap-3 mt-2 text-2xl">
            {/* Example placeholder icons, you can add social icons later */}
            <a href="#" className="hover:text-(--secondaryColor)">
              <FaFacebookSquare />
            </a>
            <a href="#" className="hover:text-(--secondaryColor)">
              <AiFillTikTok />
            </a>
            <a href="#" className="hover:text-(--secondaryColor)">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-(--mainColor)/30 pt-4 text-xs text-center">
        <span className="text-(--mainColor) text-xs flex items-center justify-center gap-1">
          {" "}
          <FaChalkboardUser /> Made with love by Anass Eddig.
        </span>
        © {new Date().getFullYear()} GGStriker. All rights reserved.
      </div>
    </footer>
  );
};
