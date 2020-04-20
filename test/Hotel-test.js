import chai from "chai";
const expect = chai.expect;

import Hotel from "../src/Hotel";
import mockBookingData from "./mock-booking-data";
import mockRoomData from "./mock-room-data";
import mockGuestData from "./mock-guest-data";

describe("Hotel", function() {
  let hotel;

  beforeEach(function() {
    hotel = new Hotel(new Date(), mockGuestData, mockRoomData, mockBookingData);
  });

  it("should be an instance of Hotel", function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it("should hold the guests", function() {
    expect(hotel.guests).to.equal(mockGuestData);
  });

  it("should hold the rooms", function() {
    expect(hotel.rooms).to.equal(mockRoomData);
  });

  it("should hold the bookings", function() {
    expect(hotel.bookings).to.equal(mockBookingData);
  });

  it("should get todays date", function() {
    hotel.getTodaysDate();
    expect(hotel.date).to.equal("2020/04/19");
  });

  it('should be able to get current logged in user', () => {
  expect(hotel.getCurrentUser(1)).to.deep.equal(
    {
      id: 1,
      name: "Leatha Ullrich"
    })
})

  it("should filter the room by type", function() {
    expect(hotel.filterRoomsByType("junior suite")).to.deep.equal([
      {
        number: 6,
        roomType: "junior suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 397.02
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26
      },
      {
        number: 17,
        roomType: "junior suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 328.15
      },
      {
        number: 18,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 2,
        costPerNight: 496.41
      }
    ]);
  });

  it("should get the rooms available for todays date", function() {
    expect(
      hotel.getAvailableRoomsByDate("2020/01/24", mockRoomData, mockBookingData)
    ).to.deep.equal([
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17
      },
      {
        number: 6,
        roomType: "junior suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 397.02
      },
      {
        number: 7,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 231.46
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26
      },
      {
        number: 9,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 200.39
      },
      {
        number: 10,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64
      },
      {
        number: 11,
        roomType: "single room",
        bidet: true,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 207.24
      },
      {
        number: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 172.09
      },
      {
        number: 13,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 423.92
      },
      {
        number: 15,
        roomType: "residential suite",
        bidet: false,
        bedSize: "full",
        numBeds: 1,
        costPerNight: 294.56
      },
      {
        number: 16,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 325.6
      },
      {
        number: 17,
        roomType: "junior suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 328.15
      },
      {
        number: 18,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 2,
        costPerNight: 496.41
      },
      {
        number: 19,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 374.67
      },
      {
        number: 20,
        roomType: "residential suite",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 343.95
      },
      {
        number: 21,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 429.32
      },
      {
        number: 22,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 350.31
      },
      {
        number: 23,
        roomType: "residential suite",
        bidet: false,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 176.36
      },
      {
        number: 25,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 305.85
      }
    ]);
  });
});
