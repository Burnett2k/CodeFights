// PROBLEM
// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

//

// ----- Test cases ----- //
const input = [
  {
    input1: [2, 4, 1, 0],
    answer: 3
  },
  {
    input1: [1, 1, 1, 1],
    answer: 0
  },
  {
    input1: [-1, 4, 10, 3, -2],
    answer: 7
  }
];
// ----- Test cases ----- //

function main() {
  var failures = [];
  input.forEach(function(item) {
    console.log(`are [${item.input1}] & [${item.input2}] similar??`);
    console.log(`expected answer of ${item.answer}`);

    const answer = runSolution(item);
    console.log(`received answer of ${answer}`);
    if (item.answer === answer) {
      console.log(`SUCCESS!`);
    } else {
      console.log(`FAILURE!`);
      failures.push(item);
    }
  });

  if (failures.length > 0) {
    console.log(`you have ${failures.length} failing tests!! Fix them!`);
  } else {
    console.log("Congrats! You passed all tests!");
  }
}

function runSolution(item) {
  item = item.input1;
  let highestDiff = 0;

  for (let i = 0; i < item.length; i++) {
    const element = item[i];
    const nextElement = item[i + 1];
    let diff = 0;

    if (nextElement !== undefined) {
      diff = Math.abs(element - nextElement);

      if (diff > highestDiff) {
        highestDiff = diff;
      }
    }
  }

  return highestDiff;
}

main();
