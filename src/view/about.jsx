import {
  PiGraduationCapBold,
  PiShootingStarBold,
  PiMedalBold,
} from "react-icons/pi";

export default function About() {
  const dataExperience = [
    {
      duration: "Des 2023 - Mar 2024",
      jobs: "Web Developer (Intern)",
      company: "Pt. Rezeki Teknologi Indonesia",
    },
  ];

  const dataEducation = [
    {
      duration: "2017 - 2020",
      major: "TEKNIK KENDARAAN RINGAN",
      school: "SMKN 1 Lubuk Pakam",
    },
    {
      duration: "2022 - Now",
      major: "TEKNIK INFORMATIKA",
      school: "STMIK Pelita Nusantara",
    },
  ];

  return (
    <div
      className="w-[90%] h-max m-auto pt-[50px]  justify-center flex flex-col gap-12 lg:flex-row-reverse lg:justify-center lg:mt-[90px]"
      id="about"
    >
      <div className="w-full h-max">
        <div className="flex items-center gap-3 lg:justify-center">
          <PiMedalBold className="text-purple-700 text-[3rem]" />
          <p className="text-[2rem] gradient-text font-semibold ">
            My Experience
          </p>
        </div>

        <div className="w-[90%] h-max m-auto mt-6 flex flex-col gap-3 ">
          {dataExperience.map((item, i) => (
            <div
              className="w-full h-max flex flex-col gap-1 bg-[#150820] p-4 rounded-lg card-grad"
              key={i}
            >
              <p className="text-[1rem] text-violet-700 font-semibold">
                {item.duration}
              </p>
              <p className="font-semibold text-[1.5rem] uppercase">
                {item.jobs}
              </p>
              <p className="-mt-1">{item.company}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-max">
        <div className="flex items-center gap-3 lg:justify-center">
          <PiGraduationCapBold className="text-purple-700 text-[3rem]" />
          <p className="text-[2rem] gradient-text font-semibold">
            My Education
          </p>
        </div>
        <div className="w-[90%] h-max m-auto mt-6 flex flex-col gap-3">
          {dataEducation.map((item, i) => (
            <div
              className="w-full h-max flex flex-col gap-1 bg-[#150820] p-4 rounded-lg card-grad"
              key={i}
            >
              <p className="text-[1rem] text-violet-700 font-semibold">
                {item.duration}
              </p>
              <p className="font-semibold text-[1.5rem] uppercase">
                {item.major}
              </p>
              <p className="-mt-1">{item.school}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const classLg = {
  divLg: "",
};
