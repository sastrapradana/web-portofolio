/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const { hash } = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const ButtonLink = ({ title, url }) => {
    return (
      <button
        className={`text-[.9rem] hover:border-b  ${
          activeSection == url && "text-violet-600"
        }  hover:border-violet-600 `}
      >
        <a href={url}>{title}</a>
      </button>
    );
  };

  const ButtonLinkMenu = ({ title, url }) => {
    return (
      <button
        className={`text-[1.2rem] mt-4 uppercase hover:border-b tracking-[2px]  ${
          hash == url && "border-b border-violet-600"
        }  hover:border-violet-600 `}
      >
        <a href={url}>{title}</a>
      </button>
    );
  };

  const listLink = [
    {
      nama: "Home",
      url: "#home",
    },
    {
      nama: "About",
      url: "#about",
    },
    {
      nama: "Project",
      url: "#project",
    },
    {
      nama: "Skill",
      url: "#skill",
    },
    {
      nama: "Contact",
      url: "#contact",
    },
  ];

  const Menu = () => {
    return (
      <div className="w-full h-mx pb-4 bg-[#432c6d] absolute top-[100px] flex flex-col items-center">
        {listLink.map((item, i) => (
          <ButtonLinkMenu title={item.nama} url={item.url} key={i} />
        ))}
      </div>
    );
  };

  return (
    <div
      className={`w-full h-[100px] fixed top-0 z-20 ${
        isScroll ? "bg-[#0000001e] backdrop-blur-md" : null
      }`}
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
    >
      {isMenu && <Menu />}
      <div className="w-[90%] h-full flex justify-between items-center lg:flex-row-reverse m-auto">
        <div className="w-max h-max cursor-pointer lg:hidden">
          <HiOutlineMenuAlt2 size={45} onClick={() => setIsMenu(!isMenu)} />
        </div>
        <div className="w-max h-max flex gap-14 items-center">
          <div className="w-max h-max items-center gap-6 bold-600 hidden lg:flex">
            {listLink.map((item, i) => (
              <ButtonLink title={item.nama} url={item.url} key={i} />
            ))}
          </div>
          <button className="px-6 py-3 bold-600  glow-button  rounded-full">
            <a href="https://api.whatsapp.com/send?phone=6283870915417">
              Hire Me!
            </a>
          </button>
        </div>
        <div className="w-max hidden h-max cursor-pointer lg:block">
          <img src="/sastra.svg" alt="" className="w-[40px] h-[40px]" />
        </div>
      </div>
    </div>
  );
}
