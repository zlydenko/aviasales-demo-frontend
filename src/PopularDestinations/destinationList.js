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
    city: "Краснодар",
    country: "Россия",
    price: 1212,
    date: "18 марта",
    img: krasnodar,
    countryFlag: flagRu
  },
  {
    city: "Сочи (Адлер)",
    country: "Россия",
    price: 1334,
    date: "27 марта",
    img: sochi,
    countryFlag: flagRu
  },
  {
    city: "Санкт-Петербург",
    country: "Россия",
    price: 1508,
    date: "19 февраля",
    img: saintpetersburg,
    countryFlag: flagRu
  },
  {
    city: "Минеральные Воды",
    country: "Россия",
    price: 2074,
    date: "13 марта",
    img: minvodi,
    countryFlag: flagRu
  },
  {
    city: "Симферополь (Крым)",
    country: "Россия",
    price: 2407,
    date: "13 марта",
    img: simferopol,
    countryFlag: flagRu
  },
  {
    city: "Барселона",
    country: "Испания",
    price: 4247,
    date: "24 марта",
    img: barselona,
    countryFlag: flagEs
  }
];

export default destinationList;
