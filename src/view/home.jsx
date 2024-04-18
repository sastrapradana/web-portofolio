import { FaGithub, FaLinkedinIn, FaTiktok, FaInstagram } from "react-icons/fa6";

export default function Home() {
  const medsosData = [
    {
      icons: <FaTiktok />,
      url: "/",
    },
    {
      icons: <FaInstagram />,
      url: "/",
    },
    {
      icons: <FaLinkedinIn />,
      url: "/",
    },
    {
      icons: <FaGithub />,
      url: "/",
    },
  ];

  return (
    <div
      className={`w-[90%] m-auto pt-28 pb-3 lg:flex lg:items-center lg:w-[80%] lg:pt-32`}
      id="home"
    >
      <div className="w-full h-max">
        <div className="w-full h-max bold-600">
          <p className="text-[1.2rem] lg:text-[1.8rem]">I am Sastra</p>
          <p className="text-[1.7rem] gradient-text lg:text-[2.5rem]">
            Front End Developer
          </p>
        </div>
        <div className="w-full h-max mt-7 flex justify-center lg:hidden">
          <div className="w-[65%] h-[300px] overflow-hidden transform rotate-3  border rounded-3xl border-purple-950 hover:border-purple-700 hover:border-2 hover:rotate-0 duration-300">
            <img
              src="/img2.jpeg"
              alt="img"
              loading="lazy"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="w-full h-max mt-6">
          <p className="text-[1.1rem]">
            I am a student who is very passionate about programming, and my
            determination is to become a professional in the field of
            programming
          </p>
          <button className="px-6 py-3 mt-4 rounded-full border-2 border-purple-800 hover:bg-purple-950">
            Donwload CV
          </button>
          <div className="w-max h-max  flex items-center gap-3 mt-4">
            {medsosData.map((item, i) => (
              <button
                className="p-3 border border-purple-700 rounded-full hover:bg-purple-950"
                key={i}
              >
                <a href={item.url}>{item.icons}</a>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-max mt-7 lg:flex justify-center hidden">
        <div className="w-[65%] h-[400px] overflow-hidden transform rotate-3  border-2 rounded-3xl border-purple-950 hover:border-purple-700 hover:border-2 hover:rotate-0 duration-300">
          <img
            src="/img2.jpeg"
            alt="img"
            loading="lazy"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
