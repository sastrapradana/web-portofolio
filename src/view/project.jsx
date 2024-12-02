import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

export default function Project() {
  const dataProjects = [
    {
      title: "Classcrafter",
      description: "Management classroom web application",
      img: "/classcrafter.jpeg",
      urlWeb: "https://classcrafter.vercel.app/",
      urlGit: "https://github.com/Sastrapradana06/ClassCrafter-v2",
    },
    {
      title: "Snapvibes",
      description: "Website social media with a mobile appearance",
      img: "/snapvibes2.jpeg",
      urlWeb: "https://snapvibes.vercel.app/",
      urlGit: "https://github.com/Sastrapradana06/Clone-Instagram",
    },
    {
      title: "Myquran",
      description:
        "Mobile-friendly access to Quran surahs, prayer times, and daily duas.",
      img: "/myquran.jpeg",
      urlWeb: "https://myquran-sstra.vercel.app/",
      urlGit: "https://github.com/sastrapradana/myquran",
    },
    {
      title: "Wedding Web",
      description:
        "Mobile-friendly online wedding invitations with elegant and customizable designs.",
      img: "/undangan.jpeg",
      urlWeb: "https://web-wedding-v2.vercel.app/home",
      urlGit: "https://github.com/Sastrapradana06/wedding-web-v2",
    },
    // {
    //   title: "Mycatatan",
    //   description:
    //     "Store your notes securely and access them anytime, anywhere.",
    //   img: "/mycatatan.jpeg",
    //   urlWeb: "https://my-catatan.vercel.app/",
    //   urlGit: "https://github.com/Sastrapradana06/my-catatan",
    // },
    {
      title: "Dompetku",
      description: "Website Management Money",
      img: "/dompetku.png",
      urlWeb: "https://dompetku66.vercel.app/",
      urlGit: "https://github.com/Sastrapradana06/Dompetku",
    },
  ];

  return (
    <div className="w-[90%] h-max m-auto mt-10 pt-10 lg:mt-[100px]">
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
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="w-full h-[250px] border-2 border-purple-700 rounded-xl overflow-hidden lg:h-[300px]">
              <img
                src={item.img}
                alt="img_projects"
                loading="lazy"
                className="w-full h-full object-cover p-2"
              />
            </div>
            <div className="absolute bottom-[20px] w-[93%] h-[80px] z-20 hidden card-grad2 left-3 rounded-3xl items-center justify-between p-4 lg:h-[100px] lg:left-4">
              <div className="flex flex-col ">
                <h1 className="text-[1.3rem] lg:text-[1.6rem]">{item.title}</h1>
                <p className="text-[.7rem] lg:text-[.9rem]">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={item.urlGit}
                  aria-label="url to github"
                  target="_blank"
                >
                  <FaGithub size={25} />
                </a>
                <a
                  href={item.urlWeb}
                  aria-label="url to website"
                  target="_blank"
                >
                  <GoLinkExternal size={25} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
