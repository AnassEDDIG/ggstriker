import React, { useEffect } from "react";
import { FaHeart, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

// App.jsx or index.js
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="w-[90%] max-w-4xl mx-auto py-16 text-white">
      <h1
        className="text-4xl sm:text-5xl font-bold text-center mb-6"
        data-aos="fade-up"
      >
        About Us
      </h1>
      <p
        className="text-center text-(--lightGray) max-w-xl mx-auto text-sm sm:text-base"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We’re passionate about helping you discover fun, high-quality mobile
        games — without the clutter, spam, or shady links.
      </p>

      <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
        <div
          className="bg-(--bgLighter) p-6 rounded-xl shadow-md"
          data-aos="zoom-in"
        >
          <TbWorldSearch className="mx-auto text-4xl text-(--complementaryColor)" />
          <h3 className="font-semibold mt-4">We Search</h3>
          <p className="text-sm text-(--lightGray)">
            We constantly explore trending games to find hidden gems worth your
            time.
          </p>
        </div>

        <div
          className="bg-(--bgLighter) p-6 rounded-xl shadow-md"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <FaShieldAlt className="mx-auto text-4xl text-green-300" />
          <h3 className="font-semibold mt-4">We Verify</h3>
          <p className="text-sm text-(--lightGray)">
            Every link goes through a trust check — we only link to official
            stores like Google Play or Apple Store.
          </p>
        </div>

        <div
          className="bg-(--bgLighter) p-6 rounded-xl shadow-md"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <FaMobileAlt className="mx-auto text-4xl text-yellow-400" />
          <h3 className="font-semibold mt-4">You Play</h3>
          <p className="text-sm text-(--lightGray)">
            You get to explore great games with one click, supporting us at no
            extra cost.
          </p>
        </div>
      </div>

      <div
        className="mt-12 text-center max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-(--lightGray)"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p>
          We're not a big corporation — just a small, passionate team that loves
          mobile games and wants to make discovering them simpler and safer for
          everyone.
        </p>
        <p>
          When you try a game through us, you help support this platform. It
          keeps our content free, honest, and constantly evolving.
        </p>
        <p className="text-green-400 font-semibold flex justify-center items-center gap-1">
          <FaHeart />
          Thanks for being here. Let’s play smarter.
        </p>
      </div>
    </div>
  );
};

export default About;
