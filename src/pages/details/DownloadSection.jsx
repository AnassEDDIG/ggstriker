import React from "react";
import { FaGooglePlay, FaApple, FaShieldAlt } from "react-icons/fa";
import { Button } from "../../components/common/Button";
import { TiVendorAndroid } from "react-icons/ti";

export const DownloadSection = ({ links }) => {
  return (
    <div className="md:w-1/3 space-y-8 h-fit">
      <div className="bg-(--bgLighter)/80 backdrop-blur-md ring-2 ring-white/10 p-6 rounded-2xl shadow-2xl text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-(--complementaryColor) tracking-tight">
          Get the Game
        </h2>

        {/* Icons or ratings if needed */}
        <p className="text-sm text-(--lightGray) opacity-75 flex items-center justify-center gap-2">
          <FaShieldAlt className="text-(--secondaryColor)" />
          100% Safe & Verified
        </p>

        {/* Download Buttons */}
        <div className="space-y-4">
          <a
            href={links.playstore}
            target="_blank"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500
             to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base md:text-lg
              font-semibold py-3 px-5 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
          >
            <TiVendorAndroid size={24} />
            Download on Android
          </a>

          <a
            href={links.appstore}
            target="_blank"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800
             to-gray-900 hover:from-gray-700 hover:to-black text-white text-base md:text-lg
              font-semibold py-3 px-5 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaApple size={22} />
            Download on IOS
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-(--lightGray) opacity-60">
          we don't own this game, we only share official download links
        </p>
      </div>
    </div>
  );
};
