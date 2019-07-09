// PROBLEM
// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to
// make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.
// Example
// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.
//

// ----- Test cases ----- //
const input = [
  {
    input1: [6, 6, 6],
    input2: [6, 6, 6],
    answer: true
  },
  {
    input1: [1, 0, 2, 3],
    input2: [1, 3, 2, 0],
    answer: true
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
  // enter solution here
}

main();
