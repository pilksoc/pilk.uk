import * as React from "react";
import { SiteHeader } from "../../components/site/SiteHeader/SiteHeader";
import { SiteFooter } from "../../components/site/SiteFooter/SiteFooter";
import "../../css/pilk/index.scss";
import "@fontsource/kanit";

const TemplatePilk = ({
  children,
  absolute,
}: {
  children?: React.ReactNode;
  absolute?: boolean;
}) => {
  return (
    <div className="pilk">
      <SiteHeader absolute={absolute} />
      {children}
      <SiteFooter />
    </div>
  );
};

export { TemplatePilk };
