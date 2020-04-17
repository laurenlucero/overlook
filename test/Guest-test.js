import chai from "chai";
const expect = chai.expect;

import sampleData from "./sample-test-data";
import Guest from "../src/Guest";

describe("Guest", function() {
  let guest;

  beforeEach(function() {
    guest = new Guest(1, "Leatha Ullrich");
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

  it("should return a first name", function() {
    expect(guest.getFirstName()).to.equal("Leatha");
  });
});
