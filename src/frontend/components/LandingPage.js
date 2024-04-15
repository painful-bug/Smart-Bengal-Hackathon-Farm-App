import Navbar from "../components/Navbar.js";
import "../styles/LandingPage.css";
import "../styles/Frame.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="bg-img-div">
        <img
          className="bg-img"
          loading="lazy"
          alt=""
          src="../assets/background.jpg"
        />
      </div>
      <Navbar />
      {/* <main className="frame-wrapper"> */}
        {/* <section className="frame1"> */}
          <div className="harvest-the-future-smart-farm-wrapper">
            <h1 className="harvest-the-future">
              Harvest the Future: Smart Farming Solutions
            </h1>
          </div>
          <div className="predict-your-crop-wrapper">
            <div className="predict-your-crop">
              <a>Get Started</a>
            </div>
          </div>
          <div className="frame-child" />
        {/* </section> */}
      {/* </main> */}
    </div>
  );
};
