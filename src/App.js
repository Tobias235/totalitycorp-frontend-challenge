import { useState, useEffect } from "react";

import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import HomePageContainer from "./container/HomePageContainer";

function App() {
  const [mode, setMode] = useState();

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        let mode = e.matches ? "dark" : "light";
        setMode(mode);
        localStorage.setItem("darkMode", mode);
      });
  }, []);

  useEffect(() => {
    const mode = localStorage.getItem("darkMode");
    console.log(mode);
    setMode(mode);
  }, []);

  const darkMode = mode === "dark" ? styles.darkMode : styles.lightMode;
  return (
    <div className={darkMode}>
      <HomePageContainer mode={mode} />
      <Footer />
    </div>
  );
}

export default App;
