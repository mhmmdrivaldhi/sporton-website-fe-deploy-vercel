import { FiFastForward } from "react-icons/fi";
import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero-section" className="container mx-auto min-h-screen flex items-center px-4 md:px-0 lg:py-40 py-20">
      <div className="relative w-full">
        <div className="relative md:px-50">
          <Image
            src="/images/img-basketball.png"
            alt="basketball"
            width={220}
            height={220}
            className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grayscale pointer-events-none"
            />
          <div className="text-primary italic bg-[#FF5F3F1C] inline-flex px-5 py-3 rounded-full mt-4">
            Friday Sale, 50%
          </div>
          <h1 className="font-extrabold italic leading-tight text-[42px] md:text-[95px] bg-gradient-to-b from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br />
            TOP-QUALITY <br />
            SPORTSWEAR
          </h1>
          <p className="mt-6 md:mt-10 leading-loose text-sm md:text-base md:w-1/2">
            Engineered for endurance and designed for speed. Experience gear that
            moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="mt-10 md:mt-14 grid grid-cols-2 gap-4 md:flex md:gap-5">
            <Button>
              Explore More <FiFastForward />
            </Button>

            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon play video"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
        <div className="md:hidden mt-5 flex justify-center">
          <Image
            src="/images/img-hero.png"
            alt="image sporton hero"
            width={300}
            height={420}
          />
        </div>
        <Image
          src="/images/img-basketball.png"
          alt="basketball"
          width={432}
          height={432}
          className="hidden md:block grayscale absolute left-12 -top-12"
        />
        <Image
          src="/images/img-hero.png"
          alt="image sporton hero"
          width={700}
          height={950}
          className="hidden md:block absolute right-15 top-[300px] -translate-y-1/2"
        />
        <Image
          src="/images/img-ornament-hero.png"
          alt="image ornament hero"
          width={420}
          height={420}
          className="hidden md:block absolute -right-55 top-[300px] -translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default HeroSection;