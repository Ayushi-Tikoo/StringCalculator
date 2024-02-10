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
  for (let i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i])) {
      sum += parseInt(numArray[i]);
    } else {
      throw new Error("Invalid input");
    }
  }
  return sum;
}

module.exports = stringAdd;