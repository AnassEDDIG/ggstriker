import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { MdEmail, MdOutlineCategory } from "react-icons/md";
import { Button } from "../../components/common/Button";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";

export const SuggestGame = () => {
  return (
    <div className="relative mt-20 text-center">
      <h2 className="text-2xl sm:text-5xl font-bold flex justify-center items-center gap-2">
        Tell Us What You Like
        <MdOutlineCategory />
      </h2>
      <p className="text-(--lightGray) text-xs md:text-sm flex items-center gap-1 justify-center mt-1">
        <MdEmail />
        Tell us what games you like — we’ll add similar ones!
      </p>
      <div className="space-y-6 mt-8">
        <a
          href="mailto:ggstriker.games@gmail.com"
          className="w-fit mx-auto flex items-center gap-3 text-sm sm:text-base bg-(--bgLighter) px-6 py-3 rounded-md shadow-md"
        >
          <FaEnvelope className="text-(--complementaryColor)" />
          ggstriker.games@gmail.com
        </a>

        <p className="text-(--lightGray)">or</p>
        <div className="w-fit mx-auto">
          <Button>
            <a
              className="text-sm flex items-center gap-1"
              href="mailto:ggstriker.games@email.com"
            >
              Open Inbox
              <HiOutlineMailOpen />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
