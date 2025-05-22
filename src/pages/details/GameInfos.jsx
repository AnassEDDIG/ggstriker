import millify from "millify";
import { FaDownload, FaStar } from "react-icons/fa";
import { FaCircleInfo, FaUserGear } from "react-icons/fa6";
import { MdStorage } from "react-icons/md";

export const GameInfos = ({ game }) => {
  return (
    <div
      className="md:w-1/3 bg-(--bgLighter) ring-2 ring-white/10 backdrop-blur-md  p-6
     rounded-2xl shadow-xl text-white space-y-6 "
    >
      <h2
        className="text-xl lg:text-3xl font-semibold flex items-center gap-3 justify-center text-white
       border-b border-white/10 pb-3"
      >
        <img
          src={game.image}
          className="w-10 h-10 rounded-full"
          alt=""
        />
        Quick Game Facts
      </h2>

      <div className="text-sm md:text-base space-y-3">
        <InfoRow label="Size" value={game.size} icon={<MdStorage />} />
        <InfoRow
          label="Developer"
          value={game.developer}
          icon={<FaUserGear />}
        />
        <InfoRow
          label="Downloads"
          value={millify(game.downloads)}
          icon={<FaDownload />}
        />
        <InfoRow
          label="Rating"
          value={
            <span className="flex items-center gap-1 text-yellow-400">
              <FaStar /> {game.rating}
            </span>
          }
          icon={<FaStar />}
        />

        <InfoRow label="Version" value={game.version} />
        <InfoRow label="Last Update" value={game.last_update} />
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, icon }) => (
  <p className="flex justify-between items-center px-2 text-sm md:text-base">
    <span className="flex items-center gap-2 text-gray-300 font-medium">
      {icon && <span className="text-(--mainColor)">{icon}</span>}
      {label}:
    </span>
    <span className="font-semibold text-white">{value}</span>
  </p>
);
