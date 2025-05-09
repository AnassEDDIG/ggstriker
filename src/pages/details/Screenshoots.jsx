import { BsImages } from "react-icons/bs";

export const Screenshoots = ({ game }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
        <BsImages className="text-(--secondaryColor)" />
        Gameplay Screenshots
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {game.screenshoots.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg
                     transition-shadow  ring-2 ring-white/10"
          >
            <img
              src={src}
              alt={`Gameplay ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
