import Content from "../components/Content";
import "./Frame1.css";

const Frame = () => {
  return (
    <div className="main">
      <img
        className="mengto-a-purple-tree-filled-wi-icon"
        alt=""
        src="/mengto-a-purple-tree-filled-with-lights-on-a-glowing-field-of-g-e18f5cf9041542f999075a9099ad9d0b-1@2x.png"
      />
      <section className="shape" />
      <header className="layout">
        <div className="buttonlogo">
          <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          <img
            className="serendipity-icon"
            loading="lazy"
            alt=""
            src="/serendipity.svg"
          />
        </div>
        <div className="navigation">
          <div className="menu-button-area">
            <div className="menu-button-animation">
              <div className="button">
                <div className="item">Home</div>
              </div>
              <div className="highlights" />
            </div>
            <div className="menu-button-animation">
              <div className="button1">
                <div className="item1">Browse</div>
              </div>
              <div className="highlights" />
            </div>
            <div className="menu-button-animation">
              <div className="button2">
                <div className="item2">Updates</div>
              </div>
              <div className="highlights" />
            </div>
            <div className="menu-button-animation">
              <div className="button3">
                <div className="item3">Pricing</div>
              </div>
              <div className="highlights" />
            </div>
            <div className="menu-button">
              <div className="menu-button-animation4">
                <div className="button4">
                  <div className="item4">Sign Up</div>
                </div>
                <div className="button-highlight" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="menu-button1">
        <div className="menu-button-child" />
        <div className="button5">
          <div className="sign-up">Sign up</div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Frame;
