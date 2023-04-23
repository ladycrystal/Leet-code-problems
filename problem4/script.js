let a = { name: "Jagaad" };
let b = a;
let c = { ...b };

console.log(
  a == b
); /*This returns true. In Objects and arrays(which is also an object),
equality holds when they two or more variables are assigned to one another.*/

console.log(
  b == c
); /*This returns false. c is constructed by a spread/rest operator and this means c is a new object.*/

const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    connectedFlights: 4,
  },
  {
    id: 3,
    passengerName: "Kurt Cobain",
    connectedFlights: 3,
  },
];

let passengerNames = passengers.map((a) => a.passengerName);
console.log(passengerNames);

//EXERCISE3

let connectedFlight = passengers.map((f) => f.connectedFlights);
descending = connectedFlight.sort(function (a, b) {
  return b - a;
});
console.log(descending);

//exercise4
var groupAnagrams = function (string) {
  const map = new Map();

  for (const a of string) {
    const b = a.split("").sort().join("");
    map.has(b) ? map.get(b).push(a) : map.set(b, [a]);
  }

  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

//exercise5
var moveZeroes = function (nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      length--;
      i--;
    }
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
