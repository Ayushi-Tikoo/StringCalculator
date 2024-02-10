const stringAdd = require('./calculator');

describe("question 1", () => {
  test('When empty string is passed it will return 0', () => {
    expect(stringAdd("")).toBe(0);
  });

  test('Single number will return itself', () => {
    expect(stringAdd("5")).toBe(5);
  });

  test('Comma seprated 2 numbers will return their sum', () => {
    expect(stringAdd("2,3")).toBe(5);
  });

  test('Two number seprated by comma and passed some garbage value', () => {
    expect(stringAdd("2,3,null")).toBe(5);
  });
});
