import React, { useState, useEffect } from 'react';

const SolarSystem = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate scale factor based on screen size
  const getScaleFactor = () => {
    const baseWidth = 1200;
    const baseHeight = 800;
    const scaleX = screenSize.width / baseWidth;
    const scaleY = screenSize.height / baseHeight;
    return Math.min(scaleX, scaleY, 1.2); // Cap at 1.2x for very large screens
  };

  const scaleFactor = getScaleFactor();
  const isMobile = screenSize.width < 768;
  const isTablet = screenSize.width >= 768 && screenSize.width < 1024;

  const planets = [
    { name: 'Mercury', size: 4 * scaleFactor, distance: 60 * scaleFactor, speed: 4.8, color: '#8C7853', moons: [] },
    { name: 'Venus', size: 6 * scaleFactor, distance: 80 * scaleFactor, speed: 3.5, color: '#FFC649', moons: [] },
    { name: 'Earth', size: 6 * scaleFactor, distance: 100 * scaleFactor, speed: 3.0, color: '#6B93D6', moons: [{ name: 'Moon', size: 2 * scaleFactor, distance: 12 * scaleFactor, speed: 8 }] },
    { name: 'Mars', size: 5 * scaleFactor, distance: 120 * scaleFactor, speed: 2.4, color: '#CD5C5C', moons: [{ name: 'Phobos', size: 1 * scaleFactor, distance: 8 * scaleFactor, speed: 12 }, { name: 'Deimos', size: 1 * scaleFactor, distance: 12 * scaleFactor, speed: 8 }] },
    { name: 'Jupiter', size: 18 * scaleFactor, distance: 150 * scaleFactor, speed: 1.3, color: '#D8CA9D', moons: [{ name: 'Io', size: 2 * scaleFactor, distance: 25 * scaleFactor, speed: 6 }, { name: 'Europa', size: 2 * scaleFactor, distance: 30 * scaleFactor, speed: 5 }, { name: 'Ganymede', size: 2.5 * scaleFactor, distance: 35 * scaleFactor, speed: 4 }, { name: 'Callisto', size: 2 * scaleFactor, distance: 40 * scaleFactor, speed: 3 }] },
    { name: 'Saturn', size: 15 * scaleFactor, distance: 180 * scaleFactor, speed: 1.0, color: '#FAD5A5', moons: [{ name: 'Titan', size: 2.5 * scaleFactor, distance: 28 * scaleFactor, speed: 5 }, { name: 'Enceladus', size: 1.5 * scaleFactor, distance: 22 * scaleFactor, speed: 7 }] },
    { name: 'Uranus', size: 10 * scaleFactor, distance: 210 * scaleFactor, speed: 0.7, color: '#4FD0E7', moons: [{ name: 'Titania', size: 1.5 * scaleFactor, distance: 18 * scaleFactor, speed: 6 }] },
    { name: 'Neptune', size: 10 * scaleFactor, distance: 240 * scaleFactor, speed: 0.5, color: '#4B70DD', moons: [{ name: 'Triton', size: 2 * scaleFactor, distance: 20 * scaleFactor, speed: 5 }] }
  ];

  // Filter planets for mobile to avoid overcrowding
  const visiblePlanets = isMobile ? planets.slice(0, 6) : planets;

  const sunSize = 40 * scaleFactor;
  const containerWidth = isMobile ? screenSize.width * 0.9 : isTablet ? screenSize.width * 0.85 : Math.min(600 * scaleFactor, screenSize.width * 0.8);
  const containerHeight = isMobile ? screenSize.height * 0.7 : isTablet ? screenSize.height * 0.75 : Math.min(400 * scaleFactor, screenSize.height * 0.8);

  return (
    <div className="lg:w-[70vh] lg:min-h-[70vh] border-2 border-amber-200 bg-black overflow-hidden relative flex items-center  justify-center  w-[65%] h-[20%] ">
      {/* Stars background */}
      {/* <div className="absolute inset-0">
        {[...Array(isMobile ? 100 : 200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div> */}

      {/* Solar system container */}
      <div 
        className="relative " 
        style={{ 
          width: containerWidth + 'px', 
          height: containerHeight + 'px',
          minWidth: '300px',
          minHeight: '200px'
        }}
      >
        {/* Sun */}
        <div 
          className="absolute bg-yellow-400 rounded-full shadow-lg"
          style={{
            width: sunSize + 'px',
            height: sunSize + 'px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${sunSize}px #FFA500, 0 0 ${sunSize * 1.5}px #FFA500, 0 0 ${sunSize * 2}px #FF8C00`,
            animation: 'pulse 2s infinite alternate'
          }}
        />

        {/* Orbital paths */}
        {visiblePlanets.map((planet) => (
          <div
            key={`orbit-${planet.name}`}
            className="absolute border border-gray-600 border-opacity-30 rounded-full"
            style={{
              width: planet.distance * 2 + 'px',
              height: planet.distance * 2 + 'px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}

        {/* Planets */}
        {visiblePlanets.map((planet) => (
          <div
            key={planet.name}
            className="absolute"
            style={{
              width: planet.distance * 2 + 'px',
              height: planet.distance * 2 + 'px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `orbit-${planet.name} ${30 / planet.speed}s infinite linear`
            }}
          >
            <div
              className="absolute rounded-full shadow-md cursor-pointer hover:brightness-110 transition-all duration-300"
              style={{
                width: planet.size + 'px',
                height: planet.size + 'px',
                backgroundColor: planet.color,
                left: '100%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 ${planet.size}px ${planet.color}40`,
                minWidth: '4px',
                minHeight: '4px'
              }}
              title={planet.name}
            />
            
            {/* Planet's moons */}
            {planet.moons.map((moon) => (
              <div
                key={`${planet.name}-${moon.name}`}
                className="absolute"
                style={{
                  width: moon.distance * 2 + 'px',
                  height: moon.distance * 2 + 'px',
                  left: '100%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `moon-orbit-${planet.name}-${moon.name} ${10 / moon.speed}s infinite linear`
                }}
              >
                <div
                  className="absolute rounded-full bg-gray-300 shadow-sm"
                  style={{
                    width: Math.max(moon.size, 2) + 'px',
                    height: Math.max(moon.size, 2) + 'px',
                    left: '100%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 2px rgba(255, 255, 255, 0.5)',
                    minWidth: '2px',
                    minHeight: '2px'
                  }}
                  title={moon.name}
                />
              </div>
            ))}
            
            {/* Saturn's rings */}
            {planet.name === 'Saturn' && (
              <>
                <div
                  className="absolute"
                  style={{
                    width: planet.size + 16 * scaleFactor + 'px',
                    height: (planet.size + 16 * scaleFactor) * 0.25 + 'px',
                    left: '100%',
                    top: '50%',
                    transform: 'translate(-50%, -50%) scaleX(1.2) scaleY(0.6) rotate(-8deg)',
                    borderRadius: '50%',
                    border: '1px solid rgba(220, 220, 220, 0.9)',
                    background: 'linear-gradient(to bottom, rgba(220, 220, 220, 0.3), rgba(180, 180, 180, 0.2), rgba(220, 220, 220, 0.3))'
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    width: planet.size + 12 * scaleFactor + 'px',
                    height: (planet.size + 12 * scaleFactor) * 0.22 + 'px',
                    left: '100%',
                    top: '50%',
                    transform: 'translate(-50%, -50%) scaleX(1.2) scaleY(0.6) rotate(-8deg)',
                    borderRadius: '50%',
                    border: '1px solid rgba(200, 200, 200, 0.7)',
                    background: 'linear-gradient(to bottom, rgba(200, 200, 200, 0.2), rgba(160, 160, 160, 0.15), rgba(200, 200, 200, 0.2))'
                  }}
                />
                <div
                  className="absolute"
                  style={{
                    width: planet.size + 8 * scaleFactor + 'px',
                    height: (planet.size + 8 * scaleFactor) * 0.2 + 'px',
                    left: '100%',
                    top: '50%',
                    transform: 'translate(-50%, -50%) scaleX(1.2) scaleY(0.6) rotate(-8deg)',
                    borderRadius: '50%',
                    border: '1px solid rgba(180, 180, 180, 0.5)',
                    background: 'linear-gradient(to bottom, rgba(180, 180, 180, 0.15), rgba(140, 140, 140, 0.1), rgba(180, 180, 180, 0.15))'
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Planet labels - responsive positioning
      <div className={`absolute text-white ${isMobile ? 'top-2 left-2' : 'top-4 left-4'}`}>
        <h1 className={`font-bold mb-2 ${isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'}`}>
          Solar System
        </h1>
        <div className={`space-y-1 ${isMobile ? 'text-xs' : 'text-sm'}`}>
          {visiblePlanets.map((planet) => (
            <div key={planet.name} className="flex items-center space-x-2">
              <div
                className={`rounded-full ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}`}
                style={{ backgroundColor: planet.color }}
              />
              <span>{planet.name}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Mobile info */}
      {isMobile && (
        <div className="absolute bottom-2 left-2 right-2 text-white text-xs text-center opacity-75">
         
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        ${visiblePlanets.map(planet => `
          @keyframes orbit-${planet.name} {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `).join('\n')}
        
        ${visiblePlanets.map(planet => 
          planet.moons.map(moon => `
            @keyframes moon-orbit-${planet.name}-${moon.name} {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
          `).join('\n')
        ).join('\n')}
      `}</style>
    </div>
  );
};

export default SolarSystem;