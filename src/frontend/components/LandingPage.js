// import { Button } from "antd";
import { Button } from "antd";
import "../styles/LandingPage.css";
export const LandingPage = () => {
  return (
    <div className="main">
      <div className="header">
        
      </div>
      <h1 className="harvest">Harvest the Future: Smart Farming Solutions</h1>

      <section className="predict-your-crop-wrapper">
        <a className="predict-your-crop" href="/predict/">
          Get Started
        </a>
      </section>

      <h1 className="service-offer"><a href="/services">We offer three services</a></h1>

      <div className="info-cards">
        {
          //first info card
        }

        <div className="frame-root">
          <div className="frame-1variant5-group">
            <div className="frame-1variant51" />
            <div className="frame-container">
              <div className="seeing-spots-on-your-crops-container">
                <div className="seeing-spots-on1">
                  Seeing spots on your crops?
                </div>
              </div>
              <div className="are-the-leaves1">
                Are the leaves covered with a white furry substance?
              </div>
            </div>
            <div className="worry-not-click1">
              Worry not! Click a picture of the crop and we will tell which
              disease has affected it!
            </div>
          </div>
          <div className="line-wrapper">
            {/* <img className="frame-item" loading="lazy" alt="" />  */}
            <div className="line"></div>
          </div>
          <div className="instance-wrapper">
            <div className="predict-your-crop-container">
              <div className="predict-your-crop2"><a href="/detect">Detect Plant Disease</a></div>
            </div>
          </div>
        </div>

        {
          //second info card
        }

        <div className="frame-root">
          <div className="frame-1variant5-group">
            <div className="frame-1variant51" />
            <div className="frame-container">
              <div className="seeing-spots-on-your-crops-container">
                <div className="seeing-spots-on1">
                  Confused about which crop to grow this season? Tell us the
                  temperature and soil conditions and we will let you know which
                  crop suits the best!
                </div>
              </div>
              <div className="are-the-leaves1">
                {/* Are the leaves covered with a white furry substance? */}
              </div>
            </div>
            <div className="worry-not-click1">
              {/* Worry not! Click a picture of the crop and we will tell which */}
              {/* disease has affected it! */}
            </div>
          </div>
          <div className="line-wrapper">
            {/* <img className="frame-item" loading="lazy" alt="" />  */}
            <div className="line"></div>
          </div>
          <div className="instance-wrapper">
            <div className="predict-your-crop-container">
              <div className="predict-your-crop2"><a href="/predict">Predict Your Crop</a></div>
            </div>
          </div>
        </div>

        {
          //third info card
        }

        <div className="frame-root">
          <div className="frame-1variant5-group">
            <div className="frame-1variant51" />
            <div className="frame-container">
              <div className="seeing-spots-on-your-crops-container">
                <div className="seeing-spots-on1">
                  Confused about which crop to grow this season? Tell us the
                  temperature and soil conditions and we will let you know which
                  crop suits the best!
                </div>
              </div>
              <div className="are-the-leaves1">
                {/* Are the leaves covered with a white furry substance? */}
              </div>
            </div>
            <div className="worry-not-click1">
              {/* Worry not! Click a picture of the crop and we will tell which */}
              {/* disease has affected it! */}
            </div>
          </div>
          <div className="line-wrapper">
            {/* <img className="frame-item" loading="lazy" alt="" />  */}
            <div className="line"></div>
          </div>
          <div className="instance-wrapper">
            <div className="predict-your-crop-container">
              <div className="predict-your-crop2">Predict Your Crop</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
