import { Button, Container } from "@material-ui/core";
import data from "../data.json";
import styles from "../styles/components/PortfolioSection.module.scss";

const PortfolioSection = () => {
  return (
    <div className={styles.portfolio}>
      <h1>My Portfolio</h1>
      <h2>WHAT I’VE DONE?</h2>

      <Container className={styles.portfolioAllWorks}>
        {data.map((portfolio, index) => {
          console.log(portfolio?.image);
          return (
            <div key={index} className={styles.portfolioWork}>
              <img src={portfolio?.image} alt="project" />
              <img src={portfolio.image} alt="project-img" />
              <h3>{portfolio?.name}</h3>
              <p>{portfolio?.des}</p>
              <p className={styles.portfolioUseTechnology}>
                {portfolio?.Technology}
              </p>
              <div className={styles.portfolioBtn}>
                <Button Link={portfolio?.link} className={styles.visitBtn}>
                  visit
                </Button>
                <Button
                  Link={portfolio?.githubLink}
                  className={styles.sourceBtn}
                >
                  source
                </Button>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};
export default PortfolioSection;
