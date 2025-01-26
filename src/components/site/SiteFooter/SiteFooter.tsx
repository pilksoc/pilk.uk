import * as React from "react";
import * as styles from "./SiteFooter.module.scss";
import classNames from "classnames";
import iexplore from "./iexplore.gif";
import netscape from "./netscape.gif";
import transnow from "./transnow.gif";
import { useTheNews } from "../../../hooks/useTheNews";

const SiteFooter = ({ absolute }: { absolute?: boolean }) => {
  const { loc, message } = useTheNews();
  return (
    <footer
      className={classNames(styles.wrapper, { [styles.absolute]: absolute })}
    >
      <div className={styles.container}>
        <div>
          <p>Pilksoft Interactive Online</p>
          <p>
            <strong>{loc}:</strong> {message}
          </p>
        </div>
        <div className={styles.links}>
          <a target="_blank" href="https://www.microsoft.com/ie/">
            <img src={iexplore} />
          </a>
          <a target="_blank" href="https://www.mozilla.com/">
            <img src={netscape} />
          </a>
          <a target="_blank" href="https://www.rust-lang.org/">
            <img src={transnow} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
