import { MdOutlineCategory } from "react-icons/md";

export const Overview = ({ game }) => {
  return (
    <div
      className="bg-(--bgLighter)/80 backdrop-blur-md ring-2 ring-white/10 p-6 rounded-2xl
              shadow-md hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
        <MdOutlineCategory className="text-(--secondaryColor)" />
        Game Overview
      </h2>
      <p className="text-sm opacity-85 leading-relaxed">{game.description}</p>
    </div>
  );
};
