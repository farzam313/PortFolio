import React, { useState, useEffect } from "react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiNextdotjs,
} from "react-icons/si";

const TechStackSolarSystem = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScaleFactor = () => {
    const baseWidth = 1200;
    const baseHeight = 800;
    const scaleX = screenSize.width / baseWidth;
    const scaleY = screenSize.height / baseHeight;
    return Math.min(scaleX, scaleY, 1.2);
  };

  const scaleFactor = getScaleFactor();
  const isMobile = screenSize.width < 768;
  const isTablet = screenSize.width >= 768 && screenSize.width < 1024;

  const techPlanets = [
    {
      name: "React",
      icon: SiReact,
      size: 28,
      distance: 60,
      speed: 4.8,
      color: "#61DAFB",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      size: 24,
      distance: 80,
      speed: 3.5,
      color: "#06B6D4",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      size: 26,
      distance: 100,
      speed: 3.0,
      color: "#339933",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      size: 24,
      distance: 120,
      speed: 2.4,
      color: "#ffffff",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      size: 26,
      distance: 240,
      speed: 0.5,
      color: "#ffffff",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      size: 28,
      distance: 150,
      speed: 1.3,
      color: "#47A248",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      size: 32,
      distance: 180,
      speed: 1.0,
      color: "#4479A1",
    },
    {
      name: "Git",
      icon: SiGit,
      size: 28,
      distance: 210,
      speed: 0.7,
      color: "#F05032",
    },
  ];

  const scaledPlanets = techPlanets.map((planet) => ({
    ...planet,
    size: planet.size * scaleFactor,
    distance: planet.distance * scaleFactor,
  }));

  const visiblePlanets = isMobile ? scaledPlanets.slice(0, 8) : scaledPlanets;

  const sunSize = 50 * scaleFactor;
  const containerWidth = isMobile
    ? screenSize.width * 0.9
    : isTablet
    ? screenSize.width * 0.85
    : Math.min(600 * scaleFactor, screenSize.width * 0.8);
  const containerHeight = isMobile
    ? screenSize.height * 0.7
    : isTablet
    ? screenSize.height * 0.75
    : Math.min(400 * scaleFactor, screenSize.height * 0.8);

  return (
    <div className="lg:w-[70vh] lg:min-h-[70vh] mb-15 bg-black overflow-hidden relative flex items-center justify-center w-[63%] h-[35%] lg:pt-15 rounded-xl shadow-lg">
      <div
        className="relative"
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
          minWidth: "300px",
          minHeight: "200px",
        }}
      >
        {/* Sun */}
        <div
          className="absolute bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg flex items-center justify-center text-black font-bold"
          style={{
            width: `${sunSize}px`,
            height: `${sunSize}px`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 ${sunSize}px #FFA500, 0 0 ${
              sunSize * 1.5
            }px #FFA500, 0 0 ${sunSize * 2}px #FF8C00`,
            animation: "pulse 2s infinite alternate",
            fontSize: `${12 * scaleFactor}px`,
          }}
          title="JavaScript Core"
        >
          <SiJavascript
            size={28 * scaleFactor}
            color="#F7DF1E"
            style={{ filter: "drop-shadow(0 0 4px #F7DF1E)" }}
          />
        </div>

        {/* Orbits */}
        {visiblePlanets.map((planet) => (
          <div
            key={`orbit-${planet.name}`}
            className="absolute border-1 border-gray-500 border-opacity-20 rounded-full"
            style={{
              width: `${planet.distance * 2}px`,
              height: `${planet.distance * 2}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Planets */}
        {visiblePlanets.map((planet) => (
          <div
            key={planet.name}
            className="absolute"
            style={{
              width: `${planet.distance * 2}px`,
              height: `${planet.distance * 2}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              animation: `orbit-${planet.name.replace(/[^a-zA-Z0-9]/g, "")} ${
                30 / planet.speed
              }s linear infinite`,
            }}
          >
            <div
              className="absolute cursor-pointer hover:brightness-125 hover:scale-110 transition-all duration-300 flex items-center justify-center"
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                left: "100%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              title={planet.name}
            >
              <planet.icon
                size={planet.size}
                color={planet.color}
                style={{ filter: "drop-shadow(0 0 4px currentColor)" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Orbit animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.1); }
        }

        ${visiblePlanets
          .map(
            (planet) => `
          @keyframes orbit-${planet.name.replace(/[^a-zA-Z0-9]/g, "")} {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `
          )
          .join("\n")}
      `}</style>
    </div>
  );
};

export default TechStackSolarSystem;
