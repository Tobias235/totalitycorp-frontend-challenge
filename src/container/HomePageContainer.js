import LeftHomePage from "../components/HomePageComponents/LeftHomePage/LeftHomePage";
import RightHomePage from "../components/HomePageComponents/RightHomePage/RightHomePage";

import styles from "./HomePageContainer.module.scss";

const HomePageContainer = () => {
  return (
    <div className={styles.homePageContainer}>
      <LeftHomePage />
      <RightHomePage />
    </div>
  );
};

export default HomePageContainer;
