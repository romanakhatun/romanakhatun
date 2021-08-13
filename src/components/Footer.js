import styles from "../styles/components/footer.module.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <div className={styles.footer}>
      <div className={styles.footer_socialIcon}>
        <a href="" className={styles.footer_socialSingleIconicon}>
          <FaFacebookF />
        </a>

        <a href="" className={styles.footer_socialSingleIconicon}>
          <FaLinkedinIn />
        </a>

        <a href="" className={styles.footer_socialSingleIconicon}>
          <FaGithub />
        </a>

        <a href="" className={styles.footer_socialSingleIconicon}>
          <FaMediumM />
        </a>

        <a href="" className={styles.footer_socialSingleIconicon}>
          <FaTwitter />
        </a>
      </div>

      <p>2021 - {date.getFullYear()} © Romana Khatun. All right reserved</p>
    </div>
  );
};
export default Footer;
