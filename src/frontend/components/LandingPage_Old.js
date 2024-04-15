// import { Button } from "antd";
import { Button } from "antd";

export const LandingPage_Old = () => {
  return (
    <div className="w-full relative bg-gray-200 h-[1080px] text-left text-[94px] text-black font-kadwa">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1920px] h-[135px] mix-blend-saturation" />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[1080px] object-cover mix-blend-darken"
        alt=""
        src="/unsplashiqvfvh0ajag@2x.png"
      />
      <div className="absolute top-[141px] left-[43px] w-[1538px] h-[806px] overflow-hidden">
        <div className="absolute top-[184px] left-[0px] w-[1463px] h-[590px]">
          <div className="absolute top-[-108px] left-[0px] inline-block w-[1463px] h-[459px]">
            Harvest the Future: Smart Farming Solutions
          </div>
          <Button
            className="absolute top-[306px] left-[0px]"
            style={{ width: "541px" }}
            type="default"
          >
            Predict Your Crop
          </Button>
        </div>
      </div>
      <div className="absolute top-[0px] left-[29px] w-[1863px] h-[104px] overflow-hidden text-center text-16xl">
        <div className="absolute top-[38px] left-[0px] w-[1863px] h-[66px]" />
        <div className="absolute top-[38px] left-[0px] inline-block w-[269px] h-[66px]">
          brand name
        </div>
        <div className="absolute top-[38px] left-[1112px] inline-block w-[269px] h-[66px]">
          Home
        </div>
        <div className="absolute top-[38px] left-[1486px] inline-block w-[269px] h-[66px]">
          About us
        </div>
        <div className="absolute top-[38px] left-[1667px] inline-block w-[269px] h-[66px]">
          Login
        </div>
        <div className="absolute top-[38px] left-[1297px] inline-block w-[269px] h-[66px]">
          Predict
        </div>
      </div>
    </div>
  );
};


