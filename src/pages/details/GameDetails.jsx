import { useParams } from "react-router-dom";
import { DownloadSection } from "./DownloadSection";
import { GameInfos } from "./GameInfos";
import { games } from "../../data/Games";
import { SuggestedGames } from "./SuggestedGames";
import { useEffect } from "react";
import { GameBanner } from "./GameBanner";
import { Overview } from "./Overview";
import { Screenshoots } from "./Screenshoots";

import { FaTags } from "react-icons/fa";
import { MdKey } from "react-icons/md";

export const GameDetails = () => {
  const id = +useParams().id.split("-")[1];
  const game = games.find((game) => game.id == id);
  let state = useParams().state.split("-")[1];
  let locked = true;
  if (state == 1) {
    locked = false;
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);
  return (
    <div className="mt-12 w-[92%] mx-auto text-(--lightGray)">
      {/* Game Title */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl flex 
        items-center justify-center gap-3 font-bold bg-gradient-to-r
         from-(--mainColor) via-(--complementaryColor) to-(--accentColor)
          bg-clip-text text-transparent mainFont"
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
        <GameBanner game={game} />
        <GameInfos game={game} />
      </div>

      {/* Game Body Content */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="md:w-2/3 space-y-12">
          {/* About */}
          <Overview game={game} />
          {/* Screenshots */}
          <Screenshoots game={game} />
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
        <DownloadSection locked={locked} links={game.download_links} />
      </div>
      <SuggestedGames id={id} />
    </div>
  );
};
