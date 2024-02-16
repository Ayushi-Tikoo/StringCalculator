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
    expect(() => stringAdd("2,3,null")).toThrow("Invalid input");
  });
});

describe("question 2", () => {
  test('Any amount of numbers separated by comma will return their sum', () => {
    expect(stringAdd("1,2,3,4,5")).toBe(15);
  });
  test('Any amount of large numbers separated by comma will return their sum', () => {
    expect(stringAdd("1000,200,39999900,400,50")).toBe(40001550);
  });
});

describe("question 3", () => {
  test('New lines between numbers will return correct sum for valid inputs', () => {
    expect(stringAdd("1\n2,3")).toBe(6);
  });
  
  test('Error is thrown for invalid input with comma followed by new line', () => {
    expect(() => stringAdd("1,\n")).toThrow("Invalid input");
  });
})

describe(("question 4"), () => {
  test('Correct sum is returned for valid input with custom delimiter', () => {
    expect(stringAdd("//,;\n1,;2,;3,;4,;5,;6,;7")).toBe(28);
  });
})

describe(("question 5"), () => {
  test('Negative numbers will throw an error displaying all negative numbers', () => {
    expect(() => stringAdd("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
  });
})

describe(("question 6"), () => {
  test('* delimiter should return products of numbers', () => {
    expect(stringAdd("//*\n1*2*3")).toBe(6);
  });
})