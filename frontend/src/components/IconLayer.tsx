import React, { useEffect, useState } from "react";
import FloatingIcon from "./FloatingIcon";

interface IconConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  left: string;
  top: string;
  rotate: string;
  transitionDelay?: number;
}

const iconConfigs: IconConfig[] = [
  {
    src: "/Images/Icons/docker.png",
    alt: "Docker Icon",
    width: 60,
    height: 60,
    left: "3%",
    top: "2%",
    rotate: "-20deg",
    transitionDelay: 0,
  },
  {
    src: "/Images/Icons/devops.png",
    alt: "DevOps Icon",
    width: 60,
    height: 60,
    left: "90%",
    top: "10%",
    rotate: "-25deg",
    transitionDelay: 100,
  },
  {
    src: "/Images/Icons/ai-brain.png",
    alt: "AI Icon",
    width: 50,
    height: 50,
    left: "67%",
    top: "30%",
    rotate: "0deg",
    transitionDelay: 200,
  },
  {
    src: "/Images/Icons/job-interview.png",
    alt: "Interview Icon",
    width: 55,
    height: 55,
    left: "9%",
    top: "25%",
    rotate: "10deg",
    transitionDelay: 300,
  },
  {
    src: "/Images/Icons/resume.png",
    alt: "Resume Icon",
    width: 55,
    height: 55,
    left: "49%",
    top: "18%",
    rotate: "10deg",
    transitionDelay: 400,
  },
];

const IconLayer: React.FC = () => {
  const [stackIcons, setStackIcons] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 400; // scroll distance where icons animate out
      setStackIcons(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full lg:h-[100vh] h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Icons behind laptop */}
      <div className="absolute inset-0 z-0">
        {iconConfigs.map((icon, index) => (
          <FloatingIcon
            key={index}
            {...icon}
            stacked={stackIcons}
            style={{
              transitionDelay: `${icon.transitionDelay || 0}ms`,
            }}
          />
        ))}
      </div>

      {/* Laptop image always above */}
      <div className="relative z-10">
        <img
          src="/Images/Sttarkel_Student.png"
          alt="Career Icon"
          width={600}
          height={600}
          className="inline-block mr-10 lg:mx-10 align-middle border-gray-200 border-opacity-60 rounded-xl"
          style={{
            verticalAlign: "middle",
            transform: "translateY(20%)", // ⬅️ keep laptop slightly up
          }}
        />
      </div>
    </div>
  );
  
};

export default IconLayer;
