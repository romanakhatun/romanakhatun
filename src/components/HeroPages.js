import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import styles from "../styles/components/heroPages.module.scss";

const HeroPages = (props) => {
  console.log(props);
  return (
    <div className={styles.heroGlobalBox}>
      <div  className={styles.heroGlobalBox_details}> 
        <Link to="/"><FaHome /> Home </Link>
        <span>/</span>
        <Link to="/">{props.title}</Link>
      </div>
    </div>
  );
};
export default HeroPages;
