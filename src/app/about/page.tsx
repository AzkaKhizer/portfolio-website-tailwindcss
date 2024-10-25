"use client"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress"; // Adjust the import path as necessary

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-start justify-start min-h-screen bg-white text-gray-900 p-16">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-6 leading-relaxed">
          {`Hello! I'm`} <span className="font-semibold">Azka Khizer</span>, a passionate Full Stack Web Developer with a keen interest in creating scalable, responsive, and visually appealing websites...
        </p>

        <h2 className="text-4xl font-semibold mb-6">My Skills</h2>

        {/* Skills Section with Progress Bars in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-6">
          <div className="space-y-2">
            <p className="text-[20px]">HTML, CSS, JavaScript, TypeScript</p>
            <Progress value={90} className="w-64 bg-gray-500 h-2" />
            <p className="text-sm text-gray-400">90%</p>
          </div>

          <div className="space-y-2">
            <p className="text-[20px]">React, Next.js</p>
            <Progress value={85} className="w-64 bg-gray-500 h-2" />
            <p className="text-sm text-gray-400">85%</p>
          </div>

          <div className="space-y-2">
            <p className="text-[20px]">Tailwind CSS, Bootstrap</p>
            <Progress value={80} className="w-64 bg-gray-500 h-2" />
            <p className="text-sm text-gray-400">80%</p>
          </div>

          <div className="space-y-2">
            <p className="text-[20px]">Git, GitHub</p>
            <Progress value={90} className="w-64 bg-gray-500 h-2" />
            <p className="text-sm text-gray-400">90%</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          I am always excited to learn new technologies and take on new challenges. Feel free to <a href="/contact" className="text-blue-400 hover:text-blue-300">contact me</a> if you’d like to work together or learn more about my work!
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
