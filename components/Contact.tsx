import React, { useRef, FormEvent } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "service_g4hqwd2",
        "template_y48y9zr",
        form.current,
        "oF4ZHxYDt8xOidpgG"
      );

      form.current.reset();
    }
  };

  return (
    <div id="contact" className="bg-[#F9CAC3] pb-[5rem]">
      <div className="place-items-center py-[4rem] text-center">
        <h1 className="3xs:text-2xl xs:text-4xl">dont have time?</h1>
        <h4 className="text-[1.1rem] 3xs:mb-[-2rem] xxs:mb-[-2rem]  mid:mb-[-1rem]">
          send us a message
        </h4>
      </div>
      <div className="m-auto max-w-[1240px]">
        {/* Form */}
        <div className="3xs:w-[283px] 3xs:h-[450px] xxs:w-[383px] xxs:h-[500px] sx:w-[500px] sx:h-[460px] mid:w-[765px] mid:h-[670px] m-auto ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="m-auto flex justify-between items-center 3xs:mr-3 xxs:mr-0 3xs:mb-2 xxs:mb-1 mid:mb-4">
              <div className="xxs:mr-1  mid:mr-10">
                <h4>first name</h4>
                <input
                  type="text"
                  name="firstname"
                  required
                  className="3xs:w-[8rem] 3xs:h-[1.5rem] xxs:w-[11.25rem] xxs:h-[2.25rem] sx:w-[15rem] sx:h-[3rem] mid:w-[22.5rem] mid:h-[4.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"
                />
              </div>
              <div>
                <h4>last name</h4>
                <input
                  type="text"
                  name="lastname"
                  required
                  className="3xs:w-[8rem] 3xs:h-[1.5rem] xxs:w-[11.25rem] xxs:h-[2.25rem] sx:w-[15rem] sx:h-[3rem]  mid:w-[22.5rem] mid:h-[4.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"
                />
              </div>
            </div>
            <div className="m-auto flex justify-between items-center 3xs:mr-3  xxs:mr-0 3xs:mb-2 mid:mb-4">
              <div className="xxs:mr-1 mid:mr-10">
                <h4>email</h4>
                <input
                  type="email"
                  name="email"
                  required
                  className="3xs:w-[8rem] 3xs:h-[1.5rem] xxs:w-[11.25rem] xxs:h-[2.25rem] sx:w-[15rem] sx:h-[3rem] mid:w-[22.5rem] mid:h-[4.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"
                />
              </div>

              <div>
                <h4>phone number</h4>
                <input
                  type="number"
                  name="number"
                  required
                  className="3xs:w-[8rem] 3xs:h-[1.5rem] xxs:w-[11.25rem] xxs:h-[2.25rem] sx:w-[15rem] sx:h-[3rem] mid:w-[22.5rem] mid:h-[4.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]"
                />
              </div>
            </div>

            <h4>message</h4>
            <div className="drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
              <textarea
                name="message"
                rows={6}
                required
                className="3xs:w-[17rem] xxs:w-[23.75rem] sx:w-[31rem] mid:w-[47.5rem] bg-[#92C2EB] border-4 border-[#1E1E1F] resize-none xxs:text-[20px] mid:text-[22px] 3xs:p-[0.3rem] mid:p-[1rem] font-bold active:bg-[##bcd2e8] focus:bg-[#bcd2e8]"
              />
            </div>

            <button
              type="submit"
              className="submit 3xs:ml-[9.8rem] xxs:ml-[16.2rem] sx:ml-[23.5rem] mid:ml-[40.4rem]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
