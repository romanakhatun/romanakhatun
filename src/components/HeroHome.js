import styles from "../styles/components/heroHome.module.scss";
import { Container, Button } from "@material-ui/core";

const HeroHome = () => {
  return (
    <section className={styles.hero}>
      <span className={styles.outline_text}>
        Romana <br /> Khatun
      </span>

      <Container className={styles.hero_details}>
        <h3>Welcome</h3>
        <h2>I&apos;M web developer</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolorem{" "}
          <br />
          pariatur quo impedit accusantium maiores.
        </p>
        <Button className={styles.hero_btn}>Download CV</Button>
      </Container>
    </section>
  );
};
export default HeroHome;
