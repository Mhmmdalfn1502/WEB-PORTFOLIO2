"use client";

import { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { CiCircleChevRight } from "react-icons/ci";
import Link from "next/link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav style={{ color: "#272727" }} className="flex justify-between items-center px-4 py-4 lg:px-23 lg:py-10 bg-[#F5F4FF] fixed top-0 left-0 w-full z-50">
        <a href="/" className="text-[24px] font-bold">ALFAN.</a>
        <div className="flex flex-row gap-2 items-center">
          <Link href="/" className="text-[16px] ml-2 tracking-wider flex flex-row gap-2 items-center">
            Let's Talk
            <AiOutlineSwapRight size={20} color="#272727" />
          </Link>
          <span>|</span>
          <button onClick={() => setShowMenu((prev) => !prev)} className="transition-transform duration-300">
            <BsList size={20} color="#272727" className={`transform transition-transform duration-300 ${showMenu ? "rotate-180" : "rotate-90"}`} />
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div className={`fixed top-[80px] lg:top-[100px] left-0 w-full bg-[#F5F4FF] z-40 px-6 lg:px-23 transition-all duration-300 ease-in-out overflow-hidden${showMenu ? "max-h-[500px] py-4 opacity-100 drop-shadow-xl" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col gap-2 text-[#272727] font-extrabold text-[40px] tracking-wider py-10 border-y-1 border-[#272727]">
          <li className="flex flex-row justify-between items-center">
            <div className="">
              <Link href="/">HOME</Link>
              <span className="text-[#808080] font-medium text-[16px] ml-2">(01)</span>
            </div>
            <Link className="hover:rotate-45 transition-transform duration-300" href="#about">
              <CiCircleChevRight size={40} color="#272727" />
            </Link>
          </li>
          <li className="flex flex-row justify-between items-center">
            <div>
              <Link href="/aboutme">ABOUT ME</Link>
              <span className="text-[#808080] font-medium text-[16px] ml-2">(02)</span>
            </div>
            <Link className="hover:rotate-45 transition-transform duration-300" href="#about">
              <CiCircleChevRight size={40} color="#272727" />
            </Link>
          </li>
          <li className="flex flex-row justify-between items-center">
            <div>
              <Link href="#Works">WORKS</Link>
              <span className="text-[#808080] font-medium text-[16px] ml-2">(03)</span>{" "}
            </div>
            <Link className="hover:rotate-45 transition-transform duration-300" href="#about">
              <CiCircleChevRight size={40} color="#272727" />
            </Link>
          </li>
          <li className="flex flex-row justify-between items-center">
            <div>
              <Link href="#contact">CONTACT</Link>
              <span className="text-[#808080] font-medium text-[16px] ml-2">(04)</span>{" "}
            </div>
            <Link className="hover:rotate-45 transition-transform duration-300" href="#about">
              <CiCircleChevRight size={40} color="#272727" />
            </Link>
          </li>
        </ul>
        <div className="flex flex-row gap-2 items-center py-10">
          <a className="text-[16px] text-[#272727] tracking-wider" href="https://www.instagram.com/mhmmdalfn_1502/">
            Instagram
          </a>
          <span>|</span>
          <a className="text-[16px] text-[#272727] tracking-wider" href="https://www.linkedin.com/in/muhammad-alfan1502/">
            Linkedin
          </a>
          <span>|</span>
          <a className="text-[16px] text-[#272727] tracking-wider" href="https://github.com/Mhmmdalfn1502">
            Github
          </a>
          <span>|</span>
          <a className="text-[16px] text-[#272727] tracking-wider" href="">
            X
          </a>
        </div>
      </div>
    </>
  );
}
