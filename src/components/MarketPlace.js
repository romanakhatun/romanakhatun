import { Container } from "@material-ui/core";
import styles from "../styles/components/marketPlace.module.scss";

const MarketPlace = () => {
  return (
    <section className={styles.marketPlace}>
      <Container>
        <h2>I Am Available For Freelancer.</h2>

        <div className={styles.marketPlace_icon}>
          <div className={styles.fiverr}>
            <a
              href="https://www.upwork.com/freelancers/~0153a5b0f1233cd0d8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/fiverr.png" alt="fiverr" />
            </a>
          </div>
          <div className={styles.upwork}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="/images/upwork.svg" alt="upwork" />
            </a>
          </div>
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="/images/freelancer.svg" alt="freelancer" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default MarketPlace;
