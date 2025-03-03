import { Ulist } from "./Ulist";
import {
  NAVBAR_LIST_ICONS_AND_LINKS,
  NAVBAR_LIST_ITEMS,
} from "../utils/constants";

export function Footer() {
  return (
    <footer className="section footer">
      <Ulist
        UlClassName="footer-links"
        hyperLinkClassName="footer-link"
        arrayOfHyperLinkItems={NAVBAR_LIST_ITEMS}
      />
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
