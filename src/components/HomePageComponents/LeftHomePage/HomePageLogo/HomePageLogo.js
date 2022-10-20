import twitterLogoDark from "../../../../assets/image/twitterLogoDark.svg";

import styles from "./HomePageLogo.module.scss";

const HomePageLogo = () => {
  return (
    <div className={styles.homePageLogoContainer}>
      <img src={twitterLogoDark} alt="Logo" className={styles.homePageLogo} />
    </div>
  );
};

export default HomePageLogo;
