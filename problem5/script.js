// EXERCISE 1
var isPalindrome = function (x) {
  let stringX = x.toString();

  for (let i = 0; i < stringX.length / 2; i++) {
    if (stringX.charAt(i) !== stringX.charAt(stringX.length - i - 1)) {
      return false;
    }
  }

  return true;
};
console.log(isPalindrome(122212221));

//  EXERCISE 2
var lengthOfLastWord = function (s) {
  let trimmed = s.trimEnd();
  let counter = 0;
  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed.charAt(i) !== " ") {
      counter++;
    } else {
      break;
    }
  }
  return counter;
};

console.log(lengthOfLastWord("Hello Worldasdad    "));

//  EXERCISE 3
var singleNumber = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      i += 2;
    } else {
      return nums[i];
    }
  }
};
console.log(singleNumber([6, 1, 2, 1, 2, 5, 5]));

// EXERCISE 4
var reverse = function (x) {
  let ans = parseInt(x.toString().split("").reverse().join(""));
  if (x > 0) {
    if (ans > 2 ** 31 - 1) {
      return 0;
    } else {
      return ans;
    }
  } else {
    if (ans > 2 ** 31) {
      return 0;
    } else {
      return 0 - ans;
    }
  }
};

console.log(reverse(-2147483648));

//EXERCISE 5
var buildStep = function (x) {
  for (let i = 1; i <= x; i++) {
    let dummy = "*".repeat(i);
    console.log(dummy);
  }
};

buildStep(4);
