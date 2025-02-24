import React, { useEffect } from "react";
import "./TopLanding.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// add plugins
gsap.registerPlugin(ScrollTrigger);

export default function TopLanding() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(".introduce-text", { scale: 4 });
      gsap.set(".introduce-text", { scale: 1 });

      tl.to(".introduce-text", {
        scale: 0,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".container",
          start: () => "top top",
          end: () => "+=50px",
          scrub: 1,
          toggleActions: "restart restart play restart",
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="container">
      <div className="introduce-text">
        Hey, I'm Vinh - Front end Developer. This is my little corners of my
        projects over year in school of learning and studying & even working. I
        hope you can enjoy watching over it!!
      </div>
    </div>
  );
}
