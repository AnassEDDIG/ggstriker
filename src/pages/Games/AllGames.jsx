import React, { useState, useMemo, useEffect } from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { games } from "../../data/Games";
import millify from "millify";
import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const AllGames = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortDownloads, setSortDownloads] = useState("");
  const [sortRating, setSortRating] = useState("");

  // Get unique categories from the data
  const categories = useMemo(() => {
    const unique = Array.from(new Set(games.map((g) => g.category)));
    return ["All", ...unique];
  }, []);

  // Filtered and sorted games
  const filteredGames = useMemo(() => {
    let filtered = [...games];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((game) => game.category === selectedCategory);
    }

    if (sortDownloads) {
      filtered.sort((a, b) =>
        sortDownloads === "asc"
          ? a.downloads - b.downloads
          : b.downloads - a.downloads
      );
    }

    if (sortRating) {
      filtered.sort((a, b) =>
        sortRating === "asc" ? a.rating - b.rating : b.rating - a.rating
      );
    }

    return filtered;
  }, [selectedCategory, sortDownloads, sortRating]);
  const maskName = (name) =>
    name.length <= 2 ? "*".repeat(name.length) : `${name[0]}****${name.at(-1)}`;

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-16 mb-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r
         from-(--mainColor) via-(--complementaryColor) to-(--accentColor)
          bg-clip-text text-transparent mainFont flex items-center justify-center gap-2"
        >
          <MdOutlineCategory className="text-(--secondaryColor)" />
          Explore All Games
        </h2>
        <p className="text-(--lightGray) mt-2 sm:mt-4 text-xs sm:text-sm md:text-base max-w-xl mx-auto opacity-80">
          Dive into a universe of thrilling adventures, epic battles, and
          stunning worlds.
        </p>
      </div>

      {/* Sorting Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mb-10">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className="px-4 py-2 rounded-md bg-(--bgLighter) text-white outline-0 cursor-pointer"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setSortDownloads(e.target.value)}
          value={sortDownloads}
          className="px-4 py-2 rounded-md bg-(--bgLighter) text-white outline-0 cursor-pointer"
        >
          <option value="">Sort by downloads</option>
          <option value="asc">Downloads: Lowest</option>
          <option value="desc">Downloads: Highest</option>
        </select>
        <select
          onChange={(e) => setSortRating(e.target.value)}
          value={sortRating}
          className="px-4 py-2 rounded-md bg-(--bgLighter) text-white outline-0 cursor-pointer"
        >
          <option value="">Sort by rating</option>
          <option value="asc">rating : Highest</option>
          <option value="desc">rating : Lowest</option>
        </select>
      </div>

      {/* Games Grid */}
      {filteredGames.length === 0 ? (
        <p className="text-center text-(--lightGray) text-lg opacity-60">
          No games found for this filter.
        </p>
      ) : (
        <div className="px-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredGames.map((game, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="will-change-transform"
            >
              <Link
                to={`/details/game-${game.id}/state-0`}
                className="h-full hover:scale-105 transition-transform duration-300 ease-out border-(--mainColor) 
                 bg-(--bgLighter) rounded-xl shadow-md cursor-pointer flex flex-col"
              >
                {/* Game Banner */}
                <div
                  className="relative w-full h-40 rounded-md flex justify-center items-end "
                  style={{
                    backgroundImage: `url(${game.banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className="block w-20 h-20 rounded-md relative top-10"
                    loading="lazy"
                  />
                  <p className="absolute left-4 -bottom-6 text-(--complementaryColor) text-xs">
                    {game.category}
                  </p>
                </div>

                {/* Game Info */}
                <div className="mt-8 p-4 flex flex-col justify-between flex-1">
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-white flex justify-between items-center">
                      {maskName(game.name)}
                    </h3>
                    <p className="text-xs text-(--lightGray) opacity-70 leading-relaxed">
                      {game.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-(--lightGray)">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" /> {game.rating}
                    </span>
                    <Link
                      to={`/details/game-${game.id}/state-0`}
                      className="flex items-center justify-center gap-1 bg-gradient-to-r 
              from-(--mainColor) to-(--secondaryColor) text-white px-4 py-2
              rounded-md cursor-pointer"
                    >
                      <IoGameController />
                      Play Now
                    </Link>
                    <span className="flex items-center gap-1">
                      <FaDownload className="text-(--secondaryColor)" />+
                      {millify(game.downloads)}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
