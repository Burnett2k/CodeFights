// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// make next char greater -> [1,2,1] = counter = 1
// make next char greater -> [1,2,3] = counter = 3
// arrayChange(inputArray) = 3.

function arrayChange(inputArray = [-1000, 0, -2, 0]) {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let num1 = inputArray[i];
    let num2 = inputArray[i + 1];
    //be careful when checking if ints exist because a 0 evaluates to false and could give bad behavior
    if (
      inputArray[i] !== "undefined" &&
      inputArray[i + 1] !== "undefined" &&
      num1 >= num2
    ) {
      let diff = num1 + 1 - num2;
      count += diff;
      console.log(`adding ${diff}`);
      inputArray[i + 1] = num1 + 1;
    }
  }
  console.log(count);
  console.log(inputArray);
  return count;
}

arrayChange();
