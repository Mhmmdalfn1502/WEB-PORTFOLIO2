"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

const experiences = [
  {
    title: "Assistant Lecturer",
    details: ["- UI/UX Design", "- Teknik Animasi dan Multimedia | IBI Kesatuan Bogor"],
    date: "Sep 2024 - Jan 2025",
  },
  {
    title: "Internship",
    details: ["Graphic Designer | Bestari Property"],
    date: "Jul 2024 - Jan 2025",
  },
  {
    title: "CROWD IT 2024 Workshop",
    details: ["UI/UX Workshop Speaker | IBI Kesatuan Bogor"],
    date: "Jun - Jul 2024",
  },
  {
    title: "International Competition",
    details: ["The 2nd 'CZIE Cup' International Invitational Competition of Innovation and Entrepreneurship"],
    date: "Mar - Dec 2024",
  },
  {
    title: "Front-End Developer Training Certificate",
    details: ["Completed a Front-End Developer Training Program | Dibimbing.id"],
    date: "Feb 2024",
  },
  {
    title: "Independent Study Batch 5",
    details: ["Intermediate Fullstack Web Development Program | PT Global Investment Institusi"],
    date: "Aug - Dec 2023",
  },
  {
    title: "ISC Web Design",
    details: ["2nd Place Winner in the Web Design Competition"],
    date: "2023",
  },
];

export default function AboutMe() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#F5F4FF] lg:py-28 py-10 overflow-hidden">
      <h1 className="absolute top-40 text-[180px] font-extrabold text-[#272727] mix-blend-difference pointer-events-none z-0 select-none">ABOUT</h1>

      <div className="relative w-[300px] h-auto z-20">
        <img
          src="Me.png"
          alt="Me"
          className="w-full h-auto object-cover transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />

        <div className="absolute pb-10 inset-0 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* <h1 className="absolute top-40 text-[180px] font-extrabold text-[#272727] mix-blend-difference pointer-events-none z-30 select-none">ABOUT</h1> */}

      <div className="relative z-30 flex flex-col items-center mt-10 text-[#272727] px-6 lg:px-0">
        <p className="text-[#808080] mt-4 max-w-xl text-center tracking-widest">Let's get to know each other</p>

        <div className="flex flex-row lg:justify-between justify-center gap-6 items-center w-screen px-23 mt-10">
          <a className="text-[16px] tracking-wider" href="https://www.instagram.com/mhmmdalfn_1502/">
            <ScrambleText text="Instagram" />
          </a>
          <a href="/CV-MuhammadAlfan.pdf" download className="text-[16px] text-center tracking-wider font-bold">
            <ScrambleText text="My Resume" />
          </a>
          <a className="text-[16px] tracking-wider" href="https://www.linkedin.com/in/muhammad-alfan1502/">
            <ScrambleText text="Linkedin" />
          </a>
        </div>

        <div className="w-full lg:w-[40%] lg:px-0 px-4 lg:mt-18 mt-10 lg:text-justify text-center">
          <span className="text-[32px] lg:text-[40px] font-extrabold leading-10 -tracking-tight">I'm UI/UX designer and Front-end web developer</span>
          <div className="paragraph flex flex-col gap-6 mt-10 text-start text-[16px] leading-relaxed">
            <span>
              With a passion for UI/UX design, web development, and visual storytelling, I enjoy collaborating with people who appreciate clarity, value functional aesthetics, and understand that user experience is at the core of every
              digital product.
            </span>
            <span>By placing your goals and identity at the center of my process, I aim to create simple, meaningful, and effective solutions tailored to your needs.</span>
            <span>Clients work with me for my adaptability, creative thinking, and clear communication — and maybe also because I enjoy turning ideas into well-crafted, interactive experiences.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:px-23 px-4 mt-10 gap-4">
        <div>
          <span className="text-[40px] text-[#272727] font-extrabold">My Experience</span>
          <hr className="mt-4" />
        </div>

        {experiences.map((exp, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex flex-col">
                <span className="text-[#272727] text-[14px] lg:text-[20px] font-extrabold">{exp.title}</span>
                {exp.details.map((line, i) => (
                  <span key={i} className="text-[#808080] text-[12px] lg:text-[16px] font-medium">
                    {line}
                  </span>
                ))}
              </div>
              <div className="text-end">
                <span className="text-[#272727] text-[12px] lg:text-[16px] -tracking-widest">{exp.date}</span>
              </div>
            </div>
            <hr className="mt-4" />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
