
import { AiOutlineSafety } from "react-icons/ai";
import { FaAppStoreIos, FaGamepad, FaGears } from "react-icons/fa6";
import { GiDiceFire } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { TiInfoLargeOutline } from "react-icons/ti";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./behindScenes.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export const BehindScenes = () => {


  return (
    <div className="relative">
      <div className="w-[90%] sm:[80%] mx-auto mt-20">
        <h2 className="text-3xl sm:text-5xl font-bold flex justify-center items-center gap-2">
          How It Works
          <FaGears />
        </h2>
        <p className="text-(--lightGray) text-xs md:text-sm flex items-center gap-1 
        justify-center ">
          <TbWorldSearch />
          We connect you with top-rated mobile games
        </p>

        <div
          className="bg-(--bgLighter) py-2 flex items-center justify-center
          mt-6 text-xs sm:text-sm text-center rounded-xl shadow-md px-4 w-fit mx-auto"
        >
          <p>
            We spotlight <span className="text-green-400">fun</span>,{" "}
            <span className="text-yellow-400">trending</span> mobile games and
            make it easy for you to try them through secure sources.
          </p>
        </div>

        <div className="sm:mt-12 flex flex-col md:flex-row items-center">
          <div className="md:w-[40%]">
            <DotLottieReact
              className=""
              src="https://lottie.host/b098d231-1ce4-4512-b165-573089198e24/XF36B4MB8K.lottie"
              loop
              autoplay
            />
          </div>

          <div className="md:w-[60%] mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2 shadow-md bg-(--bgLighter) p-4 rounded-xl">
              <FaGamepad className="text-4xl text-(--secondaryColor)" />
              <h3 className="text-(--complementaryColor)">Game Selection</h3>
              <p className="text-sm">
                No more endless searching — we handpick quality mobile games
                that deserve your attention.
              </p>
            </div>

            <div className="space-y-2 shadow-md bg-(--bgLighter) p-4 rounded-xl">
              <GiDiceFire className="text-4xl text-orange-400" />
              <h3 className="text-(--complementaryColor)">Curated Content</h3>
              <p className="text-sm">
                Each title is chosen based on fun, reviews, and popularity — no
                filler games here.
              </p>
            </div>

            <div className="space-y-2 shadow-md bg-(--bgLighter) p-4 rounded-xl">
              <LiaUnlockAltSolid className="text-4xl text-white" />
              <h3 className="text-(--complementaryColor)">Secure Unlock</h3>
              <p className="text-sm">
                One simple step helps support us and unlocks access to the
                download. 100% safe, no tricks.
              </p>
            </div>

            <div className="space-y-2 shadow-md bg-(--bgLighter) p-4 rounded-xl">
              <AiOutlineSafety className="text-4xl text-green-300" />
              <h3 className="text-(--complementaryColor)">
                Safe & Verified Links
              </h3>
              <p className="text-sm">
                We only share links from trusted platforms like:
                <span className="flex items-center gap-1">
                  <IoLogoGooglePlaystore />
                  Google Play - <FaAppStoreIos />
                  Apple Store
                </span>
                <span className="text-(--complementaryColor) font-bold flex items-center gap-1"></span>
              </p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
