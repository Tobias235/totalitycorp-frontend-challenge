import styles from "./ConditionText.module.scss";

const ConditionText = () => {
  return (
    <div className={styles.conditionContainer}>
      <span className={styles.signUpConditions}>
        By signing up, you agree to the{" "}
        <a href="https://twitter.com/en/tos">Terms of Service</a> and{" "}
        <a href="https://twitter.com/en/privacy">Privacy Policy</a>, including{" "}
        <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
          Cookie Use.
        </a>
      </span>
    </div>
  );
};

export default ConditionText;
