import chai from "chai";
const expect = chai.expect;

import sampleData from "./sample-test-data";
import Manager from "../src/Manager";

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
    expect(manager.name).to.equal("Lauren Lucero")
  });

});
