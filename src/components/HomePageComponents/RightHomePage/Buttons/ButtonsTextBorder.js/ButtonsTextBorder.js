import styles from "./ButtonsTextBorder.module.scss";

const ButtonsTextBorder = ({ mode }) => {
  const darkMode = mode === "dark" ? styles.darkMode : styles.lightMode;
  return (
    <div className={`${styles.buttonsTextBorder} ${darkMode}`}>
      <span className={styles.line}></span>
      <span>or</span>
      <span className={styles.line}></span>
    </div>
  );
};

export default ButtonsTextBorder;
