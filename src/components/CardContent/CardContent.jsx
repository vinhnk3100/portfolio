import React, { useEffect } from "react";
import "./CardContent.scss";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThanhCongImgLogo from "../../assets/images/thanh-cong-textile-garment-investment-trading-joint-stock-company--600.png";
import NinoImg from "../../assets/images/ninovitgym.png";
import StechImg from "../../assets/images/stechvn.png";
import EBusImg from "../../assets/images/ebus.png";
import STDPortal from "../../assets/images/stdportal.png";
import MorImg from "../../assets/images/mor.png";

export default function Content() {
  useEffect(() => {
    const card1 = document.querySelectorAll(".card-container")[0];
    const card2 = document.querySelectorAll(".card-container")[1];
    const card3 = document.querySelectorAll(".card-container")[2];
    const card4 = document.querySelectorAll(".card-container")[3];
    const card5 = document.querySelectorAll(".card-container")[4];
    const card6 = document.querySelectorAll(".card-container")[5];

    // gsap.set(card5, { width: "20%", yPercent: -19, xPercent: 200 })

    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          ease: "power4.inOut",
          trigger: ".container",
          start: () => "33% 40%",
          end: () => "+=1000px",
          scrub: true,
          onUpdate({ getVelocity }) {
            gsap.fromTo(
              card1,
              {
                skewX: `${getVelocity() / -300}deg`,
              },
              {
                skewX: 0,
              }
            );
            gsap.fromTo(
              card2,
              {
                skewX: `${getVelocity() / 300}deg`,
              },
              {
                skewX: 0,
              }
            );
            gsap.fromTo(
              card3,
              {
                skewX: `${getVelocity() / -300}deg`,
              },
              {
                skewX: 0,
              }
            );
            gsap.fromTo(
              card4,
              {
                skewX: `${getVelocity() / 300}deg`,
              },
              {
                skewX: 0,
              }
            );
            gsap.fromTo(
              card5,
              {
                skewX: `${getVelocity() / -300}deg`,
              },
              {
                skewX: 0,
              }
            );
            gsap.fromTo(
              card6,
              {
                skewX: `${getVelocity() / -300}deg`,
              },
              {
                skewX: 0,
              }
            );
          },
        },
      });

      tl.from(
        card1,
        { overwrite: "auto", x: 400, opacity: 0, scale: 0, force3D: true },
        "0.1"
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
        "0.6"
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
        "1.2"
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
        "1.8"
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
        "2.4"
      );
      tl.to(card5, {
        scale: 1,
        x: 0,
        y: -400,
        autoAlpha: 0,
        ease: Linear.easeInOut,
      });
      // tl.to(card5 , { scale: 1.2  ,ease: Linear.easeInOut })

      tl.from(
        card6,
        { overwrite: "auto", x: 400, opacity: 0, scale: 0, force3D: true },
        "2.4"
      );
      tl.to(card6, {
        scale: 1,
        x: 0,
        y: 0,
        autoAlpha: 0,
        ease: Linear.easeInOut,
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="container">
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
