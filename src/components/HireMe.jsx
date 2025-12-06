import { Container } from "@material-ui/core";
import { HiBadgeCheck } from "react-icons/hi";
import styles from "../styles/components/hireMe.module.scss";
const HireMe = () => {
  return (
    <Container>
      <div className={styles.hireMe}>
        <h2>I'm available to start working for you!</h2>
        <button>
          <HiBadgeCheck /> Hire Me!
        </button>
      </div>
    </Container>
  );
};
export default HireMe;
