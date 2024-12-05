import { useLocation } from "@remix-run/react";
import BackgroundImage from "../../asserts/hospital-corridor.jpg";
import InnerPageBackgroundImage from "../../asserts/page2background.png";
import HeaderComponent from "../navigations/header/HeaderComponent";
import InnerHeader from "../navigations/header/InnerHeader";
import Footer from "../navigations/footer/footer";

const OuterLayout = ({ children }) => {
  const location = useLocation();
  const isInnerPage = location.pathname !== "/";
  const backgroundImageStyle = {
    backgroundImage: isInnerPage
      ? `url(${InnerPageBackgroundImage})`
      : `url(${BackgroundImage})`,
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
      <div className={isInnerPage ? "background inner-background" : "background"}>
        <div style={backgroundImageStyle} className="background__image" />
        <div className="background__grid"></div>
        <div className="background__blur-xl"></div>
      </div>
    </main>
  );
};

export default OuterLayout;
