import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { VscSquirrel } from "react-icons/vsc";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Skill() {
  const dataSkills = [
    {
      icons: <RiJavascriptFill size={100} className="text-yellow-300" />,
      name: "Javascript",
    },
    {
      icons: <FaReact size={100} className="text-blue-400" />,
      name: "React",
    },
    {
      icons: <SiTailwindcss size={100} className="text-sky-600" />,
      name: "Tailwind",
    },
    {
      icons: <VscSquirrel size={100} className="text-amber-900" />,
      name: "Zustand",
    },
    {
      icons: <SiNextdotjs size={100} className="text-white" />,
      name: "Next",
    },
    {
      icons: <FaNodeJs size={100} className="text-green-500" />,
      name: "Node",
    },
    {
      icons: <SiExpress size={100} className="text-white" />,
      name: "Express",
    },
    {
      icons: <SiFirebase size={100} className="text-yellow-500" />,
      name: "Firebase",
    },
    {
      icons: <RiSupabaseFill size={100} className="text-green-500" />,
      name: "Supabase",
    },
  ];

  return (
    <div className="w-[90%] h-max m-auto mt-10 pt-10">
      <div className="w-full h-max text-center lg:w-[600px] lg:m-auto">
        <h1 className="text-[2rem] gradient-text lg:text-[3rem] lg:font-semibold">
          My Skill
        </h1>
        <p className="text-center mt-2 lg:text-[1.1rem]">
          Here are some skills I have learned and can apply to create several
          interesting web projects
        </p>
      </div>
      <div className="w-full h-max flex flex-wrap justify-center gap-4 mt-6 p-4">
        {dataSkills.map((item, i) => (
          <div
            className="w-[45%] h-[180px] bg-[#00000031] rounded-3xl flex flex-col justify-center items-center cursor-pointer hover:border-2 hover:border-violet-700 hover:bg-[#42008034] lg:w-[15%]"
            key={i}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            {item.icons}
            <p className="text-purple-600">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
