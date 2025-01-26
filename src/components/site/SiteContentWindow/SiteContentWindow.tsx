import React, { ReactNode } from "react";
import * as styles from "./SiteContentWindow.module.scss";
import classNames from "classnames";

const SiteContentWindow = ({
  children,
  title = "",
  extension,
  fullWidth,
}: {
  children?: ReactNode;
  title?: string;
  extension?: string;
  fullWidth?: boolean;
}) => {
  const filename = title.replaceAll(" ", "_");

  return (
    <div
      className={classNames(styles.wrapper, { [styles.fullWidth]: fullWidth })}
    >
      <div className={styles.titlebar}>
        <div className={styles.iconBox}>
          <div className={styles.icon}></div>
        </div>
        <div className={styles.item}>
          {filename}
          <span aria-hidden="true">{extension}</span>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { SiteContentWindow };
