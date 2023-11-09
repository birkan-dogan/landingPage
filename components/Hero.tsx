import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../assets/arrow.png";
import Laptop from "../assets/laptop.png";
import Laptop2 from "../assets/laptop2.png";
import Frame1 from "../assets/Frame1.png";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import layout from "../assets/layouts2.jpeg";
import star from "../assets/star.png";
// import espanol from "../assets/espanol.png";

const Hero = () => {
  return (
    <div className="bg-[#FFF8D9]">
      {/* Mobile */}

      <h1 className="3xs:text-2xl xs:text-4xl text-center mt-[8rem] block mid:hidden mb-[2rem] layoutHidden2">
        we design and develop <br /> responsive websites <br /> and mobile
        applications.
      </h1>
      <p className="3xs:text-xs xs:text-lg font-bold text-center block mid:hidden mb-[1rem]">
        contact us to book a consultation on how we <br /> can help scale your
        business.
      </p>
      <div className="flex w-full justify-center">
        <div className="button-2 mid:hidden w-[8rem]">
          <Link href="#contact">contact us</Link>
        </div>
      </div>

      <div className="absolute rotate-[-25deg] mt-[-5rem] 3xs:ml-9 sxx:ml-[4rem] xxs:ml-[5rem] xs:ml-[8rem] sx:ml-[11rem] sr:ml-[14rem] mid:hidden w-[35px]">
        <Image alt="terapist" src={Arrow} />
      </div>

      {/* Desktop  */}
      <div className="grid justify-center">
        <div className="flex flex-col items-center lg:flex-row mt-[9rem] lg:mt-0">
          <div
            className="mb-[3rem] p-4"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h1 className="mid:text-4xl lgr:text-4xl mid:mb-6 le:mb-9 lgr:mb-12 3xs:hidden mid:mt-[-1.5rem] lgr:mt-[3rem] mid:block mid:text-center lg:text-left layoutHidden2">
              we design and develop <br /> responsive websites <br /> and mobile
              applications.
            </h1>
            <p className="mid:mb-7 lgr:mb-11 mid:text-lg font-bold 3xs:hidden mid:block mid:text-center lg:text-left">
              contact us to book a consultation on how we <br /> can help scale
              your business.
            </p>

            <div className="3xs:hidden lg:inline-block button-2 ">
              <Link href="#contact">contact us</Link>
            </div>
            <div className="flex w-full justify-center">
              <div className="button-3 3xs:hidden mid:block lg:hidden w-[8rem]">
                <Link href="#contact">contact us</Link>
              </div>
            </div>
          </div>
          <div className="3xs:mt-[-12rem] mid:mt-[-2rem] lg:mt-[8rem] p-4">
            <div className="hidden sm:block">
              <Image alt="terapist" src={Laptop} />
            </div>
            <div className="block sm:hidden ml-11 layoutHidden">
              <Image alt="terapist" src={Laptop2} />
            </div>
            <div className="hidden sm:block absolute top-[26rem] ml-52 sm:top-[31rem] sm:ml-56  lg:top-40 lr:top-44 lg:ml-52 lr:ml-64 layoutHidden">
              <Image alt="terapist" src={layout} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1380px] m-auto">
        <div className="static pr-[2rem] pb-[16rem] mt-[-25rem] 3xs:hidden xxxl:block">
          <Image alt="terapist" src={Arrow} />
        </div>
      </div>
      <div className="hidden sm:block lg:max-w-[550px] lr:max-w-[700px] m-auto hover_star">
        <div className="absolute animate-spin sm:mt-[-50rem] mid:ml-[5rem] mid:mt-[-50rem] lg:mt-[-16rem] lg:ml-[-4.7rem]">
          <Image alt="terapist" src={star} />
        </div>
        <div className="absolute sm:mt-[-44rem] sm:ml-[3.8rem] mid:ml-[8.7rem] mid:mt-[-44rem] lg:mt-[-10rem] lg:ml-[-1rem]">
          {/* <Image alt="terapist" src={espanol} width="85" /> */}
        </div>
      </div>
      <div className="hidden xs:block sm:hidden hover_star">
        <div className="absolute animate-spin xs:mt-[-38rem]">
          <Image alt="terapist" src={star} width="150" height="150" />
        </div>
        <div className="absolute xs:mt-[-33.7rem] xs:ml-[2.7rem]">
          {/* <Image alt="terapist" src={espanol} width="60" height="19" /> */}
        </div>
      </div>
      <div className="xs:hidden block hover_star">
        <div className="absolute animate-spin mt-[-22rem]">
          <Image alt="terapist" src={star} width="100" height="100" />
        </div>
        <div className="absolute mt-[-19.4rem] ml-[2rem]">
          {/* <Image alt="terapist" src={espanol} width="38" height="12.6" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
