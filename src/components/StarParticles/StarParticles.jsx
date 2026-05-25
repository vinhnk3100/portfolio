import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import "./StarParticles.scss";

const PARTICLES_ID = "portfolio-star-particles";

export default function StarParticles() {
  useEffect(() => {
    let container;
    let cancelled = false;

    const initParticles = async () => {
      await loadSlim(tsParticles);

      if (cancelled) return;

      const element = document.getElementById(PARTICLES_ID);

      if (!element) return;

      container = await tsParticles.load({
        id: PARTICLES_ID,
        element,
        options: {
          fullScreen: {
            enable: false,
          },
          autoPlay: true,
          detectRetina: true,
          pauseOnBlur: false,
          pauseOnOutsideViewport: false,
          smooth: true,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              repulse: {
                distance: 120,
                duration: 0.45,
                factor: 80,
                speed: 0.7,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#9ed8ff", "#fff1a8"],
            },
            links: {
              enable: false,
            },
            move: {
              enable: true,
              direction: "none",
              drift: {
                min: -0.35,
                max: 0.35,
              },
              random: true,
              speed: {
                min: 0.75,
                max: 1.25,
              },
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              value: 150,
              density: {
                enable: true,
                area: 650,
              },
            },
            opacity: {
              value: {
                min: 0.48,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 0.45,
                sync: false,
                startValue: "random",
              },
            },
            shadow: {
              enable: true,
              color: "#9ed8ff",
              blur: 16,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: {
                min: 1.4,
                max: 4.2,
              },
              animation: {
                enable: true,
                speed: 0.9,
                sync: false,
                startValue: "random",
              },
            },
          },
        },
      });
    };

    initParticles();

    return () => {
      cancelled = true;
      container?.destroy();
    };
  }, []);

  return <div id={PARTICLES_ID} className="star-particles" />;
}
