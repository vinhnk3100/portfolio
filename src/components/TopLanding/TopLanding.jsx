import { useRef } from "react";
import "./TopLanding.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// add plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TopLanding() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from(".introduce-text", { scale: 4 });
      gsap.set(".introduce-text", { scale: 1 });

      tl.to(".introduce-text", {
        scale: 0,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: rootRef.current,
          start: () => "top top",
          end: () => "+=50px",
          scrub: 1,
          toggleActions: "restart restart play restart",
        },
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="container">
      <div className="introduce-text">
        Hey, I'm Vinh - Front end Developer. This is my little corners of my
        projects over year in school of learning and studying & even working. I
        hope you can enjoy watching over it!!
      </div>
    </div>
  );
}
