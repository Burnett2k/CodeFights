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
    input1: [5, 3, 6, 7, 9],
    answer: 4
  },
  {
    input1: [2, 3],
    answer: 4
  },
  {
    input1: [1, 4, 10, 6, 2],
    answer: 7
  },
  {
    input1: [1000, 999],
    answer: 6
  },
  {
    input1: [19, 32, 11, 23],
    answer: 3
  }
];
// ----- Test cases ----- //

function main() {
  var failures = [];
  input.forEach(function(item) {
    console.log(`find minimum hops to clear obstacles in [${item.input1}]`);
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
  item = item.input1;

  //[9,7,5,6,3]

  //[3,5,6,7,9]
  //       - x - - - x -
  //[0,1,2,3,4,5,6,7,8,9,10]

  // [2,3]
  //      x x -
  // [0,1,2,3]
  //

  let jumpLength = 1;

  let solutionFound = false;

  //sort array
  item.sort();

  // brute force jump until you get a solution

  let i = 0;

  do {
    // jump and check if you hit a landmine
    let location = i * jumpLength;

    if (item.indexOf(location) > -1) {
      i = 0;
      jumpLength++;
      // we hit a landmine, so reset the index and increment
    } else {
      i++;

      // check if we have avoided all obstacles and if so, we found the solution
      if (location > item[item.length - 1]) {
        solutionFound = true;
      }
    }
  } while (!solutionFound);

  return jumpLength;

  // find first open spot after first blockage

  // count # of jumps at a minimum it could take
  //see if # of jumps avoids obstacles
  //if not, increment by 1 and try again until an answer is found
}

main();
