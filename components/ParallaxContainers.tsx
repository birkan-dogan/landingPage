import Image from "next/image";
import Link from "next/link";

export default function ParallaxContainers({ direction }) {
  return (
    <div
      id="parallax_services"
      className="section-content-area zero-around-spacing"
    >
      <div className="process-content-area">
        <div
          data-w-id={direction}
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
              you can’t just settle for cookie-cutter verbiage on your website.
              what is it that your users need? we’ll conduct an seo audit to see
              where your current website sits in your market.
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
  );
}
