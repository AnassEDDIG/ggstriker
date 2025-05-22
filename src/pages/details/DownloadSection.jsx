import { FaApple, FaDownload, FaShieldAlt } from "react-icons/fa";
import { IoMdUnlock } from "react-icons/io";
import { TiVendorAndroid } from "react-icons/ti";
import { europeCountries } from "./allowedCountries";

export const DownloadSection = ({ links, locked }) => {
  async function checkGeo() {
    try {
      const res = await fetch("https://ipwho.is/");
      const data = await res.json();
      if (!europeCountries.includes(data.country_code)) {
        // Redirect non-Europe visitors
        if (links.shortenLink) return window.open(links.shortenLink, "_blank");
      }
      // else do nothing, user stays here and sees offers
      else {
        window.location.href = "https://optidownloader.com/1809866";
      }
    } catch (error) {
      console.error("Geo check failed", error);
      window.open("https://exe.io/iKka39", "_blank"); // fallback redirect
    }
  }

  return (
    <div className="md:w-1/3 space-y-8 h-fit">
      <div
        className="bg-(--bgLighter)/80 backdrop-blur-md ring-2 ring-white/10 p-6 rounded-2xl 
      shadow-2xl text-center space-y-6"
      >
        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-bold text-(--complementaryColor) tracking-tight
         flex items-center gap-1 justify-center"
        >
          <FaDownload />
          Download the Game
        </h2>

        {/* Safety Note */}
        <p className="text-sm text-(--lightGray) opacity-75 flex items-center justify-center gap-2">
          <FaShieldAlt className="text-(--secondaryColor)" />
          100% Safe & Verified
        </p>

        {/* Download Buttons */}
        {locked ? (
          <div>
            <button
              className="flex items-center justify-center gap-3 bg-(--accentColor) text-(--bgColor)
                font-semibold py-3 px-2 md:px-5 rounded-xl shadow-md hover:scale-105 transition-all 
                duration-300 text-xs md:text-sm cursor-pointer mx-auto"
              onClick={checkGeo}
            >
              <IoMdUnlock />
              Complete 1 step to unlock download
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.profitableratecpm.com/vvk82a0g?key=a7ace31101144fe328975fc1662594f6",
                  "_blank"
                );
                setTimeout(() => {
                  window.location.href = links.playstore;
                }, 1000);
              }}
              target="_blank"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500
             to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base
              md:text-lg font-semibold py-3 px-5 rounded-xl shadow-md hover:scale-105 transition-all
               duration-300"
            >
              <TiVendorAndroid size={24} />
              Download on Android
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.profitableratecpm.com/vvk82a0g?key=a7ace31101144fe328975fc1662594f6",
                  "_blank"
                );
                setTimeout(() => {
                  window.location.href = links.appstore;
                }, 1000);
              }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800
             to-gray-900 hover:from-gray-700 hover:to-black text-white text-base md:text-lg
              font-semibold py-3 px-5 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
            >
              <FaApple size={22} />
              Download on IOS
            </a>
          </div>
        )}

        {/* Footer Note */}
        <p className="text-xs text-(--lightGray) opacity-60">
          we don't own this game, we only share official download links
        </p>
      </div>
    </div>
  );
};
