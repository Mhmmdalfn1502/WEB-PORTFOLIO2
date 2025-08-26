"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ScrambleText from "@/components/ScrambleText";
import Link from "next/link";
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
        const newX = currentX + direction * 4; // atur kecepatan di sini
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
    {
      title: "Meranto",
      desc: "An AI-based application that helps travelers discover the best destinations easily and quickly.",
      image: "meranto2.png",
    },
    {
      title: "Intellect.ai",
      desc: "An AI-powered platform designed to simplify learning and provide easy access to educational content.",
      image: "intellect.png",
    },
    {
      title: "Hand Recognition",
      desc: "A system for detecting and classifying Indonesian Sign Language (BISINDO) using AI models.",
      image: "signlanguage.png",
    },
    {
      title: "Hotel Reservation",
      desc: "A hotel booking website with search, filter, and user-friendly reservation features.",
      image: "hotel.png",
    },
    {
      title: "Info-Kuliner",
      desc: "A culinary information app featuring popular food recommendations and nearby restaurant locations.",
      image: "Info-Kuliner2.png",
    },
  ];

  // DKV Section

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 220, // 200px image + 20px gap
          behavior: "smooth",
        });

        // Jika sudah hampir di akhir, scroll balik ke awal
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        <button
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="px-4 py-2 rounded-sm border-2 border-[#272727] hover:px-6 transition-all duration-300"
        >
          Let's start a project together
        </button>
      </div>

      {/* Project Section */}
      <div className="relative w-full bg-[#272727] py-10 px-4 lg:px-28 z-10">
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
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#272727]/50 via-[#272727]/30 to-[#272727]/0 text-white py-4 px-4 text-center
  opacity-100 lg:opacity-0 lg:group-hover:opacity-100
  transition-opacity duration-500"
                >
                  <span className="text-lg font-semibold transition duration-500 translate-y-4 group-hover:translate-y-0">{project.title}</span>
                  <p className="text-sm">{project.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative w-full h-[180px] lg:h-[300px] lg:my-40 my-10 bg-[#F5F4FF] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center rotate-5 z-10" ref={marqueeRef}>
          <div className="flex flex-col items-center justify-center whitespace-nowrap lg:leading-18 leading-6">
            <span className="lg:text-[90px] text-[30px] font-extrabold -tracking-widest text-[#F5F4FF] stroke-text">{repeatedText}</span>
            <span className="lg:text-[90px] text-[30px] font-extrabold -tracking-widest text-[#272727]">{subText}</span>
          </div>
        </div>

        {/* Teks kedua - miring ke kiri */}
        {/* <div className="absolute inset-0 flex items-center justify-center -rotate-5 z-0 opacity-70" ref={marqueeRef}>
          <div className="flex flex-col items-center justify-center whitespace-nowrap lg:leading-18 leading-6">
            <span className="lg:text-[90px] text-[30px] font-extrabold -tracking-widest text-transparent stroke-text">{repeatedText}</span>
            <span className="lg:text-[90px] text-[30px] font-extrabold -tracking-widest text-[#272727]">{subText}</span>
          </div>
        </div> */}
      </div>

      <div className="flex w-full lg:flex-row flex-col gap-6 items-center justify-between lg:px-28 px-6 pb-4 lg:pb-30">
        <div className="flex flex-col lg:w-[40%] gap-2 lg:items-start items-center">
          <span className="font-medium tracking-[10px] text-[16px] text-[#808080] text-center">VISUAL COMMUNICATION</span>
          <span className="font-extrabold -tracking-widest text-[30px] lg:text-start text-center text-[#272727] uppercase">Planning an Event? Let Me Handle the Design!</span>
          <div className="flex flex-col">
            <span className="font-medium tracking-widest text-[16px] lg:text-start text-center text-[#272727]">Organizing an event and need eye-catching visuals?</span>
            <span className="font-medium text-[16px] lg:text-start text-center text-[#272727]">
              From logos to posters to invitation cards — I’ve got you covered. You can stay focused on the event itself, and I’ll take care of the design side!
            </span>
          </div>
        </div>

        <div className="overflow-hidden lg:w-[60%] w-full" ref={ref}>
          <div className="flex gap-4 overflow-x-auto scroll-smooth max-w-full px-4 py-6 no-scrollbar">
            {["GoalsPoster.png", "LookUpPoster.png", "EnjoyTheWorldPoster.png", "JamesPoster.png", "RBYPoster.png", "RBY2FLYER.png", "HarvestPoster.png", "Illustrator.png"].map((src, index) => (
              <motion.img
                key={index}
                src={`dkv/${src}`}
                alt=""
                className="w-[160px] sm:w-[180px] md:w-[200px] flex-shrink-0 hover:scale-110 hover:shadow-xl transition-all duration-700 rounded-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 lg:py-10 px-4 lg:px-22">
        <Link href="/works/graphic/FanStore">
          <div className="">
            <img className="w-full h-[250px] lg:h-[300px] object-cover" src="/DGraphic/FanStore/Slide16.png" alt="" />
          </div>
        </Link>
        <Link href="/works/graphic/Antuisi">
          <div className="">
            <img className="w-full h-[250px] lg:h-[300px] object-cover" src="/DGraphic/AntuisiStudio/Compro-01.png" alt="" />
          </div>
        </Link>
        <Link href="/works/graphic/InfoKuliner">
          <div className="">
            <img className="w-full h-[250px] lg:h-[300px] object-cover" src="/DGraphic/InfoKuliner/Slide1.png" alt="" />
          </div>
        </Link>
        <Link href="/works/graphic/HotelReservation">
          <div className="">
            <img className="w-full h-[250px] lg:h-[300px] object-cover" src="/DGraphic/HotelReservation/Header.png" alt="" />
          </div>
        </Link>
        <Link href="/works/graphic/Meranto">
          <div className="">
            <img className="w-full h-[250px] lg:h-[300px] object-cover" src="/DGraphic/Meranto/Slide7.png" alt="" />
          </div>
        </Link>
        <Link href="/works/graphic/Sony">
          <div className="">
            <img className="w-full h-[250px] lg:h-[300px] object-cover" src="/DGraphic/Sony/Header.png" alt="" />
          </div>
        </Link>
      </div>
    </main>
  );
}
