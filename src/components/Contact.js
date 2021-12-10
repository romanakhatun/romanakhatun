import { BsEmojiSmile } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import HeroPages from "./HeroPages";
import styles from "../styles/components/contact.module.scss";

const Contact = ({ homePath }) => {
  const directSendEmail =
    "https://mail.google.com/mail/u/0/?fs=1&to=romanakhatun2004@gmail.com&su=Need+to+disscuss+with+Romana+Khatun&body=Hello,+I+need+to+talk&tf=cm";
  return (
    <>
      {homePath ? null : <HeroPages title="Contact" />}
      <div className={styles.contact}>
        <h1>CONTACT ME</h1>
        <h2> Get in Touch!</h2>

        <div>
          <div className={styles.contactQuick}>
            <img src="/images/map-bg.svg" alt="map-bg" />

            <div className={styles.contactQuickDetails}>
              <h3>Quick Contact</h3>
              <h4>
                {/* Don't like forms?  */}
                Send me an{" "}
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
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Contact;