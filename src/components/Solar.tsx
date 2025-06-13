import React from 'react';

const SolarSystem = () => {
  const planets = [
    { name: 'Mercury', size: 4, distance: 60, speed: 4.8, color: '#8C7853', moons: [] },
    { name: 'Venus', size: 6, distance: 80, speed: 3.5, color: '#FFC649', moons: [] },
    { name: 'Earth', size: 6, distance: 100, speed: 3.0, color: '#6B93D6', moons: [{ name: 'Moon', size: 2, distance: 12, speed: 8 }] },
    { name: 'Mars', size: 5, distance: 120, speed: 2.4, color: '#CD5C5C', moons: [{ name: 'Phobos', size: 1, distance: 8, speed: 12 }, { name: 'Deimos', size: 1, distance: 12, speed: 8 }] },
    { name: 'Jupiter', size: 18, distance: 150, speed: 1.3, color: '#D8CA9D', moons: [{ name: 'Io', size: 2, distance: 25, speed: 6 }, { name: 'Europa', size: 2, distance: 30, speed: 5 }, { name: 'Ganymede', size: 2.5, distance: 35, speed: 4 }, { name: 'Callisto', size: 2, distance: 40, speed: 3 }] },
    { name: 'Saturn', size: 15, distance: 180, speed: 1.0, color: '#FAD5A5', moons: [{ name: 'Titan', size: 2.5, distance: 28, speed: 5 }, { name: 'Enceladus', size: 1.5, distance: 22, speed: 7 }] },
    { name: 'Uranus', size: 10, distance: 210, speed: 0.7, color: '#4FD0E7', moons: [{ name: 'Titania', size: 1.5, distance: 18, speed: 6 }] },
    { name: 'Neptune', size: 10, distance: 240, speed: 0.5, color: '#4B70DD', moons: [{ name: 'Triton', size: 2, distance: 20, speed: 5 }] }
  ];

  return (
    <div className="w-full h-[85vh] bg-black overflow-hidden relative flex items-center justify-center">
      {/* Stars background */}
      {/* <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
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
      <div className="relative mt-[120px] mr[30px]" style={{ width: '600px', height: '400px'  }}>
        {/* Sun */}
        <div 
          className="absolute bg-yellow-400 rounded-full shadow-lg"
          style={{
            width: '40px',
            height: '40px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 40px #FFA500, 0 0 60px #FFA500, 0 0 80px #FF8C00',
            animation: 'pulse 2s infinite alternate'
          }}
        />

        {/* Orbital paths */}
        {planets.map((planet) => (
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
        {planets.map((planet) => (
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
              className="absolute rounded-full shadow-md"
              style={{
                width: planet.size + 'px',
                height: planet.size + 'px',
                backgroundColor: planet.color,
                left: '100%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 ${planet.size}px ${planet.color}40`
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
                    width: moon.size + 'px',
                    height: moon.size + 'px',
                    left: '100%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 2px rgba(255, 255, 255, 0.5)'
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
                    width: planet.size + 16 + 'px',
                    height: (planet.size + 16) * 0.25 + 'px',
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
                    width: planet.size + 12 + 'px',
                    height: (planet.size + 12) * 0.22 + 'px',
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
                    width: planet.size + 8 + 'px',
                    height: (planet.size + 8) * 0.2 + 'px',
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

      {/* Planet labels */}
      {/* <div className="absolute top-4 left-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Solar System</h1>
        <div className="space-y-1 text-sm">
          {planets.map((planet) => (
            <div key={planet.name} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: planet.color }}
              />
              <span>{planet.name}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* CSS Animations */}
      <style > {`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        ${planets.map(planet => `
          @keyframes orbit-${planet.name} {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `).join('\n')}
        
        ${planets.map(planet => 
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