import React, { ReactNode } from "react";
import * as styles from "./SiteContainer.module.scss";
import classNames from "classnames";

const heightStyle = {
  full: styles.full,
  large: styles.large,
  "": "",
} as const;

const bgColourStyle = {
  "1": styles.bg1,
  "2": styles.bg2,
  "3": styles.bg3,
  white: styles.bgWhite,
  "": "",
} as const;

const SiteContainer = ({
  children,
  height = "",
  bgColour = "",
}: {
  children?: ReactNode;
  height?: keyof typeof heightStyle;
  bgColour?: keyof typeof bgColourStyle;
}) => {
  return (
    <div className={bgColourStyle[bgColour]}>
      <div className={classNames(styles.container, heightStyle[height])}>
        {children}
      </div>
    </div>
  );
};

export { SiteContainer };
