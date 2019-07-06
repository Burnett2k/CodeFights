// PROBLEM
// An IP address is a numerical label assigned to each device (e.g., computer, printer)
// participating in a computer network that uses the Internet Protocol for communication.
// There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
// Given a string, find out if it satisfies the IPv4 address naming rules.
//

// MORE INFO
// IPv4 address is a string with the following structure: a.b.c.d, where a, b, c and d
// are integers in range [0, 255]. For example, 0.0.0.0, 255.255.255.255
// or 252.0.128.32 are correct IPv4 addresses,
// and 0.0.0.256, -1.1.1.1, 0.0.0.0.0 are incorrect.
// a.b is named network part and c.d is named host part.

// Examples
// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.
// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.
// There is no first number.

// ----- Test cases ----- //
const input = [
  {
    input1: "172.16.254.1",
    answer: true
  },
  {
    input1: "172.316.254.1",
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

  let sections = item.input1.split(".");

  if (sections.length !== 4) {
    return false;
  }

  for (let i = 0; i < sections.length; i++) {
    if (
      parseInt(sections[i]) < 0 ||
      parseInt(sections[i]) > 255 ||
      isNaN(sections[i]) ||
      sections[i].length === 0
    ) {
      return false;
    }
  }

  return true;
}

main();
