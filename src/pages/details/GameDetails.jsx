import { FaTags } from "react-icons/fa";
import { MdKey, MdOutlineCategory } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import { DownloadSection } from "./DownloadSection";
import { GameInfos } from "./GameInfos";
import { useParams } from "react-router-dom";
import { games } from "../../data/Games";
import { SuggestedGames } from "./SuggestedGames";
import { useEffect } from "react";

export const GameDetails = () => {
  const id = +useParams().id.split("-")[1];
  const game = games.find((game) => game.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);
  return (
    <div className="mt-12 w-[92%] mx-auto text-(--lightGray)">
      {/* Game Title */}
      <div className="text-center mb-12">
        <img
          src={game.image}
          className="w-12 h-12 rounded-md mx-auto md:hidden"
          alt=""
        />
        <h1
          className="text-4xl md:text-5xl font-bold text-(--complementaryColor) flex 
        items-center justify-center gap-3"
        >
          <MdKey className="text-(--accentColor)" />
          Play Now
        </h1>
        <p className="text-sm opacity-70 mt-2 max-w-xl mx-auto">
          Dive into immersive gameplay, unlock the experience
        </p>
      </div>

      {/* Banner + Info */}
      <div className="flex flex-col md:flex-row gap-10 mb-14">
        <div
          className="relative shine h-60 md:w-2/3 md:h-auto overflow-hidden rounded-2xl
         ring-2 ring-white/10 shadow-2xl group"
        >
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${game.iframe_id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>

        <GameInfos game={game} />
      </div>

      {/* Game Body Content */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="md:w-2/3 space-y-12">
          {/* About */}
          <div
            className="bg-(--bgLighter)/80 backdrop-blur-md ring-2 ring-white/10 p-6 rounded-2xl
           shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <MdOutlineCategory className="text-(--secondaryColor)" />
              Game Overview
            </h2>
            <p className="text-sm opacity-85 leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* Screenshots */}
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

          {/* Tags */}
          <div>
            <h2 className="text-2xl font-semibold  text-white mb-3 flex items-center justify-center sm:justify-start gap-2">
              <FaTags className="text-(--secondaryColor)" />
              Tags
            </h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-lg text-sm font-medium bg-(--bgLighter) text-(--lightGray)
                hover:bg-(--accentColor)/10 hover:text-(--accentColor) transition backdrop-blur-sm cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content: Download Box */}
        <DownloadSection links={game.download_links} />
      </div>
      <SuggestedGames id={id} />
    </div>
  );
};
