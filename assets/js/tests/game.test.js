/**
 * @jest-environment jsdom
 */

const {
  expect
} = require("@jest/globals");
const {
  beforeAll
} = require("jest-circus");
const {
  describe
} = require("yargs");

beforeAll(() => {
  let fs = require("fs");
  let fileContent = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContent);
  document.close();
})

describe("game object contains correct keys", () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  });
});