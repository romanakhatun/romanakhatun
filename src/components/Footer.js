import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import styles from "../styles/components/footer.module.scss";

const Footer = () => {
  const date = new Date();

  return (
    <div className={styles.footer}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
        <div className={styles.footer_socialIcon}>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/romanakhatun/"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://github.com/romanakhatun/"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://twitter.com/msromanakhatun"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
        </div>

      <p>2021 - {date.getFullYear()} © Romana Khatun. All right reserved</p>
    </div>
  );
};
export default Footer;
