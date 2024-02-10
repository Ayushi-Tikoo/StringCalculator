// calculator
// ASSUMPTION: The stringAdd function will be called with comma seprated numbers
// passed as string

function stringAdd(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let numbersString = numbers;

  // Check if the input string starts with a custom delimiter definition
  if (numbers.startsWith("//")) {
    const delimiterIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterIndex);
    numbersString = numbers.substring(delimiterIndex + 1);
  }

  const numArray = numbersString.split(new RegExp(`[${delimiter}\\n]+`));
  let sum = 0;
  const negatives = []
  for (let i = 0; i < numArray.length; i++) {
    const num = parseInt(numArray[i]);
    if (num < 0) {
      negatives.push(num);
    } else if (num >= 0) {
      sum += num;
    } else {
      throw new Error("Invalid input");
    }
  }
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return sum;
}

module.exports = stringAdd;