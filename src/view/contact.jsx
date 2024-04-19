import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  const dataContacts = [
    {
      icons: <FiPhone size={25} />,
      title: "Phone",
      description: "+62 838 7091 5417",
    },
    {
      icons: <MdOutlineMail size={25} />,
      title: "Email",
      description: "sastrapradana535@gmail.com",
    },
    {
      icons: <FiPhone size={25} />,
      title: "Location",
      description: "Medan, Indonesia",
    },
  ];

  return (
    <div className="w-[90%] h-max m-auto mt-10 pt-10" id="contact">
      <div className="w-full h-max text-center lg:w-[600px] lg:m-auto">
        <h1 className="text-[2rem] gradient-text lg:text-[3rem] lg:font-semibold">
          My Contact
        </h1>
      </div>
      <div className="w-full h-max flex mt-10 flex-col gap-6  lg:w-max lg:flex-row lg:m-auto lg:mt-10 lg:gap-10">
        {dataContacts.map((item, i) => (
          <div className="w-max h-max flex items-center gap-4" key={i}>
            <div className="p-4 grad-bottom rounded-full">{item.icons}</div>
            <div className="">
              <p className="lg:text-[1.5rem]">{item.title}</p>
              <p className="lg:text-[1.3rem]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
