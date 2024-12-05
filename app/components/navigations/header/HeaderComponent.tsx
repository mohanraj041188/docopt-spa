import { Link, useActionData } from "@remix-run/react";
import { useState } from "react";
import "./Header.scss";

import { LogoIcon } from "../../icons";
import PopupModal from "../../PopupModal/PopupModal";
import LoginForm from "../../forms/LoginForm/LoginForm";
import SignupForm from "../../forms/SignupForm/SignupForm";

const navLinks = [
  {
    label: "Sign In",
    link: "/signin",
    isBtnStyle: false,
    isModal: true,
  },
  {
    label: "Create Account",
    link: "/signup",
    isBtnStyle: true,
    isModal: true,
    methodType: "signup",
  },
];

export default function HeaderComponent({ user }) {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setSignup] = useState(false);
  const actionData = useActionData();

  const handleModalOpen = (methodType: string | undefined) => {
    if (methodType === "signup") {
      setSignup(true);
    } else {
      setSignup(false);
    }
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSignup = (value: boolean | ((prevState: boolean) => boolean)) => {
    setSignup(value);
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <span className="sr-only">Doctor OPT</span>
          <LogoIcon className="header__logo"></LogoIcon>
        </Link>
        <div className="header__navigations">
        {user ? (
            <>
              <Link
                to="/my-account"
                className="header__navigations--items"
              >
                Welcome, {username}!
              </Link>
              <form action="/logout" method="post">
                <button type="submit" className="header__navigations--items header__navigations--items-button">Logout</button>
              </form>
            </>
          ) : (navLinks.map((item, index) =>
            item.isModal ? (
              <button
                onClick={() => handleModalOpen(item.methodType)}
                className={
                  "header__navigations--items " +
                  (item.isBtnStyle ? "header__navigations--items-button" : "")
                }
                key={index}
              >
                <span className="header__navigations--items_text">
                  {item.label}
                </span>
              </button>
            ) : (
              <Link
                to={item.link}
                className={
                  "header__navigations--items " +
                  (item.isBtnStyle ? "header__navigations--items-button" : "")
                }
                key={index}
              >
                <span className="header__navigations--items_text">
                  {item.label}
                </span>
              </Link>
            ),
          )
          )
        }
        </div>
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
    </>
  );
}
