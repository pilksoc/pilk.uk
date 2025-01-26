import { useMemo } from "react";

const messages = [
  {
    loc: "Basingstoke",
    message: "Local man dies of ligma, after missing their CrossCountry train",
  },
  {
    loc: "Reading",
    message:
      "Local youth is caught fare dodging, and is charged £923,123.20 by First Great Western",
  },
  {
    loc: "London Paddington",
    message:
      "Local woman attempts Reading to Shenfield via Crossrail. Attempt fails due to terminus at Paddington",
  },
  {
    loc: "Stratford",
    message:
      "Local man dies of old age after no international trains stop at Stratford International",
  },
  {
    loc: "Pyongyang",
    message:
      "Local residents still on escelator down to metro; will arrive in approximately 2 hours",
  },
  {
    loc: "Hounslow",
    message:
      "MISSING: Heathrow Terminal 1 - Contact police if you have any details",
  },
  {
    loc: "Coquelles Le Shuttle",
    message:
      "British geezer attempts to drive into Eurotunnel, and is apprehended by the police",
  },
  {
    loc: "Sheffield",
    message:
      "American lost t'up north after accidentally typing 'Sheffield' into Google Maps instead of 'Shenfield'",
  },
  {
    loc: "Amsterdam Centraal",
    message:
      "British geezer decides to save 50 cents by urinating on the road, and is apprehended by the police",
  },
  {
    loc: "Reading Green Park",
    message: "Businessman lost in the middle of nowhere",
  },
];

const useTheNews = () =>
  useMemo(() => messages[Math.floor(messages.length * Math.random())], []);

export { useTheNews };
