console.log("Hello World !");

let iWantToGet = (amountRequired, limits) => {};

let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };
// const allMoneyInATM = Object.entries(limits).reduce(
//   acc,
//   (el) => acc + el[0] * el[1]
// );
// console.log("allMoneyInATM", allMoneyInATM);

// console.log('limits', limits)

console.log(iWantToGet(230, limits)); // {30: 1, 100: 2}
console.log(iWantToGet(1000, limits)); //
console.log(iWantToGet(200, limits)); //
console.log(iWantToGet(150, limits)); //
console.log(iWantToGet(120, limits)); //
console.log(iWantToGet(275, limits));

// ==========================================
const numbers = [1, 2, 3, 4, 5];
const summ = numbers.reduce((acc, value) => acc + value, 0);
console.log(summ); // 15

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
const allLikes = tweets.reduce(
  (totalLikes, tweet) => totalLikes + tweet.likes,
  0
);
console.log("allLikes", allLikes);

const countLikes = (tweets) =>
  tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log("countLikes", countLikes(tweets));
