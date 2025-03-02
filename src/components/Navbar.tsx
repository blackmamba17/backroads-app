import logo from "../images/logo.svg";
import { Ulist } from "./Ulist";
import {
  NAVBAR_LIST_ICONS_AND_LINKS,
  NAVBAR_LIST_ITEMS,
} from "../utils/constants";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <Ulist
          UlClassName="nav-links"
          UlId="nav-links"
          hyperLinkClassName="nav-link"
          arrayOfHyperLinkItems={NAVBAR_LIST_ITEMS}
        />
        <Ulist
          UlClassName="nav-icons"
          hyperLinkClassName="nav-icon"
          iconClassNames={NAVBAR_LIST_ICONS_AND_LINKS}
        />
      </div>
    </nav>
  );
}
