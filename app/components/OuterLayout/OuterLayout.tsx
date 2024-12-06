import { useLocation, useActionData } from "@remix-run/react";
import BackgroundImage from "../../asserts/hospital-corridor.jpg";
import InnerPageBackgroundImage from "../../asserts/page2background.png";
import HeaderComponent from "../navigations/header/HeaderComponent";
import InnerHeader from "../navigations/header/InnerHeader";
import Footer from "../navigations/footer/footer";
import PopupModal from "../PopupModal/PopupModal";
import LoginForm from "../forms/LoginForm/LoginForm";
import SignupForm from "../forms/SignupForm/SignupForm";
import { useState } from "react";

const OuterLayout = ({ children }) => {
  const actionData = useActionData();
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setSignup] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const isInnerPage = location.pathname !== "/";
  const backgroundImageStyle = {
    backgroundImage: isInnerPage
      ? `url(${InnerPageBackgroundImage})`
      : `url(${BackgroundImage})`,
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSignup = (value: boolean | ((prevState: boolean) => boolean)) => {
    setSignup(value);
  };

  return (
    <main>
      <div className="outer-layout">
        <header>
          {isInnerPage ? (
            <>
              <InnerHeader />
            </>
          ) : (
            <HeaderComponent />
          )}
        </header>
        <div className={isInnerPage ? "layout inner-layout" : "layout"}>
          {children}
        </div>
        <Footer />
      </div>
      {!user ? (
      <div className={`modal-overlay ${showModal && !user ? "show" : ""}`}>
        <PopupModal onClose={handleModalClose}>
          <>
            <div className="popup-modal__body">
              <h1 className="popup-modal__body--title">
                {showSignup ? <>Create a new account</> : <>Welcome Back</>}
              </h1>
              <p className="popup-modal__body--description">
                {showSignup ? (
                  <>It&apos;s quick and easy.</>
                ) : (
                  <>
                    Input your email to receive a one-time login code to sign
                    in.
                  </>
                )}
              </p>
              <div className="popup-modal__body--form">
                {actionData?.error && (
                  <p className="error">{actionData.error}</p>
                )}
                {showSignup ? (
                  <SignupForm></SignupForm>
                ) : (
                  <LoginForm></LoginForm>
                )}
              </div>
            </div>
            <div className="popup-modal__footer">
              <p className="popup-modal__footer--text">
                {showSignup ? (
                  <>
                    Already have an account?{" "}
                    <button onClick={() => handleSignup(!showSignup)}>
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    Don&apos;t have an account?{" "}
                    <button onClick={() => handleSignup(!showSignup)}>
                      Sign Up
                    </button>
                  </>
                )}
              </p>
            </div>
          </>
        </PopupModal>
      </div>
      ) : (<></>)}
      <div className={isInnerPage ? "background inner-background" : "background"}>
        <div style={backgroundImageStyle} className="background__image" />
        <div className="background__grid"></div>
        <div className="background__blur-xl"></div>
      </div>
    </main>
  );
};

export default OuterLayout;
