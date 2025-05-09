import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrow } from "../../components/carousel/NextArrow";
import { PrevArrow } from "../../components/carousel/PrevArrow";

import { FaDownload } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";

import millify from "millify";
import { featuredGames } from "../../data/featuredGames";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { Link } from "react-router-dom";

export const FeaturedGames = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20 w-[85%] sm:w-[80%]  mx-auto text-center">
      <h2
        id="featured-games"
        className="text-3xl sm:text-5xl font-bold flex justify-center items-center "
      >
        Featured Games{" "}
        <IoMdTrendingUp className="text-(--complementaryColor)" />
      </h2>
      <p className="text-(--lightGray) text-xs md:text-sm flex items-center gap-1 justify-center ">
        <FaRankingStar />
        Games we choosed for you this month
      </p>
      <Slider {...settings} className="mt-10">
        {/* Games Here */}
        {featuredGames.map((game, index) => (
          <div key={index} className="px-3 h-full">
            <div className="relative bg-(--bgLighter) shadow-lg rounded-xl p-4 flex flex-col items-center">
              <div
                className="w-full h-32 md:h-40 rounded-md"
                style={{
                  backgroundImage: `url(${game.banner})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              >
                <img
                  src={game.image}
                  className="w-16 h-16 sm:w-24 sm:h-24 absolute top-28 md:top-32  left-1/2 -translate-x-1/2 mb-3 rounded-md"
                />
              </div>

              <h3 className="mt-16 text-base md:text-2xl font-semibold text-gray-200 flex items-center justify-center gap-2">
                <GiPerspectiveDiceSixFacesRandom className="text-yellow-400" />
                Mystery Game
              </h3>
              <p className="text-xs text-(--lightGray)">{game.description}</p>
              <span className="text-xs text-(--accentColor) px-2 py-1 rounded-full mt-2">
                {game.category}
              </span>
              <div className="text-center text-(--lightGray)">
                <p className="text-xs">+{millify(game.downloads)} Downloads</p>
                <Link to={`/details/game-${game.id}/state-0`}>
                  <button className="special-btn mt-2">
                    Download Now <FaDownload />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
