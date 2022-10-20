import Buttons from "./Buttons/Buttons";
import twitterLogoDark from "../../../assets/image/twitterLogoDark.svg";
import twitterLogoLight from "../../../assets/image/twitterLogoLight.svg";
import HomePageText from "./TextElements/HomePageText";
import ConditionText from "./ConditionText/ConditionText";
import ExistingAccount from "./ExistingAccount/ExisitingAccount";

import styles from "./RightHomePage.module.scss";

const RightHomePage = ({ mode }) => {
  const darkMode = mode === "dark" ? twitterLogoDark : twitterLogoLight;
  return (
    <div className={styles.rightHomePage}>
      <div className={styles.logoContainer}>
        <img src={darkMode} alt="Twitter Logo" className={styles.twitterLogo} />
      </div>
      <HomePageText mode={mode} />
      <Buttons mode={mode} />
      <ConditionText />
      <ExistingAccount mode={mode} />
    </div>
  );
};

export default RightHomePage;
