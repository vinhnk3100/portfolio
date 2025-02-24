import "./App.scss";
import gsap from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import CardContent from "./components/CardContent/CardContent";
import Content from "./components/Content/Content";
import TopLanding from "./components/TopLanding/TopLanding";
gsap.registerPlugin(ScrollSmoother);

function App() {
  return (
    <div className="app-container">
      <div className="hero_container">
        <TopLanding />
        <CardContent />
      </div>
      <div className="body_content">
        <Content />
      </div>
    </div>
  );
}

export default App;
