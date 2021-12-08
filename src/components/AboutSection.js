import { useState } from "react";
import { Container } from "@material-ui/core";
import { FaReact, FaSass, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiNetlify,
  SiMaterialUi,
} from "react-icons/si";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "../styles/components/aboutSection.module.scss";
import profilePic from "../images/romana-pic.png";
import internshipWork from "../images/internship-work.png";

const AboutSection = () => {
  const [value, setValue] = useState(0);

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
    <section className={styles.aboutSection}>
      <h1>About Me</h1>
      <h2>who am i?</h2>

      <Container className={styles.aboutSectionContainer}>
        <div className={styles.aboutSectionImg}>
          <img src={profilePic} alt="code" />
        </div>

        <div className={styles.aboutSectionDetails}>
          <AppBar position="static" className={styles.aboutSectionAppBar}>
            <Tabs
              className={styles.aboutSectionTabs}
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
          <TabPanel
            value={value}
            index={0}
            className={styles.aboutSectionTabPanel}
          >
            <div>
              <p>Hi, This is Romana</p>
              <p>
                I am a professional front-end Web developer.I specialize in
                JavaScript and have professional experience working with react.
                My specialties include problem-solving. With passion and hard
                work, people can do anything. I am a responsible developer and I
                can successfully delegate challenging tasks.
              </p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={styles.aboutSectionSkills}>
              <div className={styles.aboutSectionSkill}>
                <FaReact />
                <span>Reactjs</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <span>Nextjs</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <SiTypescript />
                <span>TypeScript</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <SiJavascript />
                <span>JavaScript</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <FaSass />
                <span>Sass</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <AiFillHtml5 />
                <span>HTML</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <FaCss3Alt />
                <span>Css</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <SiFirebase />
                <span>Firebase</span>
              </div>

              <div className={styles.aboutSectionSkill}>
                <AiFillGithub />
                <span>Github</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <SiNetlify />
                <span>Netlify</span>
              </div>
              <div className={styles.aboutSectionSkill}>
                <SiMaterialUi />
                <span>Material-Ui</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={styles.aboutSectionWork}>
              <div className={styles.aboutSectionWorkIcon}>
                <img src={internshipWork} alt="internshipWork" />
              </div>
              <div className={styles.aboutSectionWorkContent}>
                <h4>Web Developer at Namyata</h4>
                <span className={styles.aboutSectionWorkBadge}>
                  March 2020 - Running
                </span>
                <p>
                  I'm working as a web developer at Namyata Company. I'm working
                  with programming-language React, NextJs, JavaScript,
                  TypeScript, Sass, Html, CSS, Responsive Design, Re-Design
                  Website
                </p>
              </div>
            </div>
          </TabPanel>
        </div>
      </Container>
    </section>
  );
};
export default AboutSection;
