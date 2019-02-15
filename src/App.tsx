import React, { Component } from "react";
import logo from "./beer.svg";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>#engineeringontap</h1>
        </header>
        <div className={styles.dates}>
          <ul className={styles.list}>
            <li className={styles.listItem}>15. März 2019, mit Golo Roden</li>
            <li className={styles.listItem}>18. April 2019, How to become a better software engineer</li>
            <li className={styles.listItem}>17. Mai 2019, Going Serverless with Knative</li>
            <li className={styles.listItem}>21. Juni 2019, to be announced</li>
            <li className={styles.listItem}>19. Juli 2019, to be announced</li>
            <li className={styles.listItem}>16. August 2019, to be announced</li>
            <li className={styles.listItem}>20. September 2019, to be announced</li>
            <li className={styles.listItem}>18. Oktober 2019, to be announced</li>
            <li className={styles.listItem}>19. November 2019, to be announced</li>
          </ul>o
        </div>
      </div>
    );
  }
}

export default App;
