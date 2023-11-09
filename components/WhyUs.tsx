import React from "react";
import Arrow from "../assets/arrow2.png";
import Image from "next/image";

const Whyus = () => {
  return (
    <div className="overflow-hidden flex bg-[#F9CAC3]">
      <div className="max-w-[1240px] m-auto">
        <h1 className="text-center text-3xl m-11">why us?</h1>

        {/* Desktop */}
        <div className="my-[4rem] mb-[6rem] hidden sm:block">
          <div className="w-[630px] h-[300px] mid:w-[750px] mid:h-[345px] le:w-[910px] le:h-[450px] relative m-auto">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="border-2 border-black bg-[#fff] w-[366.67px] h-[265px] mid:w-[460px] mid:h-[310px] le:w-[550px] le:h-[300px] drop-shadow-[5px_4px_0px_rgb(30,30,31)] p-4">
                <h4 className="text-2xl le:text-3xl">
                  our passion is your passion!
                </h4>
                <p className="text-sm font-semibold mid:text-lg le:font-medium le:text-lg text-left w-2/3 mt-4">
                  mired is a web development and creative marketing one-stop
                  shop agency. there is no one-size-fits-all when it comes to
                  marketing, and we ensure custom, individualized, effective
                  strategies to scale your business.
                </p>
                <div className="border-2 border-black w-[145px] bg-black text-white mt-3 mid:ml-[8rem]">
                  <p>see our strategy</p>
                </div>
                <div className="text-center p-2">
                  <Image alt="terapist" src={Arrow} />
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 left-0 z-9 mt-[5.6rem] ml-[16rem] mid:mt-[7rem] mid:ml-[20rem] le:mt-[9rem] le:ml-[22rem]">
              <div className="border-2 border-black bg-[#fff] w-[365px] h-[204px] mid:w-[409.4px] mid:h-[224px] le:w-[545.4px] le:h-[304px] drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div id="aboutus" className="flex justify-center">
                  <iframe
                    className="w-[366.67px] h-[200px] mid:w-[420px] mid:h-[229px] le:w-[550px] le:h-[300px] m-auto"
                    src="https://player.vimeo.com/video/744432157?h=056c136e3f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="m-4 sm:hidden">
          <div className="border-2 border-black bg-[#fff] drop-shadow-[5px_4px_0px_rgb(30,30,31)] p-4 mb-[5rem]">
            <h4 className="text-3xl text-center">
              our passion is your passion!
            </h4>
            <p className="text-lg mt-4 text-center">
              mired is a web development and creative marketing one-stop shop
              agency. there is no one-size-fits-all when it comes to marketing,
              and we ensure custom, individualized, effective strategies to
              scale your business.
            </p>
            <div className="flex justify-center m-auto">
              <div className="border-2 border-black w-[145px] bg-black text-white mt-3 mid:ml-[8rem] text-center items-center justify-center">
                <p>see our strategy</p>
              </div>
            </div>
            <div className="absolute w-full bottom-20 left-[-8rem] p-2 rotate-90">
              <Image alt="terapist" src={Arrow} />
            </div>
            <div id="aboutus" className="py-8">
              <iframe
                className="w-full h-[237px] flex"
                src="https://player.vimeo.com/video/744432157?h=056c136e3f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
