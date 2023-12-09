import React from "react";
import Post from "../assets/postman.png";
import Image from "next/image";
import Chat from "../assets/chat.png";
import Hash from "../assets/hashtag.png";

const Info = () => {
  return (
    //container //
    <div id="info" className="bg-[#FFF8D9]">
      {/* Title */}

      <div className="3xs:text-[1.2rem] xxs:text-2xl xs:text-4xl place-items-center 3xs:py-[2rem] sm:py-[4rem] text-center 3xs:mb-[-2rem] sm:mb-[-2rem]">
        <h1>reach out</h1>
      </div>
      {/* Mobile */}

      <div className="max-w-[1240px] m-auto sm:hidden">
        <div
          className="fixed
         sm:hidden 3xs:mt-[-7rem] 3xs:w-[560px] 3xs:ml-[-11rem] xxs:mt-[-7rem] xxs:w-[750px] xxs:ml-[-8rem] xs:ml-[-4rem] sxx:ml-[-6rem] sx:ml-[-2rem]"
        >
          <Image src={Post} alt="todo" />
        </div>
        <div className="m-auto my-[6.5rem] sm:hidden ">
          <div className="m-auto 3xs:max-w-[270px] xxs:max-w-[355px] xs:max-w-[360px] sx:max-w-[420px] border-black border-2">
            <div className="3xs:h-[18rem] 3xs:w-[16.5rem] xxs:h-[21rem] xxs:w-[22rem]  sx:h-[24.688rem] sx:w-[25.75rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
              <div className="3xs:h-[4rem] xxs:h-[4.5rem] sx:h-[6.375rem] border-b-4 border-[#1E1E1F] bg-[#FFA6CE] m-auto flex items-center">
                <div className="3xs:w-[1.3rem] 3xs:h-[0.8rem] xxs:w-[1rem] xxs:h-[1rem]  sx:w-[1.125rem] sx:h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                <div className="3xs:w-[1.3rem] 3xs:h-[0.8rem] xxs:w-[1rem] xxs:h-[1rem] sx:w-[1.125rem] sx:h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                <div className="3xs:w-[1.3rem] 3xs:h-[0.8rem] xxs:w-[1rem] xxs:h-[1rem] sx:w-[1.125rem] sx:h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                <h4 className=" 3xs:text-2xl sx:text-4xl 3xs:ml-[3.4rem] xxs:ml-[5.2rem] sx:ml-[6.5rem]">
                  info
                </h4>
                <div className="border-t-[.16rem] border-black w-14 ml-[5rem]" />
              </div>
              <div className="3xs:p-3 xxs:p-5 m-auto flex justify-between items-center">
                <div className="3xs:pr-19 xxs:pr-0 drop-shadow-[5px_4px_0px_rgb(0,0,0)]">
                  <Image src={Hash} alt="todo" />
                </div>
                <h4 className="3xs:text-[1rem] xxs:text-[1.3rem] xs:text-[1.5rem]">
                  (+90) 546 850 39 38
                </h4>
              </div>
              <div className="3xs:p-3 xxs:p-5 m-auto flex justify-between items-center">
                <h4 className="3xs:text-[0.9rem] xxs:text-[1.1rem] sx:text-[1.3rem]">
                  comingSoon@gmail.com
                </h4>
                <div className="3xs:p-1 xxs:p-0 drop-shadow-[5px_4px_0px_rgb(0,0,0)]">
                  <Image src={Chat} alt="todo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="max-w-[1240px] m-auto">
        <div className="flex justify-content justify-center">
          <div className="3xs:hidden mid:inline-block">
            <Image src={Post} alt="todo" />
          </div>
          <div className="h-[24.688rem] w-[25.75rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)] 3xs:hidden sm:block">
            <div className="h-[6.375rem] border-b-4 border-[#1E1E1F] bg-[#FFA6CE] m-auto flex items-center">
              <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
              <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
              <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
              <h4 className="text-4xl ml-[6.5rem]">info</h4>
              <div className="border-t-[.16rem] border-black w-14 ml-[5rem]" />
            </div>
            <div className="p-6 m-auto flex justify-between items-center">
              <div className="drop-shadow-[5px_4px_0px_rgb(0,0,0)]">
                <Image src={Hash} alt="todo" />
              </div>
              <h4 className="text-[1.5rem]"> (+90) 546 850 39 38</h4>
            </div>
            <div className="p-6 m-auto flex justify-between items-center">
              <div className="drop-shadow-[5px_4px_0px_rgb(0,0,0)]">
                <Image src={Chat} alt="todo" />
              </div>
              <h4 className="text-[1.3rem]">comingSoon@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div> //container
  );
};

export default Info;
