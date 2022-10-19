import Buttons from "./Buttons/Buttons";
import styles from "./RightHomePage.module.scss";
import twitterLogo from "../../../assets/image/twitterLogo.svg";
import HomePageText from "./TextElements/HomePageText";
import ConditionText from "./ConditionText/ConditionText";
import ExistingAccount from "./ExistingAccount/ExisitingAccount";

const RightHomePage = () => {
  return (
    <div className={styles.rightHomePage}>
      <img
        src={twitterLogo}
        alt="Twitter Logo"
        className={styles.twitterLogo}
      />
      <HomePageText />
      <Buttons />
      <ConditionText />
      <ExistingAccount />
    </div>
  );
};

export default RightHomePage;
