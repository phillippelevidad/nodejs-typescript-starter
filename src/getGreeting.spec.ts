import { getGreeting } from "./getGreeting";
import { expect } from "chai";

describe("getGreeting", () => {
  it("should return Hello, John!", () => {
    expect(getGreeting("John")).to.equal("Hello, John!");
  });
});
