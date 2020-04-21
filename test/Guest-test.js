// import chai from "chai";
const chai = require("chai");
const expect = chai.expect;

import mockRoomData from "./mock-room-data";
import Guest from "../src/Guest";

describe("Guest", function() {
  let guest;
  let bookings;

  beforeEach(function() {
    guest = new Guest(
      {
        id: 1,
        name: "Leatha Ullrich"
      },
      bookings
    );

    bookings = [
      {
        id: "5fwrgu4i7k55hl6t8",
        userID: 1,
        date: "2020/02/05",
        roomNumber: 12,
        roomServiceCharges: []
      }
    ];
  });

  it("should be an instance of Guest", function() {
    expect(guest).to.be.an.instanceOf(Guest);
  });

  it("should have an id", function() {
    expect(guest.id).to.equal(1);
  });

  it("should have a name", function() {
    expect(guest.name).to.equal("Leatha Ullrich");
  });

  it("should have a username", function() {
    expect(guest.username).to.equal("customer1");
  });

  it("should have a password", function() {
    expect(guest.password).to.equal("overlook2020");
  });

  it("should return a first name", function() {
    expect(guest.getFirstName()).to.equal("Leatha");
  });

  it("should return guest bookings", function() {
    expect(guest.findBookings()).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6t8",
        userID: 1,
        date: "2020/02/05",
        roomNumber: 12,
        roomServiceCharges: []
      }
    ]);
  });

  it("should calculate the total amount spent", function() {
    expect(guest.calculateTotalSpending(mockRoomData)).to.equal(172.09);
  });
});
