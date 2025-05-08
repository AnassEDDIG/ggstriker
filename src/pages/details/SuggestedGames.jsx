import { FaDownload } from "react-icons/fa";
import { MdOutlineRecommend } from "react-icons/md";
import { Button } from "../../components/common/Button";
import { games } from "../../data/Games"; // assuming you have a games array
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { Link } from "react-router-dom";

// Shuffle utility

export const SuggestedGames = ({ id }) => {
  const shuffleArray = (array) => {
    return [...array]
      .sort(() => 0.5 - Math.random())
      .filter((ele) => ele.id != id);
  };
  // Get 6 random games
  const randomGames = shuffleArray(games).slice(0, 3);

  return (
    <div className="mt-16">
      <h2
        className="text-3xl text-white font-bold mb-8 text-center flex items-center
       justify-center gap-2"
      >
        <MdOutlineRecommend className="text-(--secondaryColor)" />
        Suggested Games
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {randomGames.map((game) => (
          <Link
            to={`/details/game-${game.id}`}
            key={game.id}
            className="bg-(--bgLighter) border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={game.banner}
              alt="game banner"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className=" text-base md:text-2xl font-semibold text-gray-200 flex items-center justify-center gap-2">
                <GiPerspectiveDiceSixFacesRandom className="text-yellow-400" />
                Mystery Game
              </h3>
              <p className="text-sm text-gray-300 line-clamp-2">
                {game.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-(--complementaryColor) px-2 py-1 rounded-full mt-2">
                  {game.category}
                </span>
                <Button
                  to={`/details/game-${game.id}`}
                  className="text-sm flex items-center gap-1"
                >
                  <FaDownload /> Download
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
