// EXERCISE 2
var plusOne = function (integers) {
  let answer = BigInt(integers.join("")) + BigInt(1);
  return answer.toString().split("");
};

console.log(plusOne([3, 2, 4, 5, 6, 7, 8, 1]));
