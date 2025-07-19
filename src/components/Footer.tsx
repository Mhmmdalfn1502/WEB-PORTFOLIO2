"use client";

import ScrambleText from "@/components/ScrambleText";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
const [isSending, setIsSending] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // mencegah submit default agar kita bisa kontrol sendiri
  setIsSending(true);

  const form = e.currentTarget;

  // Lanjutkan submit otomatis setelah delay animasi
  setTimeout(() => {
    form.submit();     // submit form ke Formspree
    form.reset();      // kosongkan input form
    setIsSending(false); // reset tombol ke kondisi awal (opsional)
  }, 2000); // delay 2 detik untuk animasi pesawat
};

  

  return (
    <footer className="bg-[#F5F4FF] ">
      <div className="marquee-wrapper">
        <span className="marquee-content lg:text-[128px] text-[82px] text-[#272727] font-extrabold">HELLO! HELLO! HELLO! HELLO! HELLO! HELLO!</span>
      </div>
      <div className="lg:px-23 px-4 lg:py-10 py-4 text-center lg:text-right border-t-1 border-b-1 border-[#272727]">
        <span className="lg:text-[40px] text-[24px] text-[#272727] font-extrabold">Need a creative partner in front-end web developer or a UI/UX designer? Let's build something great together</span>
      </div>

      <div className="flex lg:flex-row flex-col justify-between lg:py-10 py-4 lg:px-23 px-4">
        <div id="contact" className="flex lg:flex-row flex-col justify-between lg:w-[50%] w-full">
          <form action="https://formspree.io/f/xldlepnr" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mx-auto">
            <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded" />
            <textarea name="message" placeholder="Message" required className="p-2 border rounded" rows={5}></textarea>

            <button type="submit" disabled={isSending} className="flex flex-row bg-[#272727] items-center justify-center text-white py-2 rounded relative overflow-hidden h-11">
              {/* Teks "Send Message" */}
              <span className={`absolute left-0 right-0 text-center transition-all duration-500 ${isSending ? "opacity-0 translate-y-2" : "opacity-100"}`}>Send Message</span>

              {/* Icon Pesawat */}
              <FaPaperPlane className={`absolute text-white left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${isSending ? "opacity-100 animate-plane-fly" : "opacity-0"}`} size={20} />
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between gap-10 lg:items-end items-center lg:pt-0 pt-10">
          <div className="nav flex flex-row lg:gap-10 gap-4 items-center">
            <a className="text-[16px] text-[#272727] tracking-wider border-b-2 border-[#F5F4FF] hover:border-b-2 transition-all duration-300  hover:border-[#272727]" href="/">
              HOME
            </a>
            <a className="text-[16px] text-[#272727] tracking-wider border-b-2 border-[#F5F4FF] hover:border-b-2 transition-all duration-300  hover:border-[#272727]" href="/aboutme">
              ABOUT ME
            </a>
            <a className="text-[16px] text-[#272727] tracking-wider border-b-2 border-[#F5F4FF] hover:border-b-2 transition-all duration-300  hover:border-[#272727]" href="/works">
              WORKS
            </a>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 lg:items-end items-center">
              <span className="text-[16px] text-[#F5F4FF] w-[276px] px-2 tracking-wider bg-[#272727]">Chase the vision with me.</span>
              <span className="text-[16px] text-[#272727] tracking-wider font-bold">Follow me.</span>
              <div className="flex flex-row gap-2 items-center">
                <a href="https://www.instagram.com/mhmmdalfn_1502/">
                  <ScrambleText text="Instagram" className="text-[16px] text-[#272727] tracking-wider hover:text-black" />
                </a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/muhammad-alfan1502/">
                  <ScrambleText text="Linkedin" className="text-[16px] text-[#272727] tracking-wider hover:text-black" />
                </a>
                <span>|</span>
                <a href="https://github.com/Mhmmdalfn1502">
                  <ScrambleText text="Github" className="text-[16px] text-[#272727] tracking-wider hover:text-black" />
                </a>
                {/* <span>|</span> */}
                {/* <a href="#">
                  <ScrambleText text="X" className="text-[16px] text-[#272727] tracking-wider hover:text-black" />
                </a> */}
              </div>
            </div>
            <span className="lg:text-[16px] text-[10px] lg:text-end text-center text-[#272727] tracking-wider">©2025 Muhammad Alfan. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
