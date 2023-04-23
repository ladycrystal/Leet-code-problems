// exercise 1
let min = (numbers) => {
  let minimum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  return minimum;
};

console.log(min([4, 6, 2, 9, 34, 15, 1]));

// exercise2
let sumOfTwoNumbers = (numbers, target) => {
  let index = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] + numbers[i + 1] == target) {
      index = [numbers[i], numbers[i + 1]];
    }
  }
  return index;
};

console.log(sumOfTwoNumbers([2, 7, 11, 15], 10));

// exercise3
const isValid = (s) => {
  const load = [];
  for (let i = 0; i < s.length; i += 1) {
    const top = load[load.length - 1];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      load.push(s[i]);
    } else if (s[i] === ")" && top === "(" && load.length !== 0) {
      load.pop();
    } else if (s[i] === "]" && top === "[" && load.length !== 0) {
      load.pop();
    } else if (s[i] === "}" && top === "{" && load.length !== 0) {
      load.pop();
    } else {
      return false;
    }
  }
  return load.length === 0;
};

// exercise4
function isAnagram(s, t) {
  let y = s.split("").sort().join(""),
    z = t.split("").sort().join("");
  console.log(z === y ? "True" : "False");
}
isAnagram("anagram", "narrama");

// exercise5
function missingNum(numbers) {
  sorted = numbers.sort();
  for (i = 0; i <= sorted.length; i++) {
    if (sorted[i] !== i) {
      return i;
    }
  }
}
console.log(missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1]));
