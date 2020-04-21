import chai from "chai";
const expect = chai.expect;

import Booking from "../src/Booking";

describe("Booking", function() {
  let booking;

  beforeEach(function() {
    booking = new Booking({
      id: "5fwrgu4i7k55hl6sz",
      userID: 9,
      date: "2020/02/04",
      roomNumber: 15,
      roomServiceCharges: []
    });
  });

  it("should be an instance of Booking", function() {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it("should return booking id", function() {
    expect(booking.id).to.equal("5fwrgu4i7k55hl6sz");
  });

  it("should return the booking userID", function() {
    expect(booking.userID).to.equal(9);
  });

  it("should return the booking date", function() {
    expect(booking.date).to.equal("2020/02/04");
  });

  it("should return the booking room number", function() {
    expect(booking.roomNumber).to.equal(15);
  });

  it("should return the booking room service charges", function() {
    expect(booking.roomServiceCharges).to.deep.equal([]);
  });
});
