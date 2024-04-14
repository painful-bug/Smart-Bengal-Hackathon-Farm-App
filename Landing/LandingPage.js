import FrameComponent from "../components/FrameComponent";
import Frame from "../components/Frame";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="wrapper-unsplashiqvfvh0ajag">
        <img
          className="unsplashiqvfvh0ajag-icon"
          loading="lazy"
          alt=""
          src="/unsplashiqvfvh0ajag@2x.png"
        />
      </div>
      <FrameComponent />
      <main className="frame-wrapper">
        <Frame />
      </main>
    </div>
  );
};

export default LandingPage;
