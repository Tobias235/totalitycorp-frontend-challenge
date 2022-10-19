import { links } from "../utils/LinkData.js/LinkData";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksContainer}>
        {links.map((link, i) => {
          return (
            <a href={link.link} key={i} className={styles.links}>
              {link.tag}
            </a>
          );
        })}
      </div>
      © 2022 Twitter Clone - Tobias Prepas.
    </footer>
  );
};

export default Footer;
