import { Link } from "@remix-run/react";
import "./Header.scss";
import { LogoIcon } from "../../icons";

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

export default function HeaderComponent({ user, showSignup, showModal, }) {
  const handleModalOpen = (methodType: string | undefined) => {
    showSignup = methodType === "signup";
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
    </>
  );
}
