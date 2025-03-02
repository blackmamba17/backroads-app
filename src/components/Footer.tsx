import React from "react";
import { Ulist } from "./Ulist";
import { NAVBAR_LIST_ICONS_AND_LINKS } from "../utils/constants";

export function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">
            home
          </a>
        </li>
        <li>
          <a href="#about" className="footer-link">
            about
          </a>
        </li>
        <li>
          <a href="#services" className="footer-link">
            services
          </a>
        </li>
        <li>
          <a href="#featured" className="footer-link">
            featured
          </a>
        </li>
      </ul>

      <Ulist
        UlClassName="footer-icons"
        hyperLinkClassName="nav-icon"
        iconClassNames={NAVBAR_LIST_ICONS_AND_LINKS}
      />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
