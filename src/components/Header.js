import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import logo from "../images/logosm.png";
import logoBlack from "../images/black-logo.png";
import styles from "../styles/components/header.module.scss";

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const navbarActiveBgDesign = () => {
    if (window.scrollY >= 80) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  window.addEventListener("scroll", navbarActiveBgDesign);

  return (
    <header
      id={styles.header}
      className={navbarActive ? styles.navber_activeContainer : styles.navbar}
    >
      <Container>
        <div className={styles.navbar_details}>
          <div className={styles.logo}>
            {navbarActive ? (
              <Link to="/">
                <img src={logoBlack} alt="logo" />
              </Link>
            ) : (
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            )}
          </div>

          <div className={styles.menu}>
            <ul>
              <li>
                <NavLink exact activeClassName={styles.active} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName={styles.active} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName={styles.active} to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName={styles.active} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
