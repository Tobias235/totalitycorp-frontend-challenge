import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import HomePageContainer from "./container/HomePageContainer";

function App() {
  return (
    <div className={styles.app}>
      <HomePageContainer />
      <Footer />
    </div>
  );
}

export default App;
