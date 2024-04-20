import Image from "next/image";
import Linux from "../assets/linux.png";
import Art from "../assets/art.png";
import Art2 from "../assets/art2.png";
import Market from "../assets/market.png";
import Market2 from "../assets/market2.png";

const About = () => {
  return (
    <div className="bg-[#63B4F7]">
      <div className="max-w-[1240px] m-auto">
        <div className="p-4 py-[5rem]">
          <div className="text-4xl lg:mx-[4rem] mb-11">
            <h1>
              Hi, we&apos;re{" "}
              <span className="bg-[#F7BE08] pl-1 pr-6 py-1 flex items-center w-fit gap-1">
                LinSoft{" "}
                <Image className="w-16 h-16" alt="LinSoft" src={Linux} />
              </span>
            </h1>
          </div>

          <div className="relative md:flex items-center px-[10rem] lg:px-[18rem] hidden">
            <div className="flex-grow border-t-2 border-black"></div>

            <h4 className="flex-shrink mx-4 font-bold text-3xl">2 in 1</h4>

            <div className="flex-grow border-t-2 border-black"></div>
          </div>

          <ul className="md:flex md:px-6">
            <li className="bg-[#FFF8D9] border-2 border-black rounded-2xl inline-block w-full md:w-1/2 mb-4 mr-4 le:mr-11 lgr:mx-[2rem] h-[29rem] md:h-[33rem] drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
              <div className="text-center hidden md:flex ">
                <Image alt="notyet" src={Art} />
              </div>
              <div className="text-center md:hidden pt-6">
                <Image alt="notyet" src={Art2} />
              </div>
              <div className="p-2 sxx:p-4">
                <h1 className="text-center text-lg xrs:text-2xl md:text-lg mr:text-2xl lr:text-4xl le:p-2">
                  vamp up your site!
                </h1>
                <h4 className="text-center xxs:text-left text-sm xrs:text-lg md:text-md le:text-lg xrs:px-6 md:px-0 le:px-5">
                  in the new age of technology, your website is the first
                  impression you make with your users. we make sure it&apos;s a
                  good one by helping passionate brick-and-mortar businesses
                  through mobile and desktop friendly UX/UI designs.
                </h4>
              </div>
            </li>
            <li className="bg-[#FFF8D9] border-2 border-black rounded-2xl inline-block w-full md:w-1/2 mr-4 le:mr-11 lgr:mx-[2rem] h-[29rem] md:h-[33rem] drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
              <div className="text-center pt-6 hidden md:flex">
                <Image alt="notyet" src={Market} />
              </div>

              <div className="text-center pt-6 md:hidden">
                <Image alt="notyet" src={Market2} />
              </div>

              <div className="p-4 md:mt-[2rem]">
                <h1 className="text-center text-lg xrs:text-2xl md:text-lg mr:text-2xl lr:text-4xl le:p-2">
                  market your business
                </h1>
                <h4 className="text-center xxs:text-left text-sm sxx:text-md xrs:text-lg md:text-md le:text-lg xrs:px-6 md:px-0 le:px-5">
                  already have a great website? no problemo! we specialize in
                  paid social, email/sms marketing, influencer marketing
                  strategies, seo, and content creation to ensure your business
                  will be found.
                  <br />
                  <br />
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 mt-11 bg-[#FFF9D8]">
        <div className="max-w-[1240px] m-auto">
          <h1 className="text-4xl font-normal mx-8 my-[4.5rem]">
            You need a small, <b>smart</b>, and flexible team to push your brand
            to the next level and work as an extension of your team.{" "}
            <span className="bg-[#F7BE08] pl-1 pr-6">
              <b>Don&apos;t you?</b>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
