import styles from "./HomePageText.module.scss";

const HomePageText = ({ mode }) => {
  const darkMode = mode === "dark" ? styles.darkMode : styles.lightMode;
  return (
    <div className={`${styles.homePageText} ${darkMode}`}>
      <h1>Happening now</h1>
      <h3>Join Twitter today.</h3>
    </div>
  );
};

export default HomePageText;
