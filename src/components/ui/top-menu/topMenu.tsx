import Link from "next/link";
import React from "react";
import { FaAngleDown, FaBars, FaUniregistry } from "react-icons/fa";

export const TopMenu = () => {
  return (
    <header className="w-full">
      <div
        className="max-w-6xl mx-auto w-full flex justify-between items-center 
    lg:justify-center lg:grid lg:grid-cols-10
    py-4
    px-4
    "
      >
        <div
          className="sm:col-start-1 sm:col-span-2 flex items-center justify-start gap-2
      "
        >
          <FaUniregistry className="w-8 h-8 rotate-180" />
          <span>/ Business Finance</span>
        </div>

        <nav className="col-start-4 col-span-4 hidden lg:block">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <Link href="#" className="flex justify-center items-center gap-5">
                <span>Creators</span>
                <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" gap-5 flex justify-center items-center"
              >
                <span>How it Works</span>
                <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" gap-5 flex justify-center items-center"
              >
                <span>FAQ</span>
                <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link href="#" className="ml-4">
                <span>Support</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex col-start-9 col-span-3 justify-end items-center gap-2">
          <span>Contact</span>
          <span className="min-w-max py-3 px-5 bg-black text-white rounded-full">
            Get Started
          </span>
        </div>

        <div className="lg:hidden">
          <FaBars className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
};
