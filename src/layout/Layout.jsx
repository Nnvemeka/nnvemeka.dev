import React from "react";
import { Helmet } from "react-helmet";
import Biography from "../shared/biography/Biography";
import Header from "../shared/header/Header";
import SocialMedia from "../shared/socialMedia/SocialMedia";
import "./Layout.css";

const Layout = ({ children, title, active, home, article }) => {
  const pageTitle = title
    ? `${title} | Edward Ugwu`
    : "Edward Ugwu | Frontend Engineer";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div
        className={`layout ${article ? "layout_article" : ""}`}
        id={home ? "layout_full" : ""}
      >
        <div className="mobile_container">
          <Header />
          <div className="mb" id="mobile">
            {home ? <Biography active={active} /> : children}
          </div>
          <SocialMedia />
        </div>

        <div className="container">
          <div className="fixed">
            <Biography active={active} />
          </div>
          <div className="main">
            <div className="pages_container">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
