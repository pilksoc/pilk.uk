import React from "react";
import * as styles from "./PilkIsland.module.scss";
import classNames from "classnames";
import island from "./PilkIsland.png";

const PilkIsland = () => {
  return (
    <div className={styles.pilkIsland}>
      <img
        className={styles.pilkIslandPicture}
        src={island}
        alt="Welcome to Pilk Island"
      />
      <a
        className={classNames([styles.pilkIslandLink, styles.pilkIslandLink1])}
        href="#about"
        title="Learn more about Pilksoft Interactive On-Line"
      >
        Who are we?
      </a>
      <a
        className={classNames([styles.pilkIslandLink, styles.pilkIslandLink2])}
        href="#software"
        title="Join us in the 'fun zone' with our games!"
      >
        Pilk Games
      </a>
      <a
        className={classNames([styles.pilkIslandLink, styles.pilkIslandLink3])}
        href="#software"
        title="Software Solutions"
      >
        Pilk Software
      </a>
      <a
        className={classNames([styles.pilkIslandLink, styles.pilkIslandLink4])}
        href="#news"
        title="Blog"
      >
        News Centre
      </a>
    </div>
  );
};

export { PilkIsland };
