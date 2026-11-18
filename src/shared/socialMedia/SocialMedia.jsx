import React from "react";

const SocialMedia = () => {
  return (
    <div className="social_buttons">
      <a
        href="https://github.com/Nnvemeka"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i className="fab fa-github" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/nnvemeka/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin" aria-hidden="true"></i>
      </a>
      <a
        href="https://twitter.com/nnvemeka"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="mailto:nnvedward@gmail.com" aria-label="Email">
        <i className="fas fa-at" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default SocialMedia;