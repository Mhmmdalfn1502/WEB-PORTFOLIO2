export default function Footer() {
  return (
    <footer className="bg-[#F5F4FF] ">
      <div className="marquee-wrapper">
        <span className="marquee-content lg:text-[128px] text-[82px] text-[#272727] font-extrabold">HELLO! HELLO! HELLO! HELLO! HELLO! HELLO!</span>
      </div>
      <div className="lg:px-23 px-4 lg:py-10 py-4 text-right border-t-1 border-b-1 border-[#272727]">
        <span className="lg:text-[40px] text-[24px] text-[#272727] font-extrabold">Need a creative partner in front-end web developer or a UI/UX designer? Let's build something great together</span>
      </div>
      <div className="lg:py-10 py-4 lg:px-23 px-4">
        <div className="nav flex flex-row lg:gap-10 gap-4 items-center">
          <a className="text-[16px] text-[#272727] tracking-wider border-b-2 border-[#F5F4FF] hover:border-b-2  hover:border-[#272727]" href="">
            HOME
          </a>
          <a className="text-[16px] text-[#272727] tracking-wider border-b-2 border-[#F5F4FF] hover:border-b-2  hover:border-[#272727]" href="/aboutme">
            ABOUT ME
          </a>
          <a className="text-[16px] text-[#272727] tracking-wider border-b-2 border-[#F5F4FF] hover:border-b-2  hover:border-[#272727]" href="/works">
            WORKS
          </a>
          <a className="text-[16px] text-[#272727] tracking-wider border-b-2 border-[#F5F4FF] hover:border-b-2  hover:border-[#272727]" href="">
            CONTACT
          </a>
        </div>
        <div className="flex lg:flex-row flex-col justify-between lg:items-end lg:mt-20 mt-10 lg:gap-0 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[16px] text-[#F5F4FF] w-[276px] px-2 tracking-wider bg-[#272727]">Chase the vision with me.</span>
            <span className="text-[16px] text-[#272727] tracking-wider font-bold">Follow me.</span>
            <div className="flex flex-row gap-2 items-center">
              <a className="text-[16px] text-[#272727] tracking-wider" href="https://www.instagram.com/mhmmdalfn_1502/">
                Instagram
              </a>
              <span>|</span>
              <a className="text-[16px] text-[#272727] tracking-wider" href="https://www.linkedin.com/in/muhammad-alfan1502/">
                Linkedin
              </a>
              <span>|</span>
              <a className="text-[16px] text-[#272727] tracking-wider" href="https://github.com/Mhmmdalfn1502">
                Github
              </a>
              <span>|</span>
              <a className="text-[16px] text-[#272727] tracking-wider" href="">
                X
              </a>
            </div>
          </div>
          <span className="lg:text-[16px] text-[10px] text-center text-[#272727] tracking-wider">©2025 Muhammad Alfan. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
