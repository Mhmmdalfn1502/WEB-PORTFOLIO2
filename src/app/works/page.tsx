"use client";

import { useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Works() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Tombol scroll manual
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll loop tiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        const maxScroll = el.scrollWidth - el.clientWidth;

        if (el.scrollLeft >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 4000); // scroll tiap 4 detik

    return () => clearInterval(interval);
  }, []);

  const projects = [
    { title: "Meranto", desc: "lorem Ipsum lorem ipsum lorem ipsum", image: "meranto2.png" },
    { title: "Intellect.ai", desc: "lorem Ipsum lorem ipsum lorem ipsum", image: "intellect.png" },
    { title: "Hand Recognition", desc: "lorem Ipsum lorem ipsum lorem ipsum", image: "signlanguage.png" },
    { title: "Hotel Reservation", desc: "lorem Ipsum lorem ipsum lorem ipsum", image: "hotel.png" },
    { title: "Project 5", desc: "lorem Ipsum lorem ipsum lorem ipsum", image: "meranto2.png" },
  ];

  return (
    <main className="w-screen bg-[#F5F4FF]">
      {/* Hero Section */}
      <div className="flex flex-col w-full justify-center items-center pt-40 pb-20 gap-6 px-6 lg:px-28">
        <span className="text-[#808080] text-center tracking-widest">Graphic Design, UI/UX Design & Front-end Web Developer</span>
        <div className="leading-tight flex flex-col">
          <span className="lg:text-[60px] text-[24px] text-center text-[#272727] font-extrabold uppercase">Designing clean,</span>
          <span className="bg-[#272727] lg:text-[60px] text-[24px] px-2 py-2 h-[40px] flex items-center text-center text-[#F5F4FF] font-extrabold uppercase">responsive, and user-</span>
          <span className="lg:text-[60px] text-[24px] text-center text-[#272727] font-extrabold uppercase">friendly websites.</span>
        </div>
        <button className="px-4 py-2 rounded-sm border-2 border-[#272727] hover:px-6 transition-all duration-300">Let's start a project together</button>
      </div>

      {/* Project Section */}
      <div className="relative w-full bg-[#272727] py-10 px-4 lg:px-28">
        <span className="text-[#F5F4FF] text-[40px] font-extrabold text-center block mb-10">MY PROJECTS</span>

        {/* Tombol navigasi */}
        <button onClick={() => scroll("left")} className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2">
          <AiOutlineLeft size={24} />
        </button>
        <button onClick={() => scroll("right")} className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2">
          <AiOutlineRight size={24} />
        </button>

        {/* Scrollable Container */}
        <div ref={scrollRef} className="flex snap-x gap-8 overflow-x-auto scroll-smooth scrollbar-hidden px-2">
          {projects.map((project, index) => (
            <div key={index} className="relative snap-center w-[85vw] sm:w-[60vw] md:w-[300px] h-[500px] overflow-hidden rounded-2xl group cursor-pointer flex-shrink-0">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale lg:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#272727]/50 via-[#272727]/30 to-[#272727]/0 text-white py-4 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-semibold transition duration-500 translate-y-4 group-hover:translate-y-0">{project.title}</h3>
                <h3 className="text-lg font-semibold transition duration-500 translate-y-4 group-hover:translate-y-0">{project.desc}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
