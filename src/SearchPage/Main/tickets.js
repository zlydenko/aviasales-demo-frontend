import rossiya from "./logo/rossiya.png";
import fly from "./logo/fly.png";
import nordwind from "./logo/nordwind.png";
import nordwindAnother from "./logo/nordwindAnother.png";
import redwings from "./logo/redwings.png";
import redwingsSmall from "./logo/redwingsSmall.png";
import redwingsSmallAnother from "./logo/redwingsSmallAnother.png";
import flySmall from "./logo/flySmall.png";

export default [
  {
    type: "cheepest",
    price: 7712,
    airlines: [rossiya],
    tickets: [
      {
        time: "00:05 — 03:05",
        duration: "5 ч",
        type: "Прямой"
      },
      {
        time: "10:35 — 17:10",
        duration: "4 ч 35 м",
        type: "Прямой"
      }
    ]
  },
  {
    type: "fastest",
    price: 9269,
    airlines: [fly],
    tickets: [
      {
        time: "07:30 — 09:50",
        duration: "4 ч 20 м",
        type: "Прямой"
      },
      {
        time: "11:20 — 17:35",
        duration: "4 ч 15 м",
        type: "CDG"
      }
    ]
  },
  {
    type: "best",
    price: 8029,
    airlines: [nordwind],
    tickets: [
      {
        time: "00:15 — 03:10",
        duration: "4 ч 55 м",
        type: "Прямой"
      },
      {
        time: "10:45 — 17:15",
        duration: "4 ч 30 м",
        type: "Прямой"
      }
    ]
  },
  {
    price: 8164,
    airlines: [nordwindAnother],
    tickets: [
      {
        time: "00:15 — 03:10",
        duration: "4 ч 55 м",
        type: "Прямой"
      },
      {
        time: "10:45 — 17:15",
        duration: "4 ч 30 м",
        type: "Прямой"
      }
    ]
  },
  {
    price: 8240,
    airlines: [redwings],
    tickets: [
      {
        time: "07:00 — 09:30",
        duration: "4 ч 30 м",
        type: "Прямой"
      },
      {
        time: "11:00 — 17:10",
        duration: "4 ч 10 м",
        type: "Прямой"
      }
    ]
  },
  {
    price: 9108,
    airlines: [redwingsSmall, redwingsSmallAnother],
    tickets: [
      {
        time: "00:05 — 03:05",
        duration: "5 ч",
        type: "Прямой"
      },
      {
        time: "11:00 — 17:10",
        duration: "4 ч 10 м",
        type: "Прямой"
      }
    ]
  },
  {
    price: 9485,
    airlines: [redwingsSmall, flySmall],
    tickets: [
      {
        time: "00:05 — 03:05",
        duration: "5 ч",
        type: "Прямой"
      },
      {
        time: "11:20 — 17:35",
        duration: "4 ч 15 м",
        type: "Прямой"
      }
    ]
  }
];
