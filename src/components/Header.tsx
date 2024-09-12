"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className=" border-gray-200 bg-transparent hidden lg:block">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 px-4">
          <Link href="/">
            <Image
              src="/images/new-logo.png"
              alt="Logo"
              width={200}
              height={40}
            ></Image>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="#"
              type="button"
              className="px-7 py-2 rounded-full bg-[#ff2474] text-white font-medium text-lg"
            >
              Get started
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row ">
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#ff2474] duration-300"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#ff2474] duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#ff2474] duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#ff2474] duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
