import chai from "chai";
const expect = chai.expect;

import Manager from "../src/Manager";
import mockBookingData from "./mock-booking-data";
import mockRoomData from "./mock-room-data";
import mockGuestData from "./mock-guest-data";

describe("Manager", function() {
  let manager;

  beforeEach(function() {
    manager = new Manager(1, "Lauren Lucero");
  });

  it("should be an instance of Manager", function() {
    expect(manager).to.be.an.instanceOf(Manager);
  });

  it("should have an id", function() {
    expect(manager.id).to.equal(1);
  });

  it("should have a name", function() {
    expect(manager.name).to.equal("Lauren Lucero");
  });

  it("should have a username", function() {
    expect(manager.username).to.equal("manager");
  });

  it("should have a password", function() {
    expect(manager.password).to.equal("overlook2020");
  });

  it("should calculate the total revenue for todays date", function() {
    let todaysDate = "2020/02/03";
    expect(
      manager.calculateTodaysRevenue(mockBookingData, mockRoomData, todaysDate)
    ).to.equal(840.41);
  });

  it("should calculate the percentage of rooms occupied for todays date", function() {
    let todaysDate = "2020/02/03";
    expect(
      manager.calculatePercentOccupiedToday(
        mockBookingData,
        mockRoomData,
        todaysDate
      )
    ).to.equal(12);
  });

  it("should search guests by name to view bookings and spending", function() {
    expect(
      manager.searchGuest(
        "Leatha Ullrich",
        mockGuestData,
        mockBookingData,
        mockRoomData
      )
    ).to.deep.equal({
      bookings: [
        {
          id: "5fwrgu4i7k55hl6t8",
          userID: 1,
          date: "2020/02/05",
          roomNumber: 12,
          roomServiceCharges: []
        }
      ],
      spending: 172.09
    });
  });
});
