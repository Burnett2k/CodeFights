// PROBLEM
// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

//Use cases:

// "aabb" = true
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc" = false
// "abbcabb" = true
// "zyyzzzzz" = true
// "z" = true
// "zaa" = true
// "abca" = false
// "abcad" = false
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa" = false
// "abdhuierf" = false
//

// ----- Test cases ----- //
const input = [
  {
    input1: "aabb",
    answer: true
  },
  {
    input1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc",
    answer: false
  },
  {
    input1: "abbcabb",
    answer: true
  },
  {
    input1: "zyyzzzzz",
    answer: true
  },
  {
    input1: "z",
    answer: true
  },
  {
    input1: "zaa",
    answer: true
  },
  {
    input1: "abca",
    answer: false
  },
  {
    input1: "abcad",
    answer: false
  },
  {
    input1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa",
    answer: false
  },
  {
    input1: "abdhuierf",
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
  // return isPalindrome(item.input1);
  let a = item.input1;
  let appearances = {};
  let countOdd = 0;

  for (let i = 0; i < a.length; i++) {
    if (!appearances[a[i]]) {
      appearances[a[i]] = 0;
    }
    appearances[a[i]]++;
  }

  for (let key in appearances) {
    if (appearances[key] % 2 === 1) {
      countOdd++;
    }
    if (countOdd > 1) {
      return false;
    }
  }

  return true;
}

main();
