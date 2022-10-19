import HomePageLogo from "../HomePageLogo/HomePageLogo";
import styles from "./HomePageBackground.module.scss";

const HomePageBackground = () => {
  return (
    <div className={styles.homePageBackground}>
      <HomePageLogo />
    </div>
  );
};

export default HomePageBackground;
