import chai from "chai";
const expect = chai.expect;

import sampleData from "./sample-test-data";
import Room from "../src/Room";

describe("Room", function() {
  let room;

  beforeEach(function() {
    room = new Room(1, "residential suite", true, "queen", 1, 358.4);
  });

  it("should be an instance of Room", function() {
    expect(room).to.be.an.instanceOf(Room);
  });
});
