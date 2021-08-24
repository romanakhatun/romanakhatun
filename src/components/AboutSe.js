import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import coding from "../images/coding.jpg";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "../styles/components/about.module.scss";

const AboutSe = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };

  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <Container className={styles.about_container}>
        <div className={styles.about_img}>
          <img src={coding} alt="code" />
        </div>

        <div className={styles.about_details}>
          <AppBar position="static" className={styles.about__appBar}>
            <Tabs
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <Tab label="About Me" {...a11yProps(0)} />
              <Tab label="Skills" {...a11yProps(1)} />
              <Tab label="Experience" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div data-aos="fade">
              <h4>
                Hello! <span>I&apos;M Romana Khatun.</span>
              </h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
                &apos;Content here, content here&apos;, making it look like
                readable English.
              </p>
              <p>
                {" "}
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>
              <FaReact />
              <span>Reactjs</span>
            </div>
            <div>
              <SiTypescript />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Mina
          </TabPanel>
        </div>
      </Container>
    </section>
  );
};
export default AboutSe;
