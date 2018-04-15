import krasnodar from "./cities/krasnodar.png";
import barselona from "./cities/barselona.png";
import minvodi from "./cities/minvodi.png";
import saintpetersburg from "./cities/saintpetersburg.png";
import simferopol from "./cities/simferopol.png";
import sochi from "./cities/sochi.png";

import flagRu from "./flags/flag-ru.png";
import flagEs from "./flags/flag-es.png";

const destinationList = [
  {
    city: "Krasnodar",
    country: "Russia",
    price: 1212,
    date: 1521324000000,
    img: krasnodar,
    countryFlag: flagRu
  },
  {
    city: "Sochi",
    country: "Russia",
    price: 1334,
    date: 1522098000000,
    img: sochi,
    countryFlag: flagRu
  },
  {
    city: "Saint-Petersburg",
    country: "Russia",
    price: 1508,
    date: 1518991200000,
    img: saintpetersburg,
    countryFlag: flagRu
  },
  {
    city: "Mineralnie Vodi",
    country: "Russia",
    price: 2074,
    date: 1520892000000,
    img: minvodi,
    countryFlag: flagRu
  },
  {
    city: "Simferopol",
    country: "Russia",
    price: 2407,
    date: 1520892000000,
    img: simferopol,
    countryFlag: flagRu
  },
  {
    city: "Barselona",
    country: "Spain",
    price: 4247,
    date: 1521842400000,
    img: barselona,
    countryFlag: flagEs
  }
];

export default destinationList;
