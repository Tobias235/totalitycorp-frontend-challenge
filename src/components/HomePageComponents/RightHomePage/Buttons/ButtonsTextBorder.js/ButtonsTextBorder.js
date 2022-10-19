import styles from "./ButtonsTextBorder.module.scss";

const ButtonsTextBorder = () => {
  return (
    <div className={styles.buttonsTextBorder}>
      <span className={styles.line}></span>
      <span>or</span>
      <span className={styles.line}></span>
    </div>
  );
};

export default ButtonsTextBorder;
