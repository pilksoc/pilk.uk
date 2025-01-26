import * as React from "react";
import * as styles from "./SiteHeader.module.scss";
import classNames from "classnames";
import { Link } from "gatsby";

const SiteHeader = ({ absolute }: { absolute?: boolean }) => {
  return (
    <div
      className={classNames(styles.wrapper, { [styles.absolute]: absolute })}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            Pilksoft Interactive
          </Link>
        </div>
        <div className={styles.links}>
          {/* <span>Link 1</span>
          <span>Link 2</span>
          <span>Link 3</span> */}
        </div>
      </div>
    </div>
  );
};

export { SiteHeader };
