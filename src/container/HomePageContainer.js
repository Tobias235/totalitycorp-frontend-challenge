import LeftHomePage from "../components/HomePageComponents/LeftHomePage/LeftHomePage";
import RightHomePage from "../components/HomePageComponents/RightHomePage/RightHomePage";

import styles from "./HomePageContainer.module.scss";

const HomePageContainer = ({ mode }) => {
  return (
    <div className={styles.homePageContainer}>
      <LeftHomePage />
      <RightHomePage mode={mode} />
    </div>
  );
};

export default HomePageContainer;
