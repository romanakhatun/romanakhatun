import { Container } from "@material-ui/core";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import styles from "../styles/components/heroHome.module.scss";

const HeroHome = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <h5 className={styles.heroWelcomeFirst}>HELLO, WELCOME TO</h5>
        <h1 className={styles.heroWelcomeName}>Romana</h1>
        <Container>
          <p>
            I'm Web developer | Front-end Developer. My passion lines in
            learning about the latest technology.
          </p>
        </Container>
        <div className={styles.heroSocial}>
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
      </Container>
    </section>
  );
};
export default HeroHome;
