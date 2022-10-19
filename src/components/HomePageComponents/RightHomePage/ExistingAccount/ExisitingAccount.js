import Button from "../../../utils/Button/Button";
import styles from "./ExistingAccount.module.scss";

const ExistingAccount = () => {
  return (
    <div className={styles.existingAccount}>
      <h4>Already have an account?</h4>
      <Button text="Sign in" className={styles.signInButton} />
    </div>
  );
};

export default ExistingAccount;
