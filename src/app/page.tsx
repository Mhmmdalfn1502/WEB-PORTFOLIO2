"use client";

import { AiOutlineSwapRight } from "react-icons/ai";
import "animate.css";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setPosition({
      x: (clientX - window.innerWidth / 2) / 50,
      y: (clientY - window.innerHeight / 2) / 50,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5F4FF] lg:pt-36 pt-20">
      {/* Header */}
      <div className="head flex lg:flex-row flex-col gap-6 justify-center items-center bg-[#F5F4FF]">
        <div className="HeadLeft flex flex-col">
          <div className="static flex justify-start items-center px-6 w-full lg:h-[200px] h-[140px] border-[#272727] hover:border-[#F5F4FF] transition-all duration-700 hover:bg-[#272727] border-2">
            <div className="absolute w-[20px] h-[20px] border-1 border-[#272727] lg:top-33 top-18 lg:left-23 left-0"></div>
            <div className="absolute w-[20px] h-[20px] border-1 border-[#272727] lg:top-33 top-18 lg:left-110 left-47"></div>
            <div className="absolute w-[20px] h-[20px] border-1 border-[#272727] lg:top-33 top-18 lg:left-198 left-93"></div>
            <div className="absolute w-[20px] h-[20px] border-1 border-[#272727] lg:top-83 top-52 lg:left-23 left-0"></div>
            <div className="absolute w-[20px] h-[20px] border-1 border-[#272727] lg:top-83 top-52 lg:left-110 left-47"></div>
            <div className="absolute w-[20px] h-[20px] border-1 border-[#272727] lg:top-83 top-52 lg:left-198 left-93"></div>
            <span style={{ animationDelay: "0.1s" }} className="lg:text-[200px] text-[100px] text-[#272727] hover:text-[#F5F4FF] font-black transition-all tracking-wider animate__animated animate__fadeInLeft">
              PORT-
            </span>
          </div>
          <div style={{ animationDelay: "0.2s" }} className="Folio flex justify-center items-center px-6 w-full lg:h-[200px] h-[140px] bg-[#272727] transition-all hover:bg-[#F5F4FF] duration-700 animate__animated animate__fadeInLeft">
            <span className="lg:text-[200px] text-[100px] text-[#F5F4FF] hover:text-[#272727] transition-all font-black tracking-wider">FOLIO</span>
          </div>
        </div>

        <div className="HeadRight w-[400px] lg:h-[400px] lg:p-2 p-4 dashed-custom gap-2 flex flex-col">
          <div className="paragraph text flex flex-col w-full">
            <span style={{ animationDelay: "0.5s", animationFillMode: "forwards", animationName: "reveal", animationDuration: "0.5s" }} className="font-light text-[#272727] tracking-wider">
              Hello, I'm Muhammad Alfan
            </span>
            <span style={{ animationDelay: "0.6s", animationFillMode: "forwards", animationName: "reveal", animationDuration: "0.5s" }} className="text-[40px] text-[#272727] font-bold leading-tight">
              I'm UI/UX Designer, & Front-end Web Developer
            </span>
          </div>

          <div className="flex flex-row items-end gap-4">
            <div className="line w-[80%] lg:h-[150px] h-[10px] border-l-2 border-b-2 border-black"></div>
            <a href="/CV-MuhammadAlfan.pdf" download className="border-1 w-[30%] h-[30px] text-center text-[16px]">
              My Resume
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center lg:px-28 px-4 w-[100%] lg:mt-18 mt-6">
        <div className="link flex flex-row gap-2 justify-center items-center text-[#272727] text-[16px]">
          <a className="tracking-wider" href="https://www.linkedin.com/in/muhammad-alfan1502/">
            Linkedin
          </a>
          <span>|</span>
          <a className="tracking-wider" href="https://github.com/Mhmmdalfn1502">
            Github
          </a>
        </div>
        <span className="tracking-wider">-Portfolio</span>
      </div>
      <img onClick={scrollToSection} style={{ animationDuration: "1.5s" }} className="absolute lg:-bottom-4 bottom-0 w-[100px] h-[100px] animate-bounce duration-700 cursor-pointer" src="Letsseemore.png" alt="See more" />

      {/* Section 2 Project */}
      <div ref={sectionRef} className="w-screen lg:h-screen flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hidden touch-auto lg:pt-0 pt-16">
        {/* First sec */}
        <div className="flex-shrink-0 snap-start w-screen h-full px-4 lg:px-28 relative pointer-events-none">
          <div className="flex flex-col lg:justify-center justify-between h-full">
            <div className="flex flex-col">
              <span className="lg:text-[128px] text-[64px] leading-tight text-[#272727] font-extrabold">PORTFOLIO</span>
              <span className="bg-[#272727] lg:w-[680px] w-[340px] lg:h-[96px] h-[48px] flex items-center lg:text-[128px] text-[64px] text-[#F5F4FF] font-extrabold leading-tight">&PREVIOUS</span>
              <span className="lg:text-[128px] text-[64px] leading-tight text-[#272727] font-extrabold">PROJECT</span>
              <span className="lg:text-[20px] text-[14px] text-[#272727] lg:w-[600px] w-[250px]">Take a deeper look into my complete portfolio showcasing diverse digital solution.</span>
            </div>

            <div className="flex flex-row justify-between items-end mt-8 ">
              <span className="text-[20px] text-[#272727] lg:w-[600px]">_______</span>
              <a href="#project2" className="flex flex-row gap-2 items-center scroll-smooth">
                <span className="text-[16px] tracking-wider">Let's see</span>
                <AiOutlineSwapRight size={20} color="#272727" />
              </a>
            </div>
          </div>
          {/* Element dekoratif absolut */}
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            className="absolute lg:top-20 top-0 lg:left-24 left-2 lg:w-[60px] w-[36px] lg:h-[60px] h-[36px] border border-[#808080] rounded-full"
          >
            {" "}
          </div>
          <div className="absolute lg:top-25 top-3 lg:right-28 right-0 lg:w-[530px] w-[300px] lg:h-[510px] h-[330px] bg-gradient-to-bl from-[#272727]/10 pointer-events-none"></div>
          <img
            className="absolute lg:top-25 top-3 lg:right-28 right-0 lg:w-[120px] w-[80px] pointer-events-none opacity-50"
            src="Kutip.png"
            alt=""
          />
        </div>

        {/* Project Card 2 */}
        <div id="project2" className="flex-shrink-0 relative snap-start lg:w-screen lg:h-full px-4 lg:px-28">
          <div className="flex lg:flex-row flex-col items-center h-full lg:w-full w-[350px]">
            <div className="flex flex-col gap-0 justify-center items-start h-full lg:w-[30%] w-full">
              <span className="lg:text-[20px] text-[10px] tracking-wider">TRAVEL APPLICATION</span>
              <span className="lg:text-[96px] text-[50px] font-bold text-[#272727] tracking-wider">MERANTO</span>
              <p className="lg:text-[16px] text-[10px] text-[#808080] lg:w-[500px] w-full">Looking for your next gateway? This app helps travelers find the best spots to visit, from famous landmarks to off-the-beaten-path adventures.</p>
              <div className="flex flex-col lg:gap-2 mt-6">
                <span className="lg:text-[16px] text-[10px] text-[#272727] font-bold">Build with: Figma</span>
                <span className="lg:text-[16px] text-[10px] text-[#272727] font-bold">Project: 2024</span>
              </div>
            </div>
            <div className="relative lg:-right-20 w-[70%]">
              <img
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                className="lg:w-[800px] w-full"
                src="Meranto.png"
                alt=""
              />
            </div>
          </div>
          <img className="absolute lg:top-40 top-3 lg:left-140 left-72 lg:w-[80px] w-[80px] pointer-events-none opacity-50" src="Kutip.png" alt="" />
          <span className="absolute lg:top-40 top-3 lg:right-28 right-6 lg:text-[120px] text-[60px] text-[#272727]/50 font-extrabold leading-24 opacity-50">01</span>
        </div>

        {/* Project Card 3 */}
        <div className="flex-shrink-0 relative snap-start lg:w-screen lg:h-full px-4 lg:px-28">
          <div className="flex lg:flex-row flex-col items-center h-full lg:w-full w-[350px]">
            <div className="flex flex-col gap-0 justify-center items-start h-full lg:w-[30%] w-full">
              <span className="lg:text-[20px] text-[10px] tracking-wider">AI APPLICATION</span>
              <span className="lg:text-[60px] text-[30px] font-bold text-[#272727] tracking-wider">Intellect.ai</span>
              <p className="lg:text-[16px] text-[10px] text-[#808080] lg:w-[500px] w-full mix-blend-difference">
                Intellect.ai is a logo analysis tool that helps designers evaluate logos based on design principles like balance, contrast, alignment, and readability to ensure professional quality.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <span className="lg:text-[16px] text-[10px] text-[#272727] font-bold">Build with: Figma, ReactJs, Tailwincdcss</span>
                <span className="lg:text-[16px] text-[10px] text-[#272727] font-bold">Project: 2023</span>
                <a href="https://intellect-ai-five.vercel.app/" className="lg:text-[16px] text-[10px] text-[#F5F4FF] font-medium bg-[#272727] lg:w-[134px] w-[90px] px-2">
                  View Project
                </a>
              </div>
            </div>
            <div className="relative lg:-right-60 w-[70%]">
              <img
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                className="lg:p-0 p-6 w-[600px] z-[0]"
                src="Intellect.ai.png"
                alt=""
              />
            </div>
          </div>
          <img className="absolute lg:top-40 top-3 lg:left-140 left-72 lg:w-[80px] w-[80px] pointer-events-none opacity-50" src="Kutip.png" alt="" />
          <span className="absolute lg:top-40 top-3 lg:right-28 right-6 lg:text-[120px] text-[60px] text-[#272727]/50 font-extrabold leading-24 opacity-50">02</span>
        </div>

        {/* Project Card 4 */}
        <div className="flex-shrink-0 relative snap-start lg:w-screen lg:h-full px-4 lg:px-28">
          <div className="flex lg:flex-row flex-col items-center h-full lg:w-full w-[350px]">
            <div className="flex flex-col gap-0 justify-center items-start h-full lg:w-[30%] w-full">
              <span className="lg:text-[20px] text-[10px] tracking-wider">WEBSITE KULINER</span>
              <span className="lg:text-[60px] lg:w-[500px] text-[30px] font-bold text-[#272727]">Info-Kuliner</span>
              <p className="lg:text-[16px] text-[10px] text-[#808080] lg:w-[500px] w-full mix-blend-difference">
                Info-Kuliner is a culinary website that helps users find dining spots and top food recommendations based on reviews and popularity.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <span className="lg:text-[16px] text-[10px] text-[#272727] font-bold">Build with: Figma, ReactJs, Tailwincdcss</span>
                <span className="lg:text-[16px] text-[10px] text-[#272727] font-bold">Project: 2025</span>
                <a href="https://info-kuliner.vercel.app/" className="lg:text-[16px] text-[10px] text-[#F5F4FF] font-medium bg-[#272727] lg:w-[134px] w-[90px] px-2">
                  View Project
                </a>
              </div>
            </div>
            <div className="relative lg:-right-50 w-[70%]">
              <img
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                className="lg:p-0 p-6 lg:w-[700px] w-full z-[0]"
                src="Info-Kuliner.png"
                alt=""
              />
            </div>
          </div>
          <img className="absolute lg:top-40 top-3 lg:left-140 left-72 lg:w-[80px] w-[80px] pointer-events-none opacity-50" src="Kutip.png" alt="" />
          <span className="absolute lg:top-40 top-3 lg:right-28 right-6 lg:text-[120px] text-[60px] text-[#272727]/50 font-extrabold leading-24 opacity-50">03</span>
        </div>

        {/* Project Card 5 */}
        <div className="flex-shrink-0 relative snap-start lg:w-screen lg:h-full px-4 lg:px-28">
          <div className="flex lg:flex-row flex-col items-center h-full lg:w-full w-[350px]">
            <div className="flex flex-col gap-0 justify-center items-start h-full lg:w-[30%] w-full">
              <span className="lg:text-[20px] text-[10px] tracking-wider">HAND RECOGNITION</span>
              <span className="lg:text-[60px] lg:w-[500px] text-[30px] font-bold text-[#272727]">SIGN-LANGUAGE BISINDO</span>
              <p className="lg:text-[16px] text-[10px] text-[#808080] lg:w-[500px] w-full mix-blend-difference">
                This website detects BISINDO alphabets in real-time through the camera, using a machine learning model with React on the frontend and Flask on the backend.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <span className="lg:text-[16px] text-[10px] text-[#272727] font-bold">Build with: Figma, ReactJs, Tailwincdcss, Flask, MediaPipe</span>
                <span className="lg:text-[16px] text-[10px] text-[#272727] font-bold">Project: 2025</span>
                <a href="https://sign-language-bisindo.vercel.app/" className="lg:text-[16px] text-[10px] text-[#F5F4FF] font-medium bg-[#272727] lg:w-[134px] w-[90px] px-2">
                  View Project
                </a>
              </div>
            </div>
            <div className="relative lg:-right-50 w-[70%]">
              <img
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                className="lg:p-0 p-6 lg:w-[600px] w-full z-[0]"
                src="BISINDO.png"
                alt=""
              />
            </div>
          </div>
          <img className="absolute lg:top-40 top-3 lg:left-140 left-72 lg:w-[80px] w-[80px] pointer-events-none opacity-50" src="Kutip.png" alt="" />
          <span className="absolute lg:top-40 top-3 lg:right-28 right-6 lg:text-[120px] text-[60px] text-[#272727]/50 font-extrabold leading-24 opacity-50">04</span>
        </div>
      </div>
    </main>
  );
}
