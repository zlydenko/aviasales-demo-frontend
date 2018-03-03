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
    proposals: [
      {
        ticketSeller: 1,
        price: 7712
      }
    ],
    airlines: [rossiya],
    baggage: [
      {
        handLuggage: 5,
        baggage: 15
      }
    ],
    charter: true,
    to: {
      departure: {
        timestamp: 1519423500000,
        city: "Moscow",
        IATA: "VKO"
      },
      arrival: {
        timestamp: 1519434300000,
        city: "Barselona",
        IATA: "BCN"
      },
      duration: 300
    },
    from: {
      departure: {
        timestamp: 1520066100000,
        city: "Barselona",
        IATA: "BCN"
      },
      arrival: {
        timestamp: 1520089800000,
        city: "Moscow",
        IATA: "SVO"
      },
      duration: 275
    }
  },
  {
    type: "best",
    proposals: [
      {
        ticketSeller: 2,
        price: 8029
      }
    ],
    airlines: [nordwind],
    baggage: [
      {
        handLuggage: 5,
        baggage: null
      }
    ],
    charter: false,
    to: {
      departure: {
        timestamp: 1519424100000,
        city: "Moscow",
        IATA: "VKO"
      },
      arrival: {
        timestamp: 1519434600000,
        city: "Barselona",
        IATA: "BCN"
      },
      duration: 295
    },
    from: {
      departure: {
        timestamp: 1520066700000,
        city: "Barselona",
        IATA: "BCN"
      },
      arrival: {
        timestamp: 1520090100000,
        city: "Moscow",
        IATA: "SVO"
      },
      duration: 270
    }
  },
  {
    proposals: [
      {
        ticketSeller: 3,
        price: 8164
      }
    ],
    airlines: [nordwindAnother],
    baggage: [
      {
        handLuggage: 5,
        baggage: null
      },
      {
        handLuggage: 5,
        baggage: 12,
        surcharge: 136
      }
    ],
    charter: true,
    to: {
      departure: {
        timestamp: 1519424100000,
        city: "Moscow",
        IATA: "VKO"
      },
      arrival: {
        timestamp: 1519434600000,
        city: "Barselona",
        IATA: "BCN"
      },
      duration: 295
    },
    from: {
      departure: {
        timestamp: 1520066700000,
        city: "Barselona",
        IATA: "BCN"
      },
      arrival: {
        timestamp: 1520090100000,
        city: "Moscow",
        IATA: "SVO"
      },
      duration: 270
    }
  },
  {
    proposals: [
      {
        ticketSeller: 2,
        price: 8164
      },
      {
        ticketSeller: 1,
        price: 8302
      },
      {
        ticketSeller: 3,
        price: 8376
      },
      {},
      {},
      {}
    ],
    airlines: [redwings],
    baggage: [
      {
        handLuggage: 10,
        baggage: null
      },
      {
        handLuggage: 10,
        baggage: 20,
        surcharge: 267
      }
    ],
    charter: true,
    to: {
      departure: {
        timestamp: 1519448400000,
        city: "Moscow",
        IATA: "VKO"
      },
      arrival: {
        timestamp: 1519457400000,
        city: "Barselona",
        IATA: "BCN"
      },
      duration: 270
    },
    from: {
      departure: {
        timestamp: 1520067600000,
        city: "Barselona",
        IATA: "BCN"
      },
      arrival: {
        timestamp: 1520089800000,
        city: "Moscow",
        IATA: "SVO"
      },
      duration: 250
    }
  },
  {
    proposals: [
      {
        ticketSeller: 1,
        price: 9108
      }
    ],
    airlines: [redwingsSmall, redwingsSmallAnother],
    baggage: [
      {
        handLuggage: 10,
        baggage: 15
      }
    ],
    charter: true,
    to: {
      departure: {
        timestamp: 1519423500000,
        city: "Moscow",
        IATA: "VKO"
      },
      arrival: {
        timestamp: 1519434300000,
        city: "Barselona",
        IATA: "BCN"
      },
      duration: 300
    },
    from: {
      departure: {
        timestamp: 1520067600000,
        city: "Barselona",
        IATA: "BCN"
      },
      arrival: {
        timestamp: 1520089800000,
        city: "Moscow",
        IATA: "SVO"
      },
      duration: 250
    }
  },
  {
    type: "fastest",
    proposals: [
      {
        ticketSeller: 4,
        price: 9269,
        ticketsLeft: 4
      },
      {
        ticketSeller: 5,
        price: 9275
      },
      {
        ticketSeller: 2,
        price: 9587
      },
      {},
      {},
      {},
      {}
    ],
    airlines: [fly],
    baggage: [
      {
        handLuggage: undefined,
        baggage: 20
      }
    ],
    charter: true,
    to: {
      departure: {
        timestamp: 1519450200000,
        city: "Moscow",
        IATA: "VKO"
      },
      arrival: {
        timestamp: 1519458600000,
        city: "Barselona",
        IATA: "BCN"
      },
      duration: 260
    },
    from: {
      departure: {
        timestamp: 1520068800000,
        city: "Barselona",
        IATA: "BCN"
      },
      arrival: {
        timestamp: 1520091300000,
        city: "Moscow",
        IATA: "SVO"
      },
      duration: 255
    }
  },
  {
    proposals: [
      {
        ticketSeller: 1,
        price: 9485
      }
    ],
    airlines: [redwingsSmallAnother, flySmall],
    baggage: [
      {
        handLuggage: undefined,
        baggage: 15
      }
    ],
    charter: true,
    to: {
      departure: {
        timestamp: 1519423500000,
        city: "Moscow",
        IATA: "VKO"
      },
      arrival: {
        timestamp: 1519434300000,
        city: "Barselona",
        IATA: "BCN"
      },
      duration: 300
    },
    from: {
      departure: {
        timestamp: 1520068800000,
        city: "Barselona",
        IATA: "BCN"
      },
      arrival: {
        timestamp: 1520091300000,
        city: "Moscow",
        IATA: "SVO"
      },
      duration: 255
    }
  }
];
