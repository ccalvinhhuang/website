import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between p-8">
        <Link href={"/"} className="text-2xl text-white font-semibold">
          Calvin Huang
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex gap-10">
            <li>
              <Link
                href={"#about"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-l rounded md:p-0 hover:"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#experience"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-l rounded md:p-0 hover:"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-l rounded md:p-0 hover:"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"#honors"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-l rounded md:p-0 hover:"
              >
                Honors
              </Link>
            </li>
            <li>
              <Link
                href={"#skills"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-l rounded md:p-0 hover:"
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
