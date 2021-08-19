import { Container } from "@material-ui/core";
import coding from "../images/coding.jpg";
import styles from "../styles/components/about.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <Container className={styles.about_container}>
        <div className={styles.about_picture}>
          <img src={coding} alt="code" />
        </div>
        <div className={styles.about_details}>
          <h2>
            <span>About</span> Me
          </h2>
          <h4>
            Hello! <span>I&apos;M Romana Khatun.</span>
          </h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English.
          </p>
          <p>
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default About;
