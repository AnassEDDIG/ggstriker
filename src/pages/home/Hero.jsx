import { RiMedalFill } from "react-icons/ri";
import { Button } from "../../components/common/Button";
import { FaAppStoreIos, FaGamepad } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import gamepad1 from "../../assets/images/gamepad1.png";
import gamepad2 from "../../assets/images/gamepad2.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="text-center px-2">
      <div className="flex justify-center items-center text-sm sm:text-base">
        <RiMedalFill className="text-(--accentColor)" />
        <span className="text-(--accentColor)">Top Games&nbsp;</span>
        <p>- Various Games Genres</p>
      </div>
      {/* Qualities */}
      <div
        className="mt-4 flex justify-between bg-(--bgLighter) shadow-md sm:w-3/4
      lg:w-2/4 mx-auto px-4 py-2 text-xs rounded-md"
      >
        <p className="flex items-center gap-1">
          <AiFillSafetyCertificate className="text-base" /> Secure
        </p>
        |
        <p className="flex items-center gap-1">
          <IoLogoGooglePlaystore className="text-base" /> Google play
        </p>
        |
        <p className="flex items-center gap-1">
          <FaAppStoreIos className="text-base" /> App Store
        </p>
      </div>
      {/* website intro */}
      <div className="mt-6 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Play Something Worth Your Time
        </h1>
        <p className="text-(--lightGray) sm:px-8 md:px-32 lg:px-40 xl:px-80">
          Discover the best mobile games on across every genre. We rank the top
          picks, so you can skip the search and start playing. Quick, clean, and
          built for gamers.
        </p>
      </div>
      {/* gamepads Images */}
      <div className="hidden xl:block">
        <img
          className="w-52 2xl:w-72 absolute right-6 top-32"
          src={gamepad1}
          alt="gamepad1"
        />
        <img
          className="w-52 2xl:w-72 absolute left-6 top-32"
          src={gamepad2}
          alt="gamepad2"
        />
      </div>

      <div className="flex gap-4 items-center w-fit mx-auto mt-8">
        <Link to="/games">
          <Button name={"Play Now"}>
            <FaGamepad className="text-xl" />
          </Button>
        </Link>
      </div>

      <div className="relative mt-8 xl:mt-[2%]  w-full ">
        <DotLottieReact
          className="w-72 mx-auto cursor-pointer"
          src="https://lottie.host/de1e2d20-59c5-43cb-98a3-d263a0643f5e/TvcQPLqdHZ.lottie"
          loop
          autoplay
          onClick={() => {
            const element = document.getElementById("featured-games");
            if (element) {
              const yOffset = -90; // Negative value moves the scroll up (reveals content)
              const y = element.getBoundingClientRect().top + yOffset;

              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        />
      </div>
    </div>
  );
};
