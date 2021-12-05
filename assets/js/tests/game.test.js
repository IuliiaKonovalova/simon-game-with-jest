/**
 * @jest-environment jsdom
 */

const {
  beforeAll
} = require("jest-circus");

beforeAll(() => {
  let fs = require("fs");
  let fileContent = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContent);
  document.close();
})