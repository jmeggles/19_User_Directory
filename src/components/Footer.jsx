import React, { Fragment } from "react";

//stateless since this info will not likely change
const Footer = () => {
  return (
    <Fragment>
      <div className="footerSticky">
        <p className="footer">
          Copyright ©2020 |{" "}
          <span>
            <span role="img" aria-label="sparkle">
              {" "}
              ✨{" "}
            </span>{" "}
            <a
              class="signature"
              target="_blank"
              rel="noopener noreferrer"
              href="https://jmeggles.github.io/Portfolio"
            >
              Jody Eggleston
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jody-eggleston"
            >
              <i class="fab fa-linkedin-in footer-icon"></i>
            </a>
          </span>
          <span>
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jmeggles"
            >
              <i class="fab fa-github footer-icon"></i>
            </a>
          </span>
          <span role="img" aria-label="sparkle">
            {" "}
            ✨
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
