import "./Content.css";

const Content = () => {
  return (
    <section className="content">
      <div className="modal1">
        <img className="cover-icon" loading="lazy" alt="" src="/cover.svg" />
        <div className="signup-form">
          <form className="header">
            <div className="close-button-area">
              <div className="close-button2">
                <img
                  className="cancel16x161x-1-icon1"
                  loading="lazy"
                  alt=""
                  src="/cancel16x161x-1.svg"
                />
              </div>
            </div>
            <h1 className="sign-up1">Sign up</h1>
            <div className="sign-up-now">
              Sign up now and gain access to exclusive content!
            </div>
            <div className="form">
              <div className="input-fields">
                <div className="email-address">Email address</div>
                <div className="form1">
                  <div className="input-boxes">
                    <div className="nameemailcom1">name@email.com</div>
                  </div>
                </div>
              </div>
              <div className="input-fields">
                <div className="password">Password</div>
                <div className="form1">
                  <div className="input-boxes">
                    <div className="nameemailcom2">******</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="password-help">
              <div className="forgot-password-reset-container">
                <span className="forgot-password">{`Forgot password? `}</span>
                <span className="reset-password">Reset password</span>
              </div>
              <div className="darkherobutton">
                <div className="button12">
                  <div className="glow2" />
                  <div className="button13">
                    <div className="div15">􀆿</div>
                    <div className="generate-images2">Sign up</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="by-clicking-on">
              By clicking on Sign up, you agree to our Terms of service and
              Privacy policy.
            </div>
            <div className="social-login">
              <div className="dividers">
                <div className="dividers-child" />
              </div>
              <div className="or1">or</div>
              <div className="dividers">
                <div className="dividers-child" />
              </div>
            </div>
            <div className="google-button">
              <img className="logo-g-icon1" alt="" src="/logo-g.svg" />
              <div className="google-button1">
                <div className="sign-with-google1">Sign with Google</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Content;
