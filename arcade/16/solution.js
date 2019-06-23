// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

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
  },
  {
    input1: [1, 0, 2, 3, 3, 3, 3],
    input2: [1, 3, 2, 0, 4, 4, 4],
    answer: false
  },
  {
    input1: [1, 0, 2, 3, 4, 4, 5],
    input2: [1, 0, 3, 2, 4, 4, 4],
    answer: false
  },
  {
    input1: [1, 0, 3, 3, 4, 4, 5],
    input2: [1, 0, 3, 3, 4, 4, 4],
    answer: false
  },
  {
    input1: [1, 0, 2, 3],
    input2: [1, 2, 0, 3],
    answer: true
  },
  {
    input1: [6, 6, 6],
    input2: [3, 3, 3],
    answer: false
  },
  {
    input1: [2, 3, 1],
    input2: [1, 3, 2],
    answer: true
  },
  {
    input1: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    input2: [832, 998, 148, 570, 533, 561, 455, 147, 894, 279],
    answer: true
  }
];

function main() {
  var failures = [];
  input.forEach(function(item) {
    console.log(`are [${item.input1}] & [${item.input2}] similar??`);
    console.log(`expected answer of ${item.answer}`);

    const answer = areSimilar(item.input1, item.input2);
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

function areSimilar(a, b) {
  let diffs = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diffs.push(i);
    }
  }
  if (diffs.length === 0) {
    return true;
  }

  if (diffs.length === 2) {
    if (a[diffs[0]] === b[diffs[1]] && a[diffs[1]] === b[diffs[0]]) {
      return true;
    }
  }

  return false;
}

main();

/// start bad failed attempts code ///

//failed attempt #1
function runProposedSolution(a, b) {
  let isEdited = false;
  if (a && b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        if (isEdited || i === a.length) {
          console.log("too many swaps! you're done!");
          return false;
        } else {
          //swap items and set edited to true
          let item1 = b[i];
          let item2 = b[i + 1];
          console.log(`swapping ${item1} w/ ${item2}`);
          b[i] = item2;
          b[i + 1] = item1;
          isEdited = true;
          console.log(b);
        }
      }
    }
  } else {
    return false;
  }
  return true;
}

//failed attempt #2
function runProposedSolution2(a, b) {
  let isEdited = false;
  if (!a || !b) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      //store pivot that will be getting swapped with every other item
      let pivot = i;

      //permutate all combinations
      for (let j = 0; j < a.length; j++) {
        //swap
        if (j !== i) {
          let copy = [...b];
          copy[j] = b[pivot];
          copy[pivot] = b[j];

          if (checkMatch(a, copy)) {
            return true;
          }
        }
      }
    }
  }
  return checkMatch(a, b);
}

function checkMatch(a, b) {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] || counter > 2) {
      counter++;
      return false;
    }
  }

  return true;
}

/// end bad code ///
