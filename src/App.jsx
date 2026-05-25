import "./App.scss";
import CardContent from "./components/CardContent/CardContent";
import Content from "./components/Content/Content";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import StarParticles from "./components/StarParticles/StarParticles";
import TopLanding from "./components/TopLanding/TopLanding";

function App() {
  return (
    <div className="app-container">
      <SmoothScroll />
      <div className="portfolio-background" />
      <StarParticles />
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
