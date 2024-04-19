import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

export default function Project() {
  const dataProjects = [
    {
      title: "Snapvibes",
      description: "Website social media with a mobile appearance",
      img: "/snapvibes2.jpeg",
      urlWeb: "",
      urlGit: "",
    },
    {
      title: "Classcrafter",
      description: "School Management Website",
      img: "/classcrafter.png",
      urlWeb: "",
      urlGit: "",
    },
    {
      title: "Dompetku",
      description: "Website Management Money",
      img: "/dompetku.png",
      urlWeb: "",
      urlGit: "",
    },
  ];

  return (
    <div className="w-[90%] h-max m-auto mt-10 pt-10" id="project">
      <div className="w-full h-max text-center lg:w-[600px] lg:m-auto">
        <h1 className="text-[2rem] gradient-text lg:text-[3rem] lg:font-semibold">
          My Projects
        </h1>
        <p className="text-center mt-2 lg:text-[1.1rem]">
          I express my ideas and desires in the form of web projects that might
          be useful for people
        </p>
      </div>
      <div className="w-full h-max mt-6 flex flex-col gap-4 lg:flex-row lg:justify-between lg:flex-wrap">
        {dataProjects.map((item, i) => (
          <div
            className="card-project w-full h-max p-4 rounded-xl bg-[#00000031] cursor-pointer lg:p-10 lg:w-[47%] relative"
            key={i}
          >
            <div className="w-full h-[250px] border-2 border-purple-700 rounded-xl overflow-hidden lg:h-[300px]">
              <img
                src={item.img}
                alt="img_projects"
                loading="lazy"
                className="w-full h-full object-cover p-2"
              />
            </div>
            <div className="absolute bottom-[20px] w-[93%] h-[80px] z-20 card-grad2 left-4 rounded-3xl hidden items-center justify-between p-4 lg:h-[100px]">
              <div className="flex flex-col ">
                <h1 className="text-[1.6rem]">{item.title}</h1>
                <p className="text-[.9rem]">{item.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <a href="">
                  <FaGithub size={25} />
                </a>
                <a href="">
                  <GoLinkExternal size={25} />
                </a>
              </div>
            </div>
            {/* <div className="w-full h-max  flex justify-between items-center mt-8">
              <div className="flex gap-2 items-center w-[80%] flex-wrap">
                <p className="gradient-text">React js,</p>
                <p className="gradient-text">Tailwind,</p>
                <p className="gradient-text">Node js,</p>
                <p className="gradient-text"> Express js,</p>
                <p className="gradient-text">Firebase,</p>
              </div>
              <div className="flex items-center gap-2">
                <a href="">
                  <FaGithub size={25} />
                </a>
                <a href="">
                  <GoLinkExternal size={25} />
                </a>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
