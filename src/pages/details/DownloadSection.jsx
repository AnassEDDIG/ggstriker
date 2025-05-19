import { FaApple, FaDownload, FaShieldAlt } from "react-icons/fa";
import { TiVendorAndroid } from "react-icons/ti";

export const DownloadSection = ({ links }) => {
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

        {/* Icons or ratings if needed */}
        <p className="text-sm text-(--lightGray) opacity-75 flex items-center justify-center gap-2">
          <FaShieldAlt className="text-(--secondaryColor)" />
          100% Safe & Verified
        </p>

        {/* Download Buttons */}
        {/* {locked ? (
          <div>
            <a
              className="flex items-center justify-center gap-3 bg-(--accentColor) text-(--bgColor)
                font-semibold py-3 px-2 md:px-5 rounded-xl shadow-md hover:scale-105 transition-all 
                duration-300 text-xs md:text-sm cursor-pointer mx-auto"
              onClick={(e) => {
                e.preventDefault();
                // Open Adsterra direct link in a new tab
                window.open(
                  "https://www.profitableratecpm.com/vvk82a0g?key=a7ace31101144fe328975fc1662594f6",
                  "_blank"
                );

                // Then redirect user to Play Store after 1 second
                if (counter == 2) window.location.href = links.playstore;
                else setCounter((oldval) => oldval + 1);
              }}
            >
              <IoMdUnlock />
              Complete 1 step to unlock download
            </a>
          </div>
        ) : ( */}
        <div className="space-y-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // Open Adsterra direct link in a new tab
              window.open(
                "https://www.profitableratecpm.com/vvk82a0g?key=a7ace31101144fe328975fc1662594f6",
                "_blank"
              );
              // Then redirect user to Play Store after 1 second
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
              // Open Adsterra direct link in a new tab
              window.open(
                "https://www.profitableratecpm.com/vvk82a0g?key=a7ace31101144fe328975fc1662594f6",
                "_blank"
              );
              // Then redirect user to Play Store after 1 second
              setTimeout(() => {
                window.location.href = links.playstore;
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
        {/* )} */}

        {/* Footer Note */}
        <p className="text-xs text-(--lightGray) opacity-60">
          we don't own this game, we only share official download links
        </p>
      </div>
    </div>
  );
};
