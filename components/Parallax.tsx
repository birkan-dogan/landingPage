import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bubble from "../assets/bubble3.png";
import Bubble1 from "../assets/bubble1.png";
import Bubble2 from "../assets/bubble2.png";

const Parallax = () => {
  return (
    <div className="hidden md:block">
      {/* UX Design */}
      <div
        id="parallax_services"
        className="section-content-area zero-around-spacing"
      >
        <div className="process-content-area">
          <div className="process-content-wrap bg-[#F88170] border-r-4 border-black">
            <div className="process-sticky-wrap-2">
              <div className="content-title-wrap left-align-content-title">
                <div className="my-[25rem]">
                  <div className="m-auto le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#93C2EA] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                      UX Research
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="right_parallax"
            className="process-image-wrap bg-[#F7BF09]"
          >
            <div className="absolute left-1/4">
              <Image src={Bubble1} alt="todo" />
            </div>
            <div className="absolute left-1/4 bottom-[10rem]">
              <Image src={Bubble2} alt="todo" />
            </div>

            <div className="my-[50rem]">
              <p className="font-semibold hidden xxxxl:block sm:text-md le:text-lg xlr:text-2xl text-left le:m-11">
                all <em>good</em> designs begin with research. before <br /> any
                product can be developed, we will need <br /> to better
                understand your business and <br />
                your users. we execute this by creating a <br /> competitive
                analysis, interviewing, and/or <br /> administering surveys.
                <br /> <br />
                our goal is to eliminate “opinion-driven” <br /> designs, and to
                generate a research-based <br /> design that creates the{" "}
                <span />
                <b>
                  best product for <br /> your users.
                </b>
              </p>
              <p className="le:font-semibold font-bold text-lg le:text-2xl xxxxl:hidden m-5 text-left">
                all good designs begin with research. before any product can be
                developed, we will need to better understand your business and
                your users. we execute this by creating a competitive analysis,
                interviewing, and/or administering surveys.
                <br /> <br />
                our goal is to eliminate “opinion-driven” designs, and to
                generate a research-based design that creates the <span />
                <b>best product for your users.</b>
              </p>
              <div className="flex justify-start pl-6 xxxxl:pl-11">
                <div className="button-4 mt-11 bg-[#93C2EA] w-[115px]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Web design */}

      <div
        id="parallax_services"
        className="section-content-area zero-around-spacing "
      >
        <div className="process-content-area">
          <div className="process-content-wrap bg-[#93C2EA] border-r-4 border-black">
            <div className="process-sticky-wrap-2">
              <div className="content-title-wrap left-align-content-title">
                <div className="my-[25rem]">
                  <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#89EB8D] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                      Web Design
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="right_parallax"
            className="process-image-wrap bg-[#FFA6CE]"
          >
            <div className="absolute left-1/2 top-1/4">
              <Image src={Bubble} alt="todo" />
            </div>

            <div className="my-[50rem]">
              <p className="font-semibold hidden xxxxl:block sm:text-md le:text-lg xlr:text-2xl text-left le:m-11">
                the days of just having a business is over.
                <br /> you <b>need</b> a website. and not just any
                <br /> website; a modern, cutting-edge website.
                <br /> you have 0.05 seconds to make a virtual
                <br /> impression on users before they decide to
                <br /> leave your site or not.
                <br /> <br /> this is why we create custom, creative,
                <br />
                cutting-edge website designs to ensure
                <br /> your business will stand out amongst the
                <br /> rest.
              </p>
              <p className="le:font-semibold font-bold text-lg le:text-2xl xxxxl:hidden m-5 text-left">
                the days of just having a business is over. you need a website.
                and not just any website; a modern, cutting-edge website. you
                have 0.05 seconds to make a virtual impression on users before
                they decide to leave your site or not.
                <br /> <br /> this is why we create custom, creative,
                cutting-edge website designs to ensure your business will stand
                out amongst the rest.
              </p>
              <div className="flex justify-start pl-6 xxxxl:pl-11">
                <div className="button-4 mt-11 bg-[#89EB8D] w-[115px]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div
        id="parallax_services"
        className="section-content-area zero-around-spacing"
      >
        <div className="process-content-area">
          <div
            data-w-id="left_parallax"
            className="process-image-wrap bg-[#F9CAC3] border-r-4 border-black"
          >
            <div className="absolute left-1/2 top-[-2rem]">
              <Image src={Bubble} alt="todo" />
            </div>
            <div className="absolute left-1/4">
              <Image src={Bubble1} alt="todo" />
            </div>
            <div className="absolute left-1/4 bottom-[10rem]">
              <Image src={Bubble2} alt="todo" />
            </div>

            <div className="my-[50rem]">
              <p className="font-semibold hidden xxxxl:block sm:text-md le:text-lg xlr:text-2xl text-right le:m-11">
                you can’t just settle for cookie-cutter verbiage
                <br /> on your website. what is it that your users
                <br /> need? we’ll conduct an seo audit to see where
                <br /> your current website sits in your market.
                <br />
                <br />
                then, we utilize highly <em>effective and successful</em>
                <br /> seo strategies, such as completing keyword
                <br /> research, ensuring you’re on location search
                <br /> pages, and creating a google business profile.
              </p>
              <p className="le:font-semibold font-bold text-lg le:text-2xl xxxxl:hidden m-5 text-right">
                you can’t just settle for cookie-cutter verbiage on your
                website. what is it that your users need? we’ll conduct an seo
                audit to see where your current website sits in your market.
                <br />
                <br />
                then, we utilize highly <br /> <em>effective and successful</em>
                <br />
                seo strategies, such as completing keyword research, ensuring
                you’re on location search pages, and creating a google business
                profile.
              </p>
              <div className="flex justify-end pr-6 xxxxl:pr-11">
                <div className="button-4 mt-11 bg-[#5DE6D6] w-[115px]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="process-content-wrap bg-[#F5950B]">
            <div className="process-sticky-wrap">
              <div className="content-area-title content-left-align">
                <div className="content-title-area auto-width-title-area">
                  <div className="content-title-wrap left-align-content-title">
                    <div className="my-[25rem] lgr:ml-9 lgg:ml-4">
                      <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                        <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#C1B4FB] m-auto flex items-center">
                          <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                          <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                          <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                        </div>

                        <h4 className="text-3xl font-extrabold m-[1.6rem] text-center justify-center items-center">
                          Search Engine Optimization (seo)
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development*/}
      <div
        id="parallax_services"
        className="section-content-area zero-around-spacing"
      >
        <div className="process-content-area">
          <div
            data-w-id="left_parallax"
            className="process-image-wrap bg-[#92C3EA] border-r-4 border-black"
          >
            <div className="absolute left-1/4 top-1/4">
              <Image src={Bubble} alt="todo" />
            </div>

            <div className="absolute right-[-1rem] bottom-[10rem]">
              <Image src={Bubble2} alt="todo" />
            </div>

            <div className="my-[50rem]">
              <p className="font-semibold hidden xxxxl:block sm:text-md le:text-lg xlr:text-2xl text-right le:m-11">
                57% of Americans won’t recommend a<br /> business with poorly
                designed mobile
                <br /> websites.
                <span />
                <em>
                  don’t limit yourself to only desktop
                  <br /> users.
                </em>
                we specialize in programming mobile
                <br />
                responsive websites from ecommerce sites
                <br /> like shopify, to corporate websites, to local
                <br /> shops.
                <br />
                <br />
                we develop custom, modern, cutting edge
                <br /> website designs for any ambitious
                <br /> business. this includes css, html,
                <br /> javascript, various backend solutions and
                <br /> frameworks like <b>react</b> and <b>nextjs.</b>
              </p>
              <p className="le:font-semibold font-bold text-lg le:text-2xl xxxxl:hidden m-5 text-right">
                57% of Americans won’t recommend a<br /> business with poorly
                designed mobile websites.
                <span />
                <em>
                  don’t limit yourself to only desktop
                  <br /> users.
                </em>
                we specialize in programming mobile responsive websites from
                ecommerce sites like shopify, to corporate websites, to local
                shops.
                <br />
                <br />
                we develop custom, modern, cutting edge website designs for any
                ambitious business. this includes css, html, javascript, various
                backend solutions and frameworks like <b>react</b> and{" "}
                <b>nextjs.</b>
              </p>
              <div className="flex justify-end pr-6 xxxxl:pr-11">
                <div className="button-4 mt-11 bg-[#FEABF8] w-[115px]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="process-content-wrap bg-[#89EA8C]">
            <div className="process-sticky-wrap">
              <div className="content-area-title content-left-align">
                <div className="content-title-area auto-width-title-area">
                  <div className="content-title-wrap left-align-content-title">
                    <div className="my-[25rem] lgr:ml-9 lgg:ml-4">
                      <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                        <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#FEABF8] m-auto flex items-center">
                          <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                          <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                          <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                        </div>

                        <h4 className="text-4xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                          Development
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MARKETING */}
      <div
        id="parallax_services"
        className="section-content-area zero-around-spacing "
      >
        <div className="process-content-area">
          <div className="process-content-wrap bg-[#EBC30E] border-r-4 border-black">
            <div className="process-sticky-wrap-2">
              <div className="content-title-wrap left-align-content-title">
                <div className="my-[25rem]">
                  <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#EA9293] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[2.5rem] text-center justify-center items-center">
                      Marketing
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="right_parallax"
            className="process-image-wrap bg-[#D4B0FE]"
          >
            <div className="absolute left-1/2 top-1/4">
              <Image src={Bubble} alt="todo" />
            </div>

            <div className="absolute left-10 bottom-[10rem]">
              <Image src={Bubble2} alt="todo" />
            </div>

            <div className="my-[50rem]">
              <p className="font-semibold hidden xxxxl:block sm:text-md le:text-lg xlr:text-2xl text-left le:m-11">
                lets face it; advertising and cold-calling
                <br /> just aren’t the move anymore. were living
                <br /> in a new age for getting your business out
                <br /> there: content marketing, digital
                <br /> marketing, and social media marketing.
                <br />
                <br />
                nowadays, you need a good bio, trendy
                <br /> content creation, brand consistency, eye-
                <br />
                popping logo, social media ads, you name
                <br /> it. it’s also like you have to be a jack of all
                <br /> trades. or, you can let us handle it.
              </p>
              <p className="le:font-semibold font-bold text-lg le:text-2xl xxxxl:hidden m-5 text-left">
                <br /> just aren’t the move anymore. were living in a new age
                for getting your business out there: content marketing, digital
                marketing, and social media marketing.
                <br />
                <br />
                nowadays, you need a good bio, trendy content creation, brand
                consistency, eye- popping logo, social media ads, you name it.
                it’s also like you have to be a jack of all trades. or, you can
                let us handle it.
              </p>
              <div className="flex justify-start pl-6 xxxxl:pl-11">
                <div className="button-4 mt-11 bg-[#EA9293] w-[115px]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media MAnagement */}
      <div
        id="parallax_services"
        className="section-content-area zero-around-spacing"
      >
        <div className="process-content-area border-b-4 border-black">
          <div className="process-content-wrap bg-[#F88170] border-r-4 border-black">
            <div className="process-sticky-wrap-2">
              <div className="content-title-wrap left-align-content-title">
                <div className="my-[25rem] ">
                  <div className="le:h-[12rem] le:w-[27.5rem] border-4 border-[#1E1E1F] bg-white drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
                    <div className="h-[3.5rem] border-b-4 border-[#1E1E1F] bg-[#5DE6D6] m-auto flex items-center">
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-3" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                      <div className="w-[1.125rem] h-[1.125rem] bg-white rounded-full border-2 border-[#1E1E1F] ml-1" />
                    </div>

                    <h4 className="text-4xl font-extrabold m-[1.6rem] text-center justify-center items-center">
                      Social Media Management
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="right_parallax"
            className="process-image-wrap bg-[#92C6F8]"
          >
            <div className="absolute left-1/2 top-1/4">
              <Image src={Bubble} alt="todo" />
            </div>
            <div className="absolute left-1/4">
              <Image src={Bubble1} alt="todo" />
            </div>
            <div className="absolute left-1/4 bottom-[10rem]">
              <Image src={Bubble2} alt="todo" />
            </div>

            <div className="my-[50rem]">
              <p className="font-semibold hidden xxxxl:block sm:text-md le:text-lg xlr:text-2xl text-left le:m-11">
                if you’re not actively updating your
                <br /> business social media accounts, then
                <br /> you’re missing out on 72% of potential
                <br /> customers.
                <br />
                <br />
                we take the confusion out of content
                <br /> creation by managing it for you. this
                <br /> includes video creation, social media
                <br /> copywriting, running ad campaigns,
                <br /> engaging with your user base, and
                <br /> moderaton.
              </p>
              <p className="le:font-semibold font-bold text-lg le:text-2xl xxxxl:hidden m-5 text-left">
                if you’re not actively updating your business social media
                accounts, then you’re missing out on 72% of potential customers.
                <br />
                <br />
                we take the confusion out of content creation by managing it for
                you. this includes video creation, social media copywriting,
                running ad campaigns, engaging with your user base, and
                moderaton.
              </p>
              <div className="flex justify-start pl-6 xxxxl:pl-11">
                <div className="button-4 mt-11 bg-[#F6BE09] w-[115px]">
                  <Link href="#contact">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
