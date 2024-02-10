// calculator

function stringAdd(numbers) {
  if (numbers === "") {
    return 0;
  }

  const numArray = numbers.split(",");
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i])) {
      sum += parseInt(numArray[i]);
    }
  }
  return sum;
}

module.exports = stringAdd;