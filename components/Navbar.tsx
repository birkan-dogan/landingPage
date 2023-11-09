"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#05036F");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#FFF9D8");
        setTextColor("#05036F");
      } else {
        setColor("transparent");
        setTextColor("#05036F");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1920px] m-auto flex justify-between items-center p-4 border-[#FFF8D9] xl:border-b-black xl:border-2 ">
        <Link href="/" className="">
          <Image src={Logo} width={153} height={36} className="w-16 h-16" alt="terapist"/>
        </Link>

        <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
          <li className="p-4 font-bold sm:text-[0.95rem] md:text-[1.4rem] hover_nav xl:mx-5">
            <Link href="/">home</Link>
          </li>
          <li className="p-4 font-bold sm:text-[0.95rem] md:text-[1.4rem] hover_nav xl:mx-5">
            <Link href="#services">
              services
            </Link>
          </li>
          <li className="p-4 font-bold sm:text-[0.95rem] md:text-[1.4rem] hover_nav xl:mx-5">
            <Link href="#info">
              info
            </Link>
          </li>
          <li className="p-4 font-bold sm:text-[0.95rem] md:text-[1.4rem] w-[9rem] hover_nav xl:mx-5">
            <Link href="#Portfolio">
              our work
            </Link>
          </li>

          <button className="button-50 hidden sm:block my-2">
            <Link href="#contact">contact us</Link>
          </button>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? (
            <AiOutlineClose size={38} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={38} style={{ color: `${textColor}` }} />
          )}
        </div>
      </div>
      <div className="border-b-black border-2 mx-3 xl:hidden" />
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#FFF9D8] text-center ease-in duration-300"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#FEB600] text-center ease-in duration-300"
        }
      >
        <ul className="mb-[5rem]">
          <li
            onClick={handleNav}
            className="pb-4 text-4xl hover:text-orange-500 font-bold"
          >
            <Link href="/">home</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl hover:text-orange-500 font-bold"
          >
            <Link href="#services">services</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl hover:text-orange-500 font-bold"
          >
            <Link href="#info">info</Link>
          </li>
          <li
            onClick={handleNav}
            className="pt-4 pb-8 text-4xl hover:text-orange-500 font-bold"
          >
            <Link href="#Portfolio">our work</Link>
          </li>
          <button onClick={handleNav} className="button-50 w-[140px]">
            <Link href="#contact">contact us</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
