import { Button, Container } from "@material-ui/core";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import styles from "../styles/components/heroHome.module.scss";

const HeroHome = () => {
  return (
    <section className={styles.hero}>
      <span className={styles.outline_text}>
        Romana <br /> Khatun
      </span>

      <Container className={styles.hero_details}>
        {/* <h5>HELLO, WELCOME TO</h5> */}
        <h2>ROMANA KHATUN</h2>
        <p>Web developer & Front-end Developer </p>

        <div className={styles.hero_socialIcon}>
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
        <Button className={styles.hero_btn}>Download CV</Button>
      </Container>
    </section>
  );
};
export default HeroHome;
