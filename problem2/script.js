// exercise1
backspaceCompare = (s, t) => {
  return removeBackspace(s) === removeBackspace(t);
};

const removeBackspace = (array) => {
  let res = [];

  for (let item of array) {
    item === "#" ? res.pop() : res.push(item);
  }

  return res.join("");
};

console.log(backspaceCompare("###t", "####"));

// exercise2
function removeAdjDuplicates(S) {
  for (let i = 1; i < S.length; ++i) {
    if (S[i] === S[i - 1]) {
      return removeAdjDuplicates(S.substring(0, i - 1) + S.substring(i + 1));
    }
  }
  return S;
}
console.log(removeAdjDuplicates("azxxzy"));

// exercise3
function firstUniqueNum(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return i;
    }
  }
  return "-1";
}
console.log(firstUniqueNum("aabb"));

// exercise4
function maxProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currProfit = prices[j] - prices[i];

      if (currProfit > profit) {
        profit = currProfit;
      }
    }
  }

  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
