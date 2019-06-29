// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

//examples
//[120]
//[120,120]
//[null]
//[0,0,0]
//[1,2,3,4]

//edge cases would be empty array, null items, negative items
var group1 = 0;
var group2 = 0;
[55, 55, 55].forEach(function(item, index) {
  if (item && item > 0) {
    if (index % 2 === 0) {
      group1 += item;
    } else {
      group2 += item;
    }
  }
});

console.log(group1);

return [group1, group2];
