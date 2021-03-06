import { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { FaReact, FaSass, FaCss3Alt, FaNpm, FaBootstrap } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiNetlify,
  SiTailwindcss,
  SiMongodb,
  SiVisualstudio,
  SiHeroku,
  SiRedux,
  SiNextdotjs,
  SiVercel,
  SiMaterialui,
  SiExpress,
  SiPwa,
} from "react-icons/si";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { WebsiteName } from "../App";
import HeroPages from "./HeroPages";
import styles from "../styles/components/about.module.scss";

const About = ({ homePath }) => {
  // document.title = WebsiteName;

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
          <Box className={styles.aboutChildrenData}>
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
    <>
      {homePath ? null : <HeroPages title="About" />}
      <div className={styles.about}>
        <h1>About Me</h1>
        <h2>Who Am i ?</h2>

        <Container>
          <div className={styles.aboutDetails}>
            <AppBar position="static" className={styles.aboutAppBar}>
              <Tabs
                className={styles.aboutTabs}
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

            <TabPanel value={value} index={0} className={styles.aboutTabPanel}>
              <div className={styles.aboutContent}>
                <p>if you're wondering who I am..</p>
                <p>
                  I'm <span className={styles.badge}>Romana Khatun</span>, 16
                  years old <span className={styles.badge}>web developer</span>{" "}
                  from Bangladesh.
                </p>
                <p>
                  I have been involved with Web Development for 3+ years. I
                  specialize in <span className={styles.badge}>JavaScript</span>{" "}
                  and have professional experience working with{" "}
                  <span className={styles.badge}>React.js</span>. My specialties
                  include problem-solving. With passion and hard work, people
                  can do anything. I am a responsible developer and I can
                  successfully delegate challenging tasks.
                </p>

                <Button className={styles.aboutDownloadBtn}>
                  <a href="images/romana-resume.pdf" download>
                    Download my resume
                  </a>{" "}
                  <FiDownloadCloud />
                </Button>
              </div>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <div className={styles.aboutSkills}>
                <div className={styles.aboutSkill}>
                  <FaReact />
                  <span>Reactjs</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiRedux />
                  <span>Redux</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiNextdotjs />
                  <span>Nextjs</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiTypescript />
                  <span>TypeScript</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiJavascript />
                  <span>JavaScript</span>
                </div>
                <div className={styles.aboutSkill}>
                  <AiFillHtml5 />
                  <span>HTML</span>
                </div>
                <div className={styles.aboutSkill}>
                  <FaCss3Alt />
                  <span>Css</span>
                </div>
                <div className={styles.aboutSkill}>
                  <FaSass />
                  <span>Sass</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiPwa />
                  <span>PWA</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiFirebase />
                  <span>Firebase</span>
                </div>
                <div className={styles.aboutSkill}>
                  <AiFillGithub />
                  <span>Github</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiNetlify />
                  <span>Netlify</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiVercel />
                  <span>Vercel</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiMaterialui />
                  <span>Material-Ui</span>
                </div>
                <div className={styles.aboutSkill}>
                  <FaBootstrap />
                  <span>Bootstrap</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiTailwindcss />
                  <span>Tailwindcss</span>
                </div>
                <div className={styles.aboutSkill}>
                  <FaNode />
                  <span>Nodejs</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiMongodb />
                  <span>MongoDB</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiExpress />
                  <span>Express</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiVisualstudio />
                  <span>Visual Studio Code</span>
                </div>
                <div className={styles.aboutSkill}>
                  <SiHeroku />
                  <span>Heroku</span>
                </div>
                <div className={styles.aboutSkill}>
                  <FaNpm />
                  <span>Npm</span>
                </div>
              </div>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <div className={styles.aboutWork}>
                <img src="/images/internship-work.png" alt="internshipWork" />
                <div className={styles.aboutWorkContent}>
                  <h4>Web Developer at Namyata</h4>
                  <p className={styles.badge}>March 2021 - September 2021</p>
                  <p>
                    Worked on programming-language such as Reactjs, Nextjs,
                    JavaScript, TypeScript, SASS, Responsive Design, Re-design
                    website
                  </p>
                </div>
              </div>
            </TabPanel>
          </div>
        </Container>
      </div>
    </>
  );
};
export default About;
