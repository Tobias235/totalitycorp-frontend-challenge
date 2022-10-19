import twitterLogo from "../../../../assets/image/twitterLogo.svg";

import styles from "./HomePageLogo.module.scss";

const HomePageLogo = () => {
  return (
    <div className={styles.homePageLogoContainer}>
      <img src={twitterLogo} alt="Logo" className={styles.homePageLogo} />
    </div>
  );
};

export default HomePageLogo;
