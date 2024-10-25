// components/Hero.tsx

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center lg:pl-28 sm:pb-4  justify-start h-screen bg-gray-900 text-white">
      <div className="text-left p-4 pl-16"> 
        <h2 className="text-2xl font-semibold mb-4">Hello,</h2>
        <h1 className="text-5xl font-bold mb-4">{`I'm Azka Khizer`}</h1>
        <p className="text-lg mb-8">
          Full Stack Web Developer
        </p>
        <Button variant="outline" className="px-6 py-3 mr-4 text-lg hover:text-gray-900 hover:bg-slate-500 sm:mb-3">
          Get Started
        </Button>
        <Button
            variant="default" // Change to your preferred variant
            className="px-6 py-3 text-lg bg-gray-800 hover:bg-slate-500"
          >
            Learn More
          </Button>
      </div>
      <div className=" lg:pl-72 lg:mb-0 lg:pb-10 ">
        <Image src="/my-image.png" alt="my-image" width={500} height={400}/>
      </div>
    </section>
  );
};

export default Hero;
