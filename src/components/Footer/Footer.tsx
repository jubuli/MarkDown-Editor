import styles from "./Footer.module.css";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Copyright © 2025. Designed By{" "}
          <a href="https://www.linkedin.com/in/jyotismita-das-67669229a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Jyotismita Das</a>
        </p>
      </div>
      <div className={styles.handles}>
        <a href="www.instagram.com">
          <Instagram color="black" size={30} />
        </a>
        <a href="https://github.com/jubuli">
          <Github color="black" size={30} />
        </a>
        <a href="https://www.linkedin.com/in/jyotismita-das-67669229a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Linkedin color="black" size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
