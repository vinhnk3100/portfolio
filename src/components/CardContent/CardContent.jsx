import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EBusImg from "../../assets/images/ebus.png";
import MorImg from "../../assets/images/mor.png";
import NinoImg from "../../assets/images/ninovitgym.png";
import STDPortal from "../../assets/images/stdportal.png";
import StechImg from "../../assets/images/stechvn.png";
import ThanhCongImgLogo from "../../assets/images/thanh-cong-textile-garment-investment-trading-joint-stock-company--600.png";
import "./CardContent.scss";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Content() {
  useGSAP(
    (_, contextSafe) => {
      const card1 = document.querySelectorAll(".card-container")[0];
      const card2 = document.querySelectorAll(".card-container")[1];
      const card3 = document.querySelectorAll(".card-container")[2];
      const card4 = document.querySelectorAll(".card-container")[3];
      const card5 = document.querySelectorAll(".card-container")[4];
      const card6 = document.querySelectorAll(".card-container")[5];
      const showcaseProject = document.querySelector(".showcase-project");
      const heroContainer = document.querySelector(".hero_container");
      const lastCardsFollowScrollDistance = window.innerHeight * 0.18;

      const lockLastCardsInHero = contextSafe((scrollTrigger) => {
        if (!heroContainer) return;

        const fixedTop = window.innerHeight * 0.25;
        const targetTop =
          (scrollTrigger?.end ?? window.scrollY) +
          fixedTop -
          heroContainer.offsetTop;
        const maxTop = heroContainer.offsetHeight - window.innerHeight * 0.75;
        const top = Math.min(targetTop, maxTop);

        [card5, card6].forEach((card) => {
          gsap.set(card, {
            position: "absolute",
            top,
            bottom: "auto",
          });
        });
      });

      const releaseLastCards = contextSafe(() => {
        gsap.set([card5, card6], {
          clearProps: "position,top,bottom",
        });
      });

      // gsap.set(card5, { width: "20%", yPercent: -19, xPercent: 200 })

      const skewCardsByVelocity = contextSafe(({ getVelocity }) => {
        const velocity = getVelocity();

        gsap.fromTo(
          card1,
          { skewX: `${velocity / -900}deg` },
          { skewX: 0, duration: 0.3, overwrite: "auto" },
        );
        gsap.fromTo(
          card2,
          { skewX: `${velocity / 900}deg` },
          { skewX: 0, duration: 0.3, overwrite: "auto" },
        );
        gsap.fromTo(
          card3,
          { skewX: `${velocity / -900}deg` },
          { skewX: 0, duration: 0.3, overwrite: "auto" },
        );
        gsap.fromTo(
          card4,
          { skewX: `${velocity / 900}deg` },
          { skewX: 0, duration: 0.3, overwrite: "auto" },
        );
        gsap.fromTo(
          card5,
          { skewX: `${velocity / -900}deg` },
          { skewX: 0, duration: 0.3, overwrite: "auto" },
        );
        gsap.fromTo(
          card6,
          { skewX: `${velocity / -900}deg` },
          { skewX: 0, duration: 0.3, overwrite: "auto" },
        );
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          ease: "power4.inOut",
          trigger: showcaseProject,
          start: () => "top+=50px top",
          end: () => "+=800%",
          scrub: true,
          onUpdate: skewCardsByVelocity,
        },
      });

      tl.from(
        card1,
        { overwrite: "auto", x: 400, opacity: 0, scale: 0, force3D: true },
        "0",
      );
      tl.to(card1, {
        scale: 6,
        x: -2000,
        y: -400,
        ease: Linear.easeInOut,
        display: "none",
      });

      tl.from(
        card2,
        { overwrite: "auto", x: -400, opacity: 0, scale: 0, force3D: true },
        "0.6",
      );
      tl.to(card2, {
        scale: 6,
        x: 2000,
        y: 400,
        ease: Linear.easeInOut,
        display: "none",
      });

      tl.from(
        card3,
        { overwrite: "auto", x: 400, opacity: 0, scale: 0, force3D: true },
        "1.2",
      );
      tl.to(card3, {
        scale: 6,
        x: -2000,
        y: -400,
        autoAlpha: 0,
        ease: Linear.easeInOut,
        display: "none",
      });

      tl.from(
        card4,
        { overwrite: "auto", x: -400, opacity: 0, scale: 0, force3D: true },
        "1.8",
      );
      tl.to(card4, {
        scale: 6,
        x: 2000,
        y: 400,
        autoAlpha: 0,
        ease: Linear.easeInOut,
      });
      // tl.to(card4 , { scale: 1.2 ,ease: Linear.easeInOut })

      tl.from(
        card5,
        { overwrite: "auto", x: 400, opacity: 0, scale: 0, force3D: true },
        "2.4",
      );
      tl.from(
        card6,
        { overwrite: "auto", x: -400, opacity: 0, scale: 0, force3D: true },
        "2.4",
      );

      ScrollTrigger.create({
        trigger: showcaseProject,
        start: () => `top+=${50 + window.innerHeight * 8}px top`,
        end: () => `+=${lastCardsFollowScrollDistance}px`,
        onLeave: (self) => lockLastCardsInHero(self),
        onEnterBack: releaseLastCards,
        onRefresh: (self) => {
          if (self.progress === 1) {
            lockLastCardsInHero(self);
          } else {
            releaseLastCards();
          }
        },
      });
    },
    { dependencies: [] },
  );

  return (
    <div className="card-content-container">
      <div className="showcase-project">
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img src={ThanhCongImgLogo} alt="card_img" />
              <p>Thanh Cong Management Tools Project</p>
              <p>October 2023 to July - 2024</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img src={STDPortal} alt="card_img" />
              <p>STD TDTU Portal</p>
              <p>Advanced Web Programming - 2022 (TDTU Courses)</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img src={EBusImg} alt="card_img" />
              <p>Ebus Project</p>
              <p>Information Technology Courses 2 - 2023 (TDTU Courses)</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img src={NinoImg} alt="card_img" />
              <p>Nino App</p>
              <p>Work at Vuong Thanh from Feb - 2021 to Nov - 2021</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img src={StechImg} alt="card_img" />
              <p>STECH Technology & Engineering</p>
              <p>
                Work at STECH Technology & Engineering from Jun 2022 to March -
                2023
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img src={MorImg} alt="card_img" />
              <p>MOR Software</p>
              <p>Work at MOR Sofware June 2023 to June - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
