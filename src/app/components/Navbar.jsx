import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between p-8">
        <Link href={"/"} className="text-xl text-white font-semibold">
          Calvin Huang
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex gap-10">
            <li>
              <Link
                href={"#about"}
                className="block py-1 pl-2 pr-3 text-[#ADB7BE] text-sm rounded md:p-0 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#experience"}
                className="block py-1 pl-2 pr-3 text-[#ADB7BE] text-sm rounded md:p-0 hover:text-white"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-1 pl-2 pr-3 text-[#ADB7BE] text-sm rounded md:p-0 hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"#honors"}
                className="block py-1 pl-2 pr-3 text-[#ADB7BE] text-sm rounded md:p-0 hover:text-white"
              >
                Honors
              </Link>
            </li>
            <li>
              <Link
                href={"#skills"}
                className="block py-1 pl-2 pr-3 text-[#ADB7BE] text-sm rounded md:p-0 hover:text-white"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
