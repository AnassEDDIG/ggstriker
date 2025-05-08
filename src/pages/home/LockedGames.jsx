import React from "react";
import { FaBan, FaEyeSlash, FaLock } from "react-icons/fa";
import { GiLockedChest } from "react-icons/gi";
import { lockedGames } from "../../data/lockedGames";
import millify from "millify";
import { Link } from "react-router-dom";

export const LockedGames = () => {
  return (
    <div className="w-[90%] sm:[80%] mx-auto mt-20">
      <h2 className="text-3xl sm:text-5xl font-bold flex justify-center items-center text-center">
        Claim your rewards🎁
      </h2>
      <p className="text-(--lightGray) text-xs md:text-sm flex items-center gap-1 justify-center">
        <GiLockedChest />
        Unlock Hidden Games for free
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {lockedGames.map((game, index) => (
          <Link
            to={`/details/game-${game.id}`}
            key={index}
            className="relative bg-(--bgLighter)  rounded-xl overflow-hidden group shadow-md
             hover:shadow-lg transition"
          >
            <div className="overflow-hidden">
              <img
                src={game.banner}
                className="w-full h-40 object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform
               duration-300"
              />
            </div>
            <div
              className="absolute inset-0 bg-black/60 flex flex-col items-center
             justify-center opacity-100 md:opacity-0 group-hover:opacity-100  transition"
            >
              <span className="text-white text-lg flex items-center gap-1">
                <FaLock />
                Locked
              </span>
              <Link Link to={`/details/game-${game.id}`}>
                <button
                  className="mt-2 bg-(--mainColor) text-black px-3 py-2 rounded
                 text-sm font-semibold cursor-pointer"
                >
                  Unlock Now
                </button>
              </Link>
            </div>

            <div className="p-3 flex flex-col justify-between">
              <h3 className="font-semibold text-white flex items-center gap-2">
                {game.name[0] + "****" + game.name.at(-1)}
              </h3>
              <p className="mt-2 text-(--lightGray) text-xs md:text-sm line-clamp-3 mb-4 ">
                {game.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-(--accentColor) py-0.5 rounded-full inline-block mt-1">
                  {game.category}
                </span>
                <span className="text-xs text-(--lightGray)">
                  +{millify(game.downloads)} Downloads
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
