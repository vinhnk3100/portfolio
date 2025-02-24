import "./Content.scss";
import { ContentCard } from "../../constants/ContentCards";
import CV from "../../assets/cv/FE_ReactJS_NguyenKhanhVinh.pdf";
import AvatarImg from "../../assets/images/z6346871925903_a9ea19d6fc582fbdfef06b77767ab7be.jpg";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

export default function Content() {
  return (
    <div className="content_container">
      {/* Outer parallax container */}
      <div>
        <MouseParallaxContainer
          className="about_me-outer-parallax-container"
          globalFactorX={0.2}
          globalFactorY={0.2}
          inverted
          resetOnLeave
        >
          <MouseParallaxChild
            className="outer_parallax-child"
            factorX={0.6}
            factorY={0.5}
          >
            {/* Inner parallax container */}
            <MouseParallaxContainer
              className="inner_parallax-container"
              globalFactorX={0.6}
              globalFactorY={0.5}
              resetOnLeave
            >
              <MouseParallaxChild
                inverted
                factorX={0.1}
                factorY={0.1}
                className="inner_parallax-img-container"
              >
                <a href={CV} download title="Click to download my Resume">
                  <img src={AvatarImg} alt="avatar" />
                </a>
              </MouseParallaxChild>
            </MouseParallaxContainer>
            <span>About me (My resume)</span>
            {/* End Inner parallax container */}
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>

      <div className="self-interst">
        <div>
          {/* Outer parallax container */}
          <MouseParallaxContainer
            className="outer_parallax-container"
            globalFactorX={0.2}
            globalFactorY={0.2}
            inverted
            resetOnLeave
          >
            <MouseParallaxChild
              className="outer_parallax-child"
              factorX={0.6}
              factorY={0.5}
            >
              {/* Inner parallax container */}
              <MouseParallaxContainer
                className="inner_parallax-container"
                globalFactorX={0.6}
                globalFactorY={0.5}
                resetOnLeave
              >
                <span>{ContentCard.CARD_2.TITLE}</span>
                <span>{ContentCard.CARD_2.SUB_TITLE}</span>
                <MouseParallaxChild
                  inverted
                  factorX={0.1}
                  factorY={0.1}
                  className="inner_parallax-img-container"
                >
                  <div className="tech-stack-container">
                    <img
                      className="tech-stack-img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="react"
                    />
                    <img
                      className="tech-stack-img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="nextjs"
                    />
                    <img
                      className="tech-stack-img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                      alt="mui"
                    />
                    <img
                      className="tech-stack-img"
                      src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg"
                      alt="tailwind"
                    />
                    <img
                      className="tech-stack-img"
                      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                      alt="antd"
                    />
                    <img
                      className="tech-stack-img"
                      src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/nestjs/nestjs-original.svg"
                      alt="nestjs"
                    />
                    <img
                      className="tech-stack-img"
                      src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/javascript/javascript-original.svg"
                      alt="javascript"
                    />
                    <img
                      className="tech-stack-img"
                      src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/css3/css3-original.svg"
                      alt="css"
                    />
                    <img
                      className="tech-stack-img"
                      src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                      alt="shadcn"
                    />
                  </div>
                </MouseParallaxChild>
              </MouseParallaxContainer>
              {/* End Inner parallax container */}
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div>
        <MouseParallaxContainer
            className="outer_parallax-container"
            globalFactorX={0.2}
            globalFactorY={0.2}
            inverted
            resetOnLeave
          >
            <MouseParallaxChild
              className="outer_parallax-child"
              factorX={0.6}
              factorY={0.5}
            >
              {/* Inner parallax container */}
              <MouseParallaxContainer
                className="inner_parallax-container"
                globalFactorX={0.6}
                globalFactorY={0.5}
                resetOnLeave
              >
                <span>{ContentCard.CARD_3.TITLE}</span>
                <span>{ContentCard.CARD_3.SUB_TITLE}</span>
                <MouseParallaxChild
                  inverted
                  factorX={0.1}
                  factorY={0.1}
                  className="inner_parallax-img-container"
                >
                  <img src={ContentCard.CARD_3.IMAGE} alt="avatar" />
                </MouseParallaxChild>
              </MouseParallaxContainer>
              {/* End Inner parallax container */}
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </div>
  );
}
