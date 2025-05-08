import React, { useEffect } from "react";
import { FaEnvelope, FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="w-[90%] max-w-6xl mx-auto py-20 text-white" id="contact">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-6"
        data-aos="fade-up"
      >
        Let’s Connect
      </h2>

      <p
        className="text-center text-gray-400 max-w-xl mx-auto text-base sm:text-lg mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We’re always happy to chat! Whether you’ve got a question, idea, or just want to say hi — reach out anytime.
      </p>

      <div className="flex flex-col items-center gap-6">
        {/* Email Link */}
        <a
          href="mailto:ggstriker.games@gmail.com"
          className="flex items-center gap-3 bg-[#1e1e1e] px-6 py-4 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          data-aos="zoom-in"
        >
          <FaEnvelope className="text-teal-400 text-xl" />
          <span className="text-sm sm:text-base">ggstriker.games@gmail.com</span>
        </a>

        {/* Social Icons */}
        <div
          className="flex gap-6 text-2xl mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i
            href="https://www.tiktok.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="TikTok"
          >
            <SiTiktok />
          </i>
          <i
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </i>
          <i
            href="https://www.facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </i>
          <i
            href="https://discord.gg/yourserver"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
            aria-label="Discord"
          >
            <FaDiscord />
          </i>
        </div>

        <p
          className="mt-10 text-center text-sm text-gray-500 max-w-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We usually respond within a day. Don’t hesitate to say hi!
        </p>
      </div>
    </section>
  );
};
