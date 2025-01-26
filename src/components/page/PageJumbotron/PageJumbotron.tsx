import React, { ReactNode } from "react";
import * as styles from "./PageJumbotron.module.scss";

const PageJumbotron = ({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}) => {
  return (
    <div className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {children}
    </div>
  );
};

export { PageJumbotron };
