import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Styles/Styles";
import { Typography } from "./Styles/Styles";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [visible, setVisible] = useState(false);
  const Menu = [
    { id: 0, url: "", text: "  HOME" },
    { id: 1, url: "", text: "  MENU", dropdown: true },
    { id: 2, url: "", text: "  SHOP" },
    { id: 3, url: "", text: "  PAGES" },
    { id: 4, url: "", text: "  BLOG" },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const scrollThreshold = 300;
    setVisible(scrollTop >= scrollThreshold);
  };

  return (
    <>
      <header
        className={`font-verdana z-50  bg-slate-50 h-[90px] w-[100%] border-b-2  top-0 shadow-lg flex items-center
       justify-between  px-5`}
      >
        <div className="flex justify-between gap-2 pt-2">
          <span
            class="material-symbols-outlined  flex justify-center items-center text-white text-4xl rounded-br-2xl
            bg-lime-600 h-[50px] w-[50px]  rounded-tl-2xl "
          >
            deployed_code_alert
          </span>
          <h1 className=" font-bold text-3xl font-display">Skypes</h1>
        </div>

        <nav
          className={`absolute flex z-[9999] md:relative  flex-col gap-6 justify-start px-5 py-7 md:p-0 md:items-center bottom-0 top-0 left-0 w-[100%] ${
            toggleMenu ? "left-0 duration-500 " : "left-[-100%] duration-500 "
          } h-[100%] md:left-0 md:bg-white bg-lime-600`}
        >
          <div className="md:hidden flex justify-between items-center  border-b-2  pb-2">
            <div className="flex justify-normal items-center gap-2 ">
              <span
                class="material-symbols-outlined  flex justify-center items-center
               text-black text-4xl rounded-br-2xl  bg-white h-[50px] w-[50px]  rounded-tl-2xl "
              >
                deployed_code_alert
              </span>
              <h1 className=" font-bold text-white text-3xl">Skypes</h1>
            </div>
            <span
              className="material-symbols-outlined text-white text-3xl"
              onClick={() => setToggleMenu(false)}
            >
              close
            </span>
          </div>

          <ul className=" flex flex-col md:flex-row gap-6 pl-2 pt-3 justify-between font-display">
            {Menu.map((menu, index) => (
              <li
                className={` text-[1.1rem] font-semibold leading-2 text-zinc-800 pt-3`}
                key={index}
              >
                <a href="" className="hover:text-white md:hover:text-lime-500">
                  {menu.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span
          onClick={() => setToggleMenu(!toggleMenu)}
          className="material-symbols-outlined md:hidden text-black text-3xl"
        >
          menu
        </span>
      </header>
    </>
  );
}

export default App;

export function Image() {
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-2 w-[100%] h-[auto] mt-1 font-display">
        <div data-aos="slide-right" className="w-[100%] h-[auto] md:pl-10 px-2 sm:px-8 relative text-center lg:text-left">
          <h1
            className=" font-extrabold text-black font-display
             pt-16  md:leading-normal leading-snug md:text-[2.6rem] text-[2.3rem] "
          >
            WE DO NOT <span className=" text-lime-500">COOK</span>, WE CREATE
            YOUR EMOTIONS!
          </h1>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed
            vestibulum sagittis eleifend.
          </Typography>

          <Button>See our Menu</Button>
          <img
            src="src\assets\home-bottom-left.png"
            alt=""
            className=" absolute left-10 md:left-[20%]  w-[50px] h-[70px]"
          />
          <img
            src="src\assets\home-bottom-right - Copy.png"
            alt=""
            className=" absolute left-10 top-[0] md:left-[23%] w-[90px] h-[70px]"
          />
        </div>
        <div  data-aos="slide-left" className=" w-[100%] h-[500px] flex items-center justify-center">
          <img
            src="src\assets\home-banner.png"
            alt=""
            className="w-[450px] h-[430px] lg:w-[490px] md:w-[450px] md:h-[450px] lg:h-[490px]"
          />
        </div>
      </div>
    </>
  );
}

export function OurstoryPage() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row w-[100%] h-[auto] font-display">
        <div  data-aos="slide-right" className=" w-[100%] h-[500px]  px-7 py-10 flex justify-center items-center bg-image2 ">
                <img src="about-img.jpg" alt="" className=" h-[400px] w-[400px]" />
                
        </div>
        <div  data-aos="slide-left" className=" w-[100%] h-[700px] px-7 py-10">
          <h1 className=" text-lime-500 font-medium text-2xl">Our Story</h1>
          <h1 className=" text-black font-extrabold text-5xl pt-3">About Us</h1>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Button>Read More</Button>
        </div>
      </div>
    </>
  );
}
