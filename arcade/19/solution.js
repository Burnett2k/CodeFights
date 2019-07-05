// PROBLEM
// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
//

// ----- Test cases ----- //

//example 1
// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

//example 2
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

const input = [
  {
    yourLeft: 10,
    yourRight: 15,
    friendsLeft: 15,
    friendsRight: 10,
    answer: true
  },
  {
    yourLeft: 15,
    yourRight: 10,
    friendsLeft: 15,
    friendsRight: 9,
    answer: false
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
  let yourLeft = item.yourLeft;
  let yourRight = item.yourRight;
  let friendsLeft = item.friendsLeft;
  let friendsRight = item.friendsRight;

  if (yourLeft !== friendsLeft && yourLeft !== friendsRight) {
    return false;
  }

  if (
    (yourLeft === friendsLeft && yourRight === friendsRight) ||
    (yourLeft === friendsRight && yourRight === friendsLeft)
  ) {
    return true;
  }

  return false;
}

main();
