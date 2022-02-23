import React, { useRef, useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import { BsEmojiSmile } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
// import { WebsiteName } from "../App";
import emailjs from "emailjs-com";
import HeroPages from "./HeroPages";
import styles from "../styles/components/contact.module.scss";

const Contact = ({ homePath }) => {
  // document.title = "Contact | " + WebsiteName;

  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8zdfe1w",
        "template_8dhutos",
        form.current,
        "user_kafSPgec89vLpiE8J089N"
      )
      .then(
        () => {
          setStatus("SUCCESS");
          e.target.reset();
        },
        () => {
          setStatus("FAILED");
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS" || status === "FAILED") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const directSendEmail =
    "https://mail.google.com/mail/u/0/?fs=1&to=romanakhatun2004@gmail.com&su=Need+to+disscuss+with+Romana+Khatun&body=Hello,+I+need+to+talk&tf=cm";

  return (
    <>
      {homePath ? null : <HeroPages title="Contact" />}
      <div className={styles.contact}>
        <h1>CONTACT ME</h1>
        <h2> Get in Touch!</h2>

        <Container className={styles.contactDetails}>
          <div className={styles.contactQuick}>
            {/* <img src="/images/map-bg.svg" alt="map-bg" /> */}

            <div className={styles.contactQuickDetails}>
              <h3>Quick Contact</h3>
              <h4>
                Don't like forms? Send me an{" "}
                <a
                  href={directSendEmail}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email
                </a>{" "}
                <BsEmojiSmile />
              </h4>

              <div className={styles.contactInfo}>
                <p className={styles.contactPhn}>
                  Phone: <a href="tel:+8801796953902">+8801796953902</a>
                </p>
                <p className={styles.contactEmail}>
                  Gmail:{" "}
                  <a
                    href={directSendEmail}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    romanakhatun2004@gmail.com
                  </a>
                </p>
                <p className={styles.contactAddress}>
                  Address: Dinajpur, Bangaldesh
                </p>
              </div>

              <div className={styles.contactSocialMedia}>
                <p>Find with me</p>

                <div className={styles.contactSocialMediaBtn}>
                  <button>
                    <a
                      href="https://www.linkedin.com/in/romanakhatun/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiLinkedin />
                    </a>
                  </button>

                  <button>
                    <a
                      href="https://twitter.com/msromanakhatun"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiTwitter />
                    </a>
                  </button>

                  <button>
                    <a
                      href="http://wa.me/+8801796953902"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <form
            className={styles.contactMessageForm}
            ref={form}
            onSubmit={sendEmail}
          >
            <div className={styles.name}>
              <label>YOUR NAME</label>
              <input type="text" name="name" required />
            </div>

            <div className={styles.subject}>
              <label>Subject</label>
              <input type="text" name="subject" required />
            </div>

            <div className={styles.email}>
              <label>EMAIL </label>
              <input type="email" name="email" required />
            </div>

            <div className={styles.message}>
              <label>YOUR MESSAGE</label>
              <textarea name="message" required />
            </div>

            <Button className={styles.contactSubmitBtn} type="submit">
              Send Message <BsArrowRight />
            </Button>
            {status === "SUCCESS" && (
              <p className={styles.success}>Message Send Successfully</p>
            )}
            {status === "FAILED" && (
              <p className={styles.error}>Something Went wrong</p>
            )}
          </form>
        </Container>
      </div>
    </>
  );
};
export default Contact;
