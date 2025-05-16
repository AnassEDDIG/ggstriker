import { HiDownload } from "react-icons/hi";

export const GameBanner = ({ game }) => {
  return (
    <div
      className="relative shine h-60 md:w-2/3 md:h-auto overflow-hidden rounded-2xl
         ring-2 ring-white/10 shadow-2xl group duration-300 transition-[filter] hover:brightness-110"
      style={{
        backgroundImage: `url(${game.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute bottom-0 bg-black/80 text-white w-full h-16 flex flex-col justify-center
      r px-6 rounded-b-lg"
      >
        <h1 className="font-bold group-hover:text-(--accentColor) duration-300 flex items-center gap-1">
          {" "}
          Available for Download
          <HiDownload />
        </h1>
        <p className="text-(--lightGray) text-sm">{game.category}</p>
      </div>
    </div>
  );
};
