import React from "react";
import branding from "../assets/branding.png";
import design from "../assets/design.png";
import dev from "../assets/dev.png";
import mag from "../assets/mag.png";
import seo from "../assets/seo.png";
import social from "../assets/social.png";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div id="services" className="bg-[#92C2EB]">
      <div className="max-w-[1240px] m-auto">
        <h1 className="text-center text-3xl pt-11 sm:pt-[5rem]">what we do!</h1>

        {/* Desktop*/}

        <div className="hidden sm:block p-[1rem] lgr:py-[5rem]">
          <ul className="flex justify-center">
            <li className="m-2 mid:m-8 w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={mag} width="85" height="85" />
                <h1 className="text-lg py-8 mr:text-2xl">UX research</h1>
                <h4 className="py-4">
                  competitive analysis, surveys, user interviews, usability
                  testing
                </h4>
              </div>
            </li>
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={design} width="85" height="85" />
                <h1 className="text-lg mr:text-2xl py-8">UX/UI Design</h1>
                <h4 className="py-4">
                  website, mobile applications, user interface
                </h4>
              </div>
            </li>
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={branding} width="85" height="85" />
                <h1 className="text-lg mr:text-2xl py-8">Branding</h1>
                <h4 className="py-4">
                  logo design, brand guidelines, positioning
                </h4>
              </div>
            </li>
          </ul>
          <ul className="flex justify-center">
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={dev} width="85" height="85" />
                <h1 className="text-lg mr:text-2xl py-8">Development</h1>
                <h4 className="py-4">css, html javascript, react, nextjs</h4>
              </div>
            </li>
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={seo} width="85" height="85" />
                <h1 className="text-lg mr:text-2xl py-4">
                  Search Engine Optimization
                </h1>
                <h4 className="py-4">keyword research, location pages, GMB</h4>
              </div>
            </li>
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={social} width="85" height="85" />
                <h1 className="text-lg mr:text-2xl py-4">
                  Social Media Management
                </h1>
                <h4 className="py-4">
                  advertisement, messaging, moderation, engagement
                </h4>
              </div>
            </li>
          </ul>
          <div className="my-11">
            <h4 className="text-center text-3xl pt-4">
              find what you&apos;re looking for?
            </h4>
            <div className="flex w-full justify-center">
              <div className="button-3 w-[8rem]">
                <Link href="#contact">contact us</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}

        <div className="px-2 sm:hidden py-[2rem]">
          <ul className="flex justify-center">
            <li className="m-2 mid:m-8 w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={mag} width="85" height="85" />
                <h1 className="text-sm 2xx:text-lg py-8 mr:text-2xl">
                  UX research
                </h1>
                <h4 className="sxx:py-4 text-sm sxx:text-md">
                  competitive analysis, surveys, user interviews, usability
                  testing
                </h4>
              </div>
            </li>
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={design} width="85" height="85" />
                <h1 className="text-sm 2xx:text-lg mr:text-2xl py-8">
                  UX/UI Design
                </h1>
                <h4 className="sxx:py-4 text-sm sxx:text-md">
                  website, mobile applications, user interface
                </h4>
              </div>
            </li>
          </ul>
          <ul className="flex justify-center">
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={branding} width="85" height="85" />
                <h1 className="text-sm 2xx:text-lg mr:text-2xl py-8">
                  Branding
                </h1>
                <h4 className="sxx:py-4 text-sm sxx:text-md">
                  logo design, brand guidelines, positioning
                </h4>
              </div>
            </li>
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={dev} width="85" height="85" />
                <h1 className="text-sm 2xx:text-lg mr:text-2xl py-8">
                  Development
                </h1>
                <h4 className="sxx:py-4 text-sm sxx:text-md">
                  css, html javascript, react, nextjs
                </h4>
              </div>
            </li>
          </ul>
          <ul className="flex justify-center">
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={seo} width="85" height="85" />
                <h1 className="text-sm 2xx:text-lg mr:text-2xl py-4 xs:py-8">
                  Search Engine Optimization
                </h1>
                <h4 className="sxx:py-4 text-sm sxx:text-md">
                  keyword research, location pages, GMB
                </h4>
              </div>
            </li>
            <li className="m-2 mid:m-8  w-[300px] h-[320.46px] border-4 border-[#1E1E1F] bg-[#8878f9] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
              <div className="text-center p-2 lgr:p-6">
                <Image alt="LinSoft" src={social} width="85" height="85" />
                <h1 className="text-sm 2xx:text-lg mr:text-2xl py-4 xs:py-8">
                  Social Media Management
                </h1>
                <h4 className="sxx:py-4 text-sm sxx:text-md">
                  advertisement, messaging, moderation, engagement
                </h4>
              </div>
            </li>
          </ul>
          <div className="my-11">
            <h4 className="text-center text-3xl pt-4">
              find what you&apos;re looking for?
            </h4>
            <div className="flex w-full justify-center">
              <div className="button-3 w-[8rem]">
                <Link href="#contact">contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
