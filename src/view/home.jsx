import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedinIn, FaTiktok, FaInstagram } from "react-icons/fa6";

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Front End Developer", "Informatics Student"],
      typeSpeed: 70,
      backSpeed: 20,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const medsosData = [
    {
      icons: <FaTiktok />,
      url: "https://www.tiktok.com/@sstra_pradana?_t=8lgLMGDBoBd&_r=1",
    },
    {
      icons: <FaInstagram />,
      url: "https://www.instagram.com/sastrapradn?igsh=MXU4N2FvcGQybHZmcw==",
    },
    {
      icons: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sastra-pradana-a9a486297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icons: <FaGithub />,
      url: "https://github.com/Sastrapradana06",
    },
  ];

  const downloadCV = () => {
    const fileUrl = "/CV_Sastra-Pradana.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "sastra-pradana-cv.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <>
      <div
        className={`w-[90%] m-auto pt-28 pb-3 lg:flex lg:items-center lg:w-[80%] lg:pt-32`}
        id="home"
      >
        <div className="w-full h-max">
          <div className="w-full h-max bold-600">
            <p className="text-[1.5rem] lg:text-[1.8rem]">I am Sastra</p>
            <p className="text-[1.8rem] gradient-text lg:text-[2.5rem]">
              <span ref={textRef}></span>
            </p>
          </div>
          {/* img profile */}
          <div
            className="w-full h-max mt-7 flex justify-center lg:hidden"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="w-[80%] h-[300px] overflow-hidden transform rotate-3  border rounded-3xl border-purple-950 lg:w-[65%] hover:shadow-xl hover:shadow-[purple]  hover:border-purple-700 hover:border-2 hover:rotate-0 duration-300 ">
              <img
                src="/img2.jpeg"
                alt="img"
                loading="lazy"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
          {/* end image profile */}
          <div className="w-full h-max mt-6">
            <p className="text-[1.1rem]">
              I am a student who is very passionate about programming, and my
              determination is to become a professional in the field of
              programming
            </p>
            <button
              className="px-6 py-3 mt-4 rounded-full border-2 border-purple-800 hover:bg-purple-950"
              onClick={downloadCV}
            >
              Donwload CV
            </button>
            <div className="w-max h-max  flex items-center gap-3 mt-4">
              {medsosData.map((item, i) => (
                <button
                  className="p-3 border border-purple-700 rounded-full hover:bg-purple-950"
                  name="button-link"
                  aria-label="button-link"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <a
                    href={item.url}
                    aria-label="link to medsos"
                    target="_blank"
                  >
                    {item.icons}
                  </a>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div
          className="w-full h-max mt-7 lg:flex justify-center hidden"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="w-[65%] h-[400px] overflow-hidden transform rotate-3  border-2 rounded-3xl border-purple-950 hover:shadow-xl hover:shadow-[purple] hover:border-purple-700 hover:border-2 hover:rotate-0 duration-300 ">
            <img
              src="/img2.jpeg"
              alt="img"
              loading="lazy"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
}
