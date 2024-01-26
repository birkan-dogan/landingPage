import React from "react";
import { Controller, Scene } from "react-scrollmagic";

import Link from "next/link";

const ServicesExplained = () => {
  return (
    <div id="services_explained">
      {/* UX Desighn Mobile*/}

      <div className="md:hidden bg-[#F7BF09] py-[6rem] border-t-4 border-black">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#93C2EA] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  UX Research
                </h4>
              </div>
            </div>
          </Scene>
          <Scene>
            <div className="bg-[#F7BF09]  justify-around items-center">
              <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
                all good designs begin with research. before any product can be
                developed, we will need to better understand your business and
                your users. we execute this by creating a competitive analysis,
                interviewing, and/or administering surveys.
                <br /> <br />
                our goal is to eliminate “opinion-driven” designs, and to
                generate a research-based design that creates the <span />
                <b>best product for your users.</b>
              </p>
              <div className="w-[120px] m-auto">
                <div className="button-4 text-center bg-[#93C2EA]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </Scene>
        </Controller>
      </div>

      {/*Web Design Mobile*/}

      <div className="md:hidden bg-[#FFA6CE] py-[6rem] ">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#89EA8C] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  Web Design
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#FFA6CE]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              the days of just having a business is over. you need a website.
              and not just any website; a modern, cutting-edge website. you have
              0.05 seconds to make a virtual impression on users before they
              decide to leave your site or not.
              <br /> <br /> this is why we create custom, creative, cutting-edge
              website designs to ensure your business will stand out amongst the
              rest.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#89EB8D]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* SEO Mobile*/}

      <div className="md:hidden bg-[#F4940B] py-[6rem]">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#5DE7D7] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-2xl font-extrabold m-[1.8rem] text-center justify-center items-center">
                  Search Engine Optimization (seo)
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#F4940B]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              you can’t just settle for cookie-cutter verbiage on your website.
              what is it that your users need? we’ll conduct an seo audit to see
              where your current website sits in your market.
              <br />
              <br />
              then, we utilize highly effective and successful seo strategies,
              such as completing keyword research, ensuring you’re on location
              search pages, and creating a google business profile.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#5DE6D6]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/*Dev Mobile*/}

      <div className="md:hidden bg-[#92C3EA] py-[6rem] border-t-4 border-black">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#FEAAF9] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  Development
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#92C3EA]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              57% of Americans won’t recommend a business with poorly designed
              mobile websites. don’t limit yourself to only desktop users. we
              specialize in programming mobile responsive websites from
              ecommerce sites like shopify, to corporate websites, to local
              shops.
              <br />
              <br />
              we develop custom, modern, cutting edge website designs for any
              ambitious business. this includes css, html, javascript, various
              backend solutions and frameworks like react and nextjs.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#FEABF8]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* MARKETING Mobile*/}

      <div className="md:hidden bg-[#D4B0FE] py-[6rem] border-t-4 border-black">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#EB9292] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                  Marketing
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#D4B0FE]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              lets face it; advertising and cold-calling just aren’t the move
              anymore. were living in a new age for getting your business out
              there: content marketing, digital marketing, and social media
              marketing.
              <br />
              <br />
              nowadays, you need a good bio, trendy content creation, brand
              consistency, eye-popping logo, social media ads, you name it. it’s
              also like you have to be a jack of all trades. or, you can let us
              handle it.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#EB9292]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>

      {/* Social Media Management Mobile*/}

      <div className="md:hidden bg-[#89EA8C] py-[6rem] border-t-4 border-black">
        <Controller>
          <Scene duration={300} pin={true} enabled={true} offset={190}>
            <div className="flex justify-center items-center p-4">
              <div className="h-[12rem] w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#FDDD14] m-auto flex items-center">
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                  <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                </div>

                <h4 className="text-3xl font-extrabold m-[1.65rem] text-center justify-center items-center">
                  Social Media Management
                </h4>
              </div>
            </div>
          </Scene>

          <div className="bg-[#89EA8C]  justify-around items-center">
            <p className="font-semibold text-lg md:hidden text-center py-[3rem] mx-5">
              if you’re not actively updating your business’ social media
              accounts, then you’re missing out on 72% of potential customers.
              <br />
              <br />
              we take the confusion out of content creation by managing it for
              you. this includes video creation, social media copywriting,
              running ad campaigns, engaging with your user base, and moderaton.
            </p>
            <div className="w-[120px] m-auto">
              <div className="button-4 text-center bg-[#FDDD14]">
                <Link href="#contact">Learn more</Link>
              </div>
            </div>
          </div>
        </Controller>
      </div>
    </div>
  );
};

export default ServicesExplained;
