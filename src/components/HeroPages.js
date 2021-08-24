import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import styles from "../styles/components/heroPages.module.scss";

const HeroPages = (props) => {
  console.log(props);
  return (
    <div className={styles.heroGlobalBox}>
      <div className={styles.heroGlobalBox_details}> 
        <span className={styles.heroGlobalBox_home}><FaHome /><Link to="/"> Home </Link></span>
        <span className={styles.slas}>/</span>
        <span className={styles.title}>{props.title}</span>
      </div>
    </div>
  );
};
export default HeroPages;
