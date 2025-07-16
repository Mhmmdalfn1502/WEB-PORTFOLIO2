"use client";

import { useRef, useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ScrambleText from "@/components/ScrambleText";
import "swiper/css";
import "swiper/css/navigation";

export default function Works() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  let lastScrollY = 0;

  useEffect(() => {
     const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 1 : -1;

      if (marqueeRef.current) {
        const current = marqueeRef.current;
        const currentX = parseFloat(current.getAttribute("data-x") || "0");
        const newX = currentX + direction * 2; // atur kecepatan di sini
        current.style.transform = `translateX(${newX}px)`;
        current.setAttribute("data-x", newX.toString());
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const repeatedText = "SHOW ME WHAT YOU'VE GOT-".repeat(10); // teks berulang
  const subText = "GRAPHIC DESIGN-UI/UX-FRONTEND WEB DEVELOPER-".repeat(6);

  useEffect(() => {
    setSwiperReady(true);
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
      <div className="flex flex-col w-full justify-center items-center lg:pt-40 pt-20 lg:pb-20 pb-10 gap-6 px-6 lg:px-28">
        <ScrambleText text="Graphic Design, UI/UX & Front-end Web Developer" className="text-[#808080] text-center tracking-widest" />
        <div className="leading-tight flex flex-col">
          <span className="lg:text-[60px] text-[24px] text-center text-[#272727] font-extrabold uppercase">Designing clean,</span>
          <span className="bg-[#272727] lg:text-[60px] text-[24px] px-2 py-2 lg:h-[70px] h-[40px] flex items-center text-center text-[#F5F4FF] font-extrabold uppercase">responsive, and user-</span>
          <span className="lg:text-[60px] text-[24px] text-center text-[#272727] font-extrabold uppercase">friendly websites.</span>
        </div>
        <button onClick={() => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }} className="px-4 py-2 rounded-sm border-2 border-[#272727] hover:px-6 transition-all duration-300">Let's start a project together</button>
      </div>

    <div className="overflow-hidden w-full lg:py-0 lg:pb-30 pb-10 bg-[#F5F4FF]">
      <div
        ref={marqueeRef}
        data-x="0"
        className="flex flex-col items-center justify-center lg:h-[120px] h-[70px] gap-4 transition-transform duration-75 ease-linear whitespace-nowrap"
      >
        <span className="lg:text-[70px] text-[30px] font-extrabold -tracking-widest lg:leading-10 leading-4 text-transparent stroke-text">
          {repeatedText}
        </span>
        <span className="lg:text-[70px] text-[30px] font-extrabold -tracking-widest lg:leading-10 leading-4 text-[#272727]">
          {subText}
        </span>
      </div>
    </div>

      {/* Project Section */}
      <div className="relative w-full bg-[#272727] py-10 px-4 lg:px-28">
        <span className="text-[#F5F4FF] text-[40px] font-extrabold text-center block mb-10">MY PROJECTS</span>

        {/* Tombol Navigasi */}
        <button ref={prevRef} className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2">
          <AiOutlineLeft size={24} />
        </button>
        <button ref={nextRef} className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2">
          <AiOutlineRight size={24} />
        </button>

        {/* Swiper with custom navigation */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // 👇 diperlukan agar ref berhasil dihubungkan
            // swiper.params.navigation.prevEl = prevRef.current;
            // swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper mt-8"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[500px] overflow-hidden rounded-2xl group cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 lg:grayscale lg:group-hover:grayscale-0" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#272727]/50 via-[#272727]/30 to-[#272727]/0 text-white py-4 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold transition duration-500 translate-y-4 group-hover:translate-y-0">{project.title}</h3>
                  <p className="text-sm">{project.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
