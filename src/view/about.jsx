import { PiGraduationCapBold, PiMedalBold } from "react-icons/pi";

export default function About() {
  const dataExperience = [
    {
      duration: "Des 2023 - Mar 2024",
      jobs: "Front End Dev (Intern)",
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
    <div className="w-[90%] h-max m-auto pt-[50px] lg:mt-[90px] ">
      <div className="w-full h-max flex flex-col justify-center items-center lg:w-[600px] lg:m-auto">
        <h1 className="text-[2rem] gradient-text lg:text-[3rem] lg:font-semibold">
          About Me
        </h1>
        <p className="text-center mt-2 lg:text-[1.1rem] w-[400px]">
          The following is my educational background and my experience
        </p>
      </div>
      <div className="w-full justify-center flex flex-col gap-12 lg:flex-row-reverse lg:justify-center mt-[80px]">
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
                data-aos="fade-up"
                data-aos-duration="10000"
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
                data-aos="fade-up"
                data-aos-duration="10000"
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
    </div>
  );
}
