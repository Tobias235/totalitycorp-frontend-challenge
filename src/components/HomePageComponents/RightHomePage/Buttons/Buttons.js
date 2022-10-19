import Button from "../../../utils/Button/Button";
import googleLogo from "../../../../assets/image/googleLogo.svg";
import appleLogo from "../../../../assets/image/appleLogo.svg";

import styles from "./Buttons.module.scss";
import ButtonsTextBorder from "./ButtonsTextBorder.js/ButtonsTextBorder";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Button
        text="Sign up with Google"
        img={googleLogo}
        alt="Google Logo"
        className={styles.googleButton}
      />
      <Button
        text="Sign up with Apple"
        img={appleLogo}
        alt="Apple Logo"
        className={styles.hover}
      />
      <ButtonsTextBorder />
      <Button
        text="Sign up with phone or email"
        className={`${styles.signUpMailPhone} ${styles.hover}`}
      />
    </div>
  );
};

export default Buttons;
