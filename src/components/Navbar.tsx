"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10">
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-gray-800 md:flex md:static md:w-auto md:space-x-6`}
        >
          <li>
            <Link className="block p-4 hover:text-slate-500" href="/">Home</Link>
        
            
          </li>
          <li>
            <Link className="block p-4 hover:text-slate-500" href="/about">About</Link>
            
            
          </li>
          <li>
            <Link className="block p-4 hover:text-slate-500" href="/contact">Contact</Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
