import * as React from "react";
import { SiteContainer } from "../../../components/site/SiteContainer/SiteContainer";
import { TemplatePilk } from "../../../templates/Pilk/Pilk";
import danny from "./pilkhack2025.jpg";
import { SiteSEO } from "../../../components/site/SiteSEO/SiteSEO";

const index = () => {
  return (
    <TemplatePilk>
      <img src={danny} style={{ width: "100%", height: "150px" }} />
      <SiteContainer bgColour="white">
        <div className="section-container">
          <div className="section hero">
            <div className="hero-content">
              <h1>Pilksoft Game Jam 2025</h1>
              <p>Friday 17th to Sunday 19th January 2025</p>
            </div>
          </div>
          <div className="section details">
            <div className="what">
              <h2>What is this?</h2>
              <p>
                Pilksoft Game Jam is your foray into games development, open to
                friends of Pilksoft Interactive overnight in the Pilk Coding
                Bunker(TM). Spend 24 hours coding the night away, go to the pub,
                and make the best game you can!
              </p>
            </div>
            <a
              className="interest"
              href="https://github.com/orgs/pilksoc/discussions/1"
            >
              Place your interest
            </a>
          </div>
          <div className="section details">
            <div className="what">
              <h2>Location</h2>
              <p>
                We are within 5 minutes walking distance of Pizza Express
                Reading, and 10 minutes of the main train station. We recommend
                you travel with Crossrail, CrossCountry, or other train service
                that makes you angry.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.2986190937695!2d-0.9716425128286368!3d51.453405965492955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769b160c414faf%3A0x14cf6214e2efea6!2sPizza%20Express!5e1!3m2!1sen!2suk!4v1733712971952!5m2!1sen!2suk"
              height="450"
              style={{ width: "100%", maxWidth: "600px", border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="section details">
            <div className="what">
              <h2>Frequently Asked Questions</h2>
              <dl>
                <dt>Who can attend?</dt>
                <dd>
                  Friends of friends (of friends) of members of Pilksoft
                  Interactive On-Line.
                </dd>

                <dt>Can I expense my trip to Reading?</dt>
                <dd>
                  All journeys made via Reading Buses from between the 16th
                  January and the 20th January can be expensed. Ask the
                  organisers for more information
                </dd>

                <dt>Can I sleep at the event?</dt>
                <dd>
                  Yes - Bring your own sleeping equipment, or make arrangements
                  at a nearby hotel. We strongly encourage all participants to
                  get enough sleep to be able to make the trip home after the
                  event.
                </dd>

                <dt>Can I start before the event?</dt>
                <dd>
                  As this is a friends only event, we will strongly discourage
                  you from starting beforehand, as we will hate you and your
                  guts if we find out. Feel free to think of ideas beforehand,
                  but no starting on it!
                </dd>

                <dt>What should I bring?</dt>
                <dd>
                  Bring sleeping equipment (or hotel arrangements), a laptop, a
                  way to power your laptop, a DECT phone, and a CAT5/6/6A cable.
                  Wi-Fi is available, but may be susceptible to too much traffic
                  on the network.
                </dd>

                <dt>Can I bring my own food?</dt>
                <dd>
                  Feel free to bring your own food. Fridge/freezer space may be
                  limited, so ask beforehand. Ovens, microwaves and gas hobs are
                  available on site for use.
                </dd>

                <dt>
                  Can I bring a super bright laser pointer and shine it at
                  someone's eyes?
                </dt>
                <dd>No please don't</dd>

                <dt>Can I bring a knife?</dt>
                <dd>
                  Please don't bring knives to any event. We encourage you to
                  dispose of your knives in amnesty bins. See the
                  <a
                    href="https://www.reading.gov.uk/crime-and-safety/knife-crime/"
                    target="_blank"
                  >
                    Reading Borough Council
                  </a>
                  website for more information.
                </dd>

                <dt>Can I bring a gun?</dt>
                <dd>I'm calling the police.</dd>

                <dt>
                  How many team members does it take to change a light bulb?
                </dt>
                <dd>
                  A product owner, a business analyst, at least 10 users from
                  the business for UAT, 4 software engineers, 1 IT guy and a
                  fucktonne of coffee.
                </dd>

                <dt>Will I drown in the Kennet and Avon canal?</dt>
                <dd>
                  Please treat the canal and it's other users with respect by
                  not messing around the canal.
                </dd>

                <dt>
                  If I want to travel to Swindon from Reading, what platform
                  would I need to use to catch a Great Western Railway train?
                </dt>
                <dd>Platform 9 or 10.</dd>

                <dt>
                  Am I allowed to use television receiving equipment on site?
                </dt>
                <dd>
                  We have a Television Licence for use on-site. Xbox One TV
                  tuners are available for use via TVHeadend.
                </dd>

                <dt>Where can I park?</dt>
                <dd>
                  We don't advise people to drive to Reading, as parking costs a
                  million pounds. Take the train if possible.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </SiteContainer>
    </TemplatePilk>
  );
};

export default index;

export const Head = () => (
  <SiteSEO
    options={{
      title: "PilkHack 2025",
      description: "Game Jam",
    }}
  />
);
