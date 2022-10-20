import Button from "../../../utils/Button/Button";
import styles from "./ExistingAccount.module.scss";

const ExistingAccount = ({ mode }) => {
  const darkMode = mode === "dark" ? styles.darkMode : styles.lightMode;
  return (
    <div className={styles.existingAccount}>
      <h4 className={darkMode}>Already have an account?</h4>
      <Button text="Sign in" className={styles.signInButton} />
    </div>
  );
};

export default ExistingAccount;
