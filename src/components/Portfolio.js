import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { WebsiteName } from "../App";
import data from "../data.json";
import HeroPages from "./HeroPages";
import styles from "../styles/components/portfolio.module.scss";

const Portfolio = ({ homePath }) => {
  document.title = "Portfolio | " + WebsiteName;

  return (
    <>
      {homePath ? null : <HeroPages title="Portfolio" />}

      <div className={styles.portfolio}>
        <h1>My Portfolio</h1>
        <h2>What i've Done</h2>

        <Container className={styles.portfolioAllWorks}>
          {data.map((portfolio, index) => {
            console.log(portfolio?.image);
            return (
              <div key={index} className={styles.portfolioWork}>
                <img src={portfolio.image} alt="project-img" />
                <h3>{portfolio?.name}</h3>
                <p>{portfolio?.des}</p>
                <p className={styles.portfolioUseTechnology}>
                  {portfolio?.technology}
                </p>

                <div className={styles.portfolioBtn}>
                  <Button className={styles.previewBtn}>
                    <a
                      href={portfolio?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview <MdOutlineKeyboardArrowRight />
                    </a>
                  </Button>

                  <Button className={styles.sourceBtn}>
                    <a
                      href={portfolio?.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </Container>

        {homePath ? (
          <Link to="/portfolio">
            <button className={styles.projectViewAll}>
              View All <MdOutlineKeyboardArrowRight />
            </button>
          </Link>
        ) : null}
      </div>
    </>
  );
};
export default Portfolio;
