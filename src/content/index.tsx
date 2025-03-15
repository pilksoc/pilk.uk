import * as React from "react";
import { PageJumbotron } from "../components/page/PageJumbotron/PageJumbotron";
import { SiteContainer } from "../components/site/SiteContainer/SiteContainer";
import { SiteContentWindow } from "../components/site/SiteContentWindow/SiteContentWindow";
import { TemplatePilk } from "../templates/Pilk/Pilk";
import { FlyingToasters } from "../components/fun/FlyingToasters/FlyingToasters";
import { Link } from "gatsby";
import { PilkIsland } from "../components/fun/PilkIsland/PilkIsland";
import thinking from "../assets/thinking.gif";
import floppies from "../assets/floppies.gif";
import share from "../assets/share.gif";
import { SiteSEO } from "../components/site/SiteSEO/SiteSEO";

const index = () => {
  return (
    <TemplatePilk absolute>
      <FlyingToasters />
      <SiteContainer height="full">
        <SiteContentWindow title="About Us" extension=".pptx" fullWidth>
          <PageJumbotron
            title="Pilk up the Jam"
            subtitle="We're a group of software developers rallying around the combination of soda and milk."
          >
            <PilkIsland />
          </PageJumbotron>
        </SiteContentWindow>
      </SiteContainer>
      <SiteContainer height="large" bgColour="3">
        <SiteContentWindow title="pilk" extension=".flipnote">
          <h2 id="about">What is Pilk?</h2>
          <p>
            Pilk is a combination of Pepsi and Milk. The Pilk Society(TM) is a
            group of Pilk enjoyers, based in the south of England, who enjoy all
            milk based sodas, including but not limited to...
          </p>
          <ul>
            <li>Pilk</li>
            <li>Milkis</li>
            <li>Calpis</li>
          </ul>
          <p>We enjoy making software</p>
        </SiteContentWindow>
      </SiteContainer>
      <SiteContainer height="large" bgColour="2">
        <SiteContentWindow title="events" extension=".exe">
          <h2 id="news">Events List</h2>
          <table border={1}>
            <tbody>
              <tr>
                <td>15th March 2025</td>
                <td>
                  Visit Josh in Chest Hair<br />
                  <i>You know, Chest Hair, near the land of the consonant.</i>
                </td>
              </tr>
              <tr>
                <td>4th January 2025</td>
                <td>
                  cocktail party new years good music good vibes BRING UR
                  FRIENDS we need maximum people we need maximum Boogie
                </td>
              </tr>
              <tr>
                <td>17th-19th January 2025</td>
                <td>
                  PilkHack 2025
                  <p>
                    <Link to="/hack/2025">Come hack with us...</Link>
                  </p>
                </td>
              </tr>
              <tr>
                <td>30th May-2nd June 2024</td>
                <td>
                  PilkSoft Interactive will be landing on Electromagnetic Field
                  2024
                  <p>
                    We will be setting up our quaint little Pilk village, as
                    well as...
                  </p>
                  <ul>
                    <li>Fax Machine @ 7445 (PILK)</li>
                    <li>ScotRail Apologies Hotline @ 7550 (PLK0)</li>
                    <li>
                      Multiple varieties of milk, both plant and animal based
                    </li>
                    <li>Pepsi Max</li>
                    <li>Fortune Cookies</li>
                    <li>Cursed Sony Vaio with an nVidia GT610 eGPU</li>
                    <li>Cursed Dell Latiude D610 as a Fax Machine</li>
                  </ul>
                  Learn more about our village:{" "}
                  <a href="https://wiki.emfcamp.org/2024/wiki/Pilk">
                    https://wiki.emfcamp.org/2024/wiki/Pilk
                  </a>
                </td>
              </tr>
              <tr>
                <td>2nd-3rd March 2024</td>
                <td>
                  The Pilk Gang have congregated upon Edinburgh for Hack the
                  Brugh X (
                  <a href="https://hacktheburgh.com/">
                    https://hacktheburgh.com/
                  </a>
                  ) 2024
                </td>
              </tr>
              <tr>
                <td>20th February 2024</td>
                <td>
                  The Pilk Society are excited to announce our attendance at
                  Electromagnetic Field (
                  <a href="http://www.emfcamp.org">http://www.emfcamp.org</a>)
                  2024
                  <br />
                  More to be announced soon
                </td>
              </tr>
              <tr>
                <td>16th December 2023</td>
                <td>
                  PilkHub(TM) is created to house our software projects - See
                  more at{" "}
                  <a href="https://git.pilk.uk/explore">
                    https://git.pilk.uk/explore
                  </a>
                </td>
              </tr>
              <tr>
                <td>13th November 2023</td>
                <td>
                  Winchester Winnall McDonalds is about to open soon. We are
                  very excited.
                </td>
              </tr>
              <tr>
                <td>12th October 2023</td>
                <td>
                  We are saddened to look unto Wikipedia and find out that the
                  hit ITV One television show, &quot;Heathrow: Britain&#39;s
                  Busiest Airport&quot; has been discontinued after eight series
                  from 2015 to 2022.
                  <p>
                    Please fill in our petition, entitled &quot;Save Airside
                    Ian&quot;, and post it to:
                  </p>
                  <p>
                    FREEPOST BUILD RUNWAY THREE
                    <br />
                    HUNGERFORD
                    <br />
                    N0WH ERE
                  </p>
                </td>
              </tr>
              <tr>
                <td>30th September 2023</td>
                <td>
                  Leo, Leo and Danny create a new programme for playing the
                  Fallout 4 hacking game in a UEFI pre-boot environment
                  <p>
                    See more on GitHub:{" "}
                    <a href="https://github.com/pilksoc/uefi-hacking-game">
                      https://github.com/pilksoc/uefi-hacking-game
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>???</td>
                <td>
                  Danny joins the society by trying his first shot of Pepsi and
                  Milk, at a 50/50 combination.
                  <br />
                  He has since been hospitalised. We wish him well (joke)
                </td>
              </tr>
            </tbody>
          </table>
        </SiteContentWindow>
      </SiteContainer>
      <SiteContainer height="large" bgColour="1">
        <SiteContentWindow title="Program Manager" extension=".exe">
          <h2 id="software">Pilksoft Software</h2>
          <table border={1} width="100%">
            <tbody>
              <tr>
                <td width="108">
                  <img src={thinking} width="129" height="76" />
                </td>
                <td>
                  <b>CosmicKube</b>
                  <p>
                    I don&#39;t know what it is because I&#39;m not at the
                    event. Someone fill me in on this
                  </p>
                  <ul>
                    <li>
                      GitHub:{" "}
                      <a href="https://github.com/pilksoc/CosmicKube">
                        https://github.com/pilksoc/CosmicKube
                      </a>
                    </li>
                    <li>
                      DevPost:{""}
                      <a href="https://devpost.com/software/627535">
                        https://devpost.com/software/627535
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td width="108">
                  <img src={floppies} width="178" height="191" />
                </td>
                <td>
                  <b>UEFI Hacking Game</b>
                  <p>
                    Forgot your BIOS password and can&#39;t boot into Windows 7?
                    With the (inspired by) Fallout 4 hacking game, you can break
                    your way back into your Windows 7 installation.
                  </p>
                  <ul>
                    <li>
                      GitHub:{" "}
                      <a href="https://git.pilk.uk/pilk/uefi-hacking-game">
                        https://github.com/pilksoc/uefi-hacking-game
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td width="108" align="center">
                  <img src={share} width="143" height="245" />
                </td>

                <td>
                  <b>pilk.uk Web-Site</b>
                  <p>
                    Can&#39;t code? Don&#39;t worry - You too can edit The Pilk
                    Society website with a WYSIWYG interface yourself!
                  </p>
                  <ul>
                    <li>
                      GitHub:{" "}
                      <a href="https://github.com/pilksoc/pilk.uk">
                        https://github.com/pilksoc/pilk.uk
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </SiteContentWindow>
      </SiteContainer>
    </TemplatePilk>
  );
};

export default index;

export const Head = () => (
  <SiteSEO
    options={{ description: "We love mixing together Pepsi and Milk." }}
  />
);
