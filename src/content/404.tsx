import * as React from "react";
import { PageJumbotron } from "../components/page/PageJumbotron/PageJumbotron";
import { SiteContainer } from "../components/site/SiteContainer/SiteContainer";
import { SiteContentWindow } from "../components/site/SiteContentWindow/SiteContentWindow";
import { TemplatePilk } from "../templates/Pilk/Pilk";
import { FlyingToasters } from "../components/fun/FlyingToasters/FlyingToasters";

const index = () => {
  return (
    <TemplatePilk absolute>
      <FlyingToasters />
      <SiteContainer height="full">
        <SiteContentWindow title="Error" extension=".ini" fullWidth>
          <PageJumbotron
            title="Not Found"
            subtitle="Check that the URL has not been misspelt."
          />
        </SiteContentWindow>
      </SiteContainer>
    </TemplatePilk>
  );
};

export default index;
