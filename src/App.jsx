import "./App.scss";
import gsap from "gsap-trial";
import CardContent from "./components/CardContent/CardContent";
import Content from "./components/Content/Content";
import TopLanding from "./components/TopLanding/TopLanding";

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
