import React from "react";
import Button from "../../shared/button/Button";

const Article = () => {
  return (
    <div className="article">
      <div className="portfolio_showcase" style={{ display: "block", width: "100%" }}>
        <h3 className="title">Articles</h3>
        <div className="box_container box_container_full" style={{ opacity: 1 }}>
          <div className="box">
            <div className="project_details">
              <h3>Writing coming soon</h3>
              <small>Technical articles &amp; notes</small>
              <p>
                I&apos;m preparing case studies and engineering write-ups on
                frontend architecture, performance, and product delivery. In the
                meantime, feel free to explore my projects or get in touch.
              </p>
            </div>
            <div className="project_links_container">
              <div className="project_links">
                <small className="hover-effect">
                  <a href="/contact">
                    <i className="fas fa-envelope" aria-hidden="true"></i> Contact me
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        previous={{ url: "/resume", text: "Resume" }}
        next={{ url: "/contact", text: "Contact" }}
      />
    </div>
  );
};

export default Article;