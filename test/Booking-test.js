import chai from "chai";
const expect = chai.expect;

import sampleData from "./sample-test-data";
import Booking from "../src/Booking";

describe("Booking", function() {
  let booking;

  beforeEach(function() {
    booking = new Booking("5fwrgu4i7k55hl6sz", 1, "2020/02/04", 1);
  });

  it("should be an instance of Booking", function() {
    expect(booking).to.be.an.instanceOf(Booking);
  });
});
