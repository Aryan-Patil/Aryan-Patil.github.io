import React from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
export default function Allbackground() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
    <Particles 
    id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
            particles: {
              number: {
                value: 10,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#9ca2ca"
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 0,
                  color: "#000"
                },
                polygon: {
                  nb_sides: 7
                },
                image: {
                  src: "img/github.svg",
                  width: 50,
                  height: 50
                }
              },
              opacity: {
                value: 0.18439183264436929,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 100,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 40,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 2
              },
              move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse"
                },
                onclick: {
                  enable: false,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          
      }}
    >
    </Particles>
  )
}
