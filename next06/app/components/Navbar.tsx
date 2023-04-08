import React from "react";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb:0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white">
            Matt Griffes
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-8 text-white text-4xl">
          <Link
            className="text-white/50 hover:text-white"
            href="https://www.youtube.com/@DaveGrayTeachesCode">
            <FaYoutube />
          </Link>
          <Link
            className="text-white/50 hover:text-white"
            href="https://www.youtube.com/@DaveGrayTeachesCode">
            <FaLaptop />
          </Link>
          <Link
            className="text-white/50 hover:text-white"
            href="https://github.com/midcenturydude7">
            <FaGithub />
          </Link>
          <Link
            className="text-white/50 hover:text-white"
            href="https://www.youtube.com/@DaveGrayTeachesCode">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
