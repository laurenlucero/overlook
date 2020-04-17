import chai from "chai";
const expect = chai.expect;

import sampleData from "./sample-test-data";
import Hotel from "../src/Hotel";

describe("Hotel", function() {
  let hotel;
  let rooms;
  let bookings;

  beforeEach(function() {
    hotel = new Hotel(rooms, bookings, "2020/02/04");
  });

  it("should be an instance of Hotel", function() {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });
});
