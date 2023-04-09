"use client";
import React, { useEffect, useState } from "react";
import HoverButton from "./reusableComponent/hoverButton";
import {
  AiOutlineArrowRight,
  AiOutlineFileDone,
  AiOutlineSearch,
  AiOutlineSwap,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

const video =
  // "https://nftstorage.link/ipfs/bafybeifueea4vkn7eojj4ja7bupwyjca7nrutdqxscj6h3tq7jw7rizgbq";
  "https://nftstorage.link/ipfs/bafybeifueea4vkn7eojj4ja7bupwyjca7nrutdqxscj6h3tq7jw7rizgbq";

const LandingSlide = () => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center relative"
      id="home"
    >
      <div
        className="absolute inset-0 bg-black opacity-40 w-full h-full rounded-none "
        style={{ zIndex: "9" }}
      ></div>
      <div className="fixed top-0 left-0 h-fit w-full z-50">
        <Navbarr />
      </div>
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      />
      <div className="absolute h-[60vh] bg-bg1 opacity-40 w-[7vw] left-0 rounded-sm">
        <div className="h-full w-full flex flex-col items-center justify-center">
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <div
                className="w-full h-10 flex flex-row items-center justify-between p-4 opacity-60"
                key={i}
              >
                <div className="relative z-10 bg-white rounded-full w-1 h-1 m-2" />
                <div className="relative z-10 bg-white rounded-full w-1 h-1 m-2" />
                <div className="relative z-10 bg-white rounded-full w-1 h-1 m-2" />
              </div>
            ))}
        </div>
      </div>

      <div className="absolute z-10 text-center text-white animated w-[80%]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl gil-bold mb-4 text-left w-[70%] opacity-85">
          Innovative solutions to stay ahead of the competition
        </h1>
        <p className="text-sm md:text-lg lg:text-md mb-8 text-left opacity-70 w-[60%]">
          Professional services that deliver exceptional quality, reliability,
          and customer service to exceed your expectations.
        </p>
        <div className="w-full flex flex-row items-center justify-left z-50 ml-1">
          {/* <HoverButton
            onClick={() => {
             
              window.document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" });
            }}
            text="Read More"
            className=" border-white"
            
          /> */}
          <button
            onClick={() => {
              window.document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" });
            }}
            type={"button"}
            className={`gil-reg text-sm flex flex-row items-center justify-center hover:bg-white hover:text-bg1 rounded-sm min-w-[120px]  min-h-[40px] mt-4 bg-transparent text-white border border-white`}
          >
            Read More
          </button>
        </div>
      </div>
      {/* <div className="absolute z-10 bottom-0 w-[100%] rounded-sm shadow-xl bg-primary opacity-50 h-32">
        <div className="h-full w-full z-20 flex flex-col md:flex-row justify-around items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-[2.5rem] font-bold mb-0">30 +</p>
            <p className="text-white text-[1.5rem] font-extrabold flex flex-row items-center">
              <AiOutlineUsergroupAdd className="mr-2" />
              <span> Recruiters</span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-[2.5rem] font-bold mb-0 ">300 +</p>
            <p className="text-white text-[1.5rem] font-extrabold flex flex-row items-center">
              <AiOutlineFileDone className="mr-2" /> Job seekers
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-[2.5rem] font-black mb-0">50 +</p>
            <p className="text-white text-[1.5rem] font-extrabold flex flex-row items-center">
              <AiOutlineSwap className="mr-2" /> Onboarded
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const navigation = (id) => {
    // navigation by id
    window.document
      .getElementById(id ?? "services")
      .scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const navigationBar = document.getElementById("navigationBar");
    // navigation bar color change when it's reach to 100vh from top
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > window.innerHeight - 80) {
        navigationBar.classList.remove("bg-transparent");
        navigationBar.classList.add("opacity-90");
        navigationBar.classList.add("bg-primary2");
        navigationBar.classList.add("shadow-sm");
        // setToggleNavbar(true);
      } else {
        navigationBar.classList.remove("bg-primary2");
        navigationBar.classList.remove("opacity-90");
        navigationBar.classList.add("bg-transparent");
        navigationBar.classList.remove("shadow-sm");
        // setToggleNavbar(false);
      }
    });
  }, []);

  return (
    <nav className="bg-transparent fixed w-full z-10 px-5" id="navigationBar">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img
            src={toggleNavbar ? "/spotmies_banner.png" : "/spotmies_banner.png"}
            alt="Logo"
            className="h-10 cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <button
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            } hover:text-secundary focus:outline-none md:hidden`}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h14a1 1 0 100-2H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <a
            onClick={() => navigation("services")}
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer`}
          >
            Services
          </a>
          {/* <a
            onClick={() => navigation("industries")}
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer`}
          >
            Industries
          </a> */}
          {/* <a
            onClick={() => navigation("career")}
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer`}
          >
            Career
          </a> */}
          <a
            onClick={() => navigation("aboutUs")}
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer`}
          >
            About Us
          </a>
          <a
            onClick={() => navigation("articles")}
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer`}
          >
            Blogs
          </a>

          <a
            onClick={() => navigation("contactUs")}
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer`}
          >
            Contact Us
          </a>
          <a
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            }  mx-4 border-b-2 border-transparent  cursor-pointer`}
          >
            <AiOutlineSearch className="text-2xl hover:text-primary" />
          </a>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } md:hidden bg-white transition-all duration-500 ease-in-out`}
      >
        <a
          onClick={() => navigation("services")}
          className="block px-4 py-2 text-primary border-b-2 border-transparent hover:border-secundary cursor-pointer"
        >
          Services
        </a>
        <a
          onClick={() => navigation("industries")}
          className="block px-4 py-2 text-primary border-b-2 border-transparent hover:border-secundary cursor-pointer"
        >
          Industries
        </a>
        <a
          onClick={() => navigation("career")}
          className="block px-4 py-2 text-primary border-b-2 border-transparent hover:border-secundary cursor-pointer"
        >
          Career
        </a>
        <a
          onClick={() => navigation("articles")}
          className="block px-4 py-2 text-primary border-b-2 border-transparent hover:border-secundary cursor-pointer"
        >
          Blogs
        </a>
        <a
          onClick={() => navigation("aboutUs")}
          className="block px-4 py-2 text-primary border-b-2 border-transparent hover:border-secundary cursor-pointer"
        >
          About Us
        </a>
        <a
          onClick={() => navigation("contactUs")}
          className="block px-4 py-2 text-primary border-b-2 border-transparent hover:border-secundary cursor-pointer"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default LandingSlide;

// hidden md:flex items-center