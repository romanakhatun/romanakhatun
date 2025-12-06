import { Container } from "@material-ui/core";
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
      </Container>
    </section>
  );
};
export default HeroHome;
