import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <header className="monitor-parent">
      <div className="monitor" />
      <div className="frame">
        <nav className="brand-name-parent">
          <div className="brand-name">brand name</div>
          <nav className="home-parent">
            <div className="home">Home</div>
            <div className="predict">Predict</div>
            <div className="about-us">About us</div>
          </nav>
        </nav>
        <div className="login">Login</div>
      </div>
    </header>
  );
};

export default FrameComponent;
