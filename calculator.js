// calculator
// ASSUMPTION: The stringAdd function will be called with comma seprated numbers
// passed as string
function stringAdd(numbers) {
  if (numbers === "") {
    return 0;
  }

  const numArray = numbers.split(/[\n,]+/); // Split by commas or new lines
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