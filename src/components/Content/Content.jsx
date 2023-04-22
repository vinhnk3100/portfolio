import "./Content.scss";
import { ContentCard } from '../../constants/ContentCards'
import PredatorImg from '../../assets/images/Predator.jpg';
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";


export default function Content() {
    return (
        <div className="content_container">

            {/* Outer parallax container */}
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
                               <img src={PredatorImg} alt="avatar" />
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                    <span>About me</span>
                    {/* End Inner parallax container */}
                </MouseParallaxChild>
            </MouseParallaxContainer>

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
                                <span>{ContentCard.CARD_1.TITLE}</span>
                                <span>{ContentCard.CARD_1.SUB_TITLE}</span>
                                <MouseParallaxChild
                                        inverted
                                        factorX={0.1}
                                        factorY={0.1}
                                        className="inner_parallax-img-container"
                                    >
                                    <img src={ContentCard.CARD_1.IMAGE} alt="avatar" />
                                </MouseParallaxChild>
                            </MouseParallaxContainer>
                            {/* End Inner parallax container */}
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
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
                                <span>{ContentCard.CARD_2.TITLE}</span>
                                <span>{ContentCard.CARD_2.SUB_TITLE}</span>
                                <MouseParallaxChild
                                        inverted
                                        factorX={0.1}
                                        factorY={0.1}
                                        className="inner_parallax-img-container"
                                    >
                                    <img src={ContentCard.CARD_2.IMAGE} alt="avatar" />
                                </MouseParallaxChild>
                            </MouseParallaxContainer>
                            {/* End Inner parallax container */}
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
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
                                <span>{ContentCard.CARD_4.TITLE}</span>
                                <span>{ContentCard.CARD_4.SUB_TITLE}</span>
                                <MouseParallaxChild
                                        inverted
                                        factorX={0.1}
                                        factorY={0.1}
                                        className="inner_parallax-img-container"
                                    >
                                    <img src={ContentCard.CARD_4.IMAGE} alt="avatar" />
                                </MouseParallaxChild>
                            </MouseParallaxContainer>
                            {/* End Inner parallax container */}
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>
            </div>
        </div>
    )
}