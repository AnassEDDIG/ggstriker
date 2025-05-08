import { useEffect } from "react";
import { BehindScenes } from "./BehindScenes";
import { FeaturedGames } from "./FeaturedGames";
import { Hero } from "./Hero";
import { LockedGames } from "./LockedGames";
import { SuggestGame } from "./SuggestGame";

export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="mt-10 xl:mt-[5%]">
      <Hero />
      <FeaturedGames />
      <LockedGames />
      <BehindScenes />
      <SuggestGame />
    </div>
  );
};
