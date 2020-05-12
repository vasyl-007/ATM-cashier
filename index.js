console.log("Hello ATM cashier !");

let iWantToGet = (amountRequired, limits) => {
  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);
  console.log("nominals", nominals);

  return collect(amountRequired, nominals);
};

function collect(amount, nominals) {
  if (amount === 0) return {};
  if (!nominals.length) return;

  let currentNominal = nominals[0];
  let availableNotes = limits[currentNominal];
  let notesNeeded = Math.floor(amount / currentNominal);
  let numberOfNotes = Math.min(notesNeeded, availableNotes);

  console.group("Count");
  console.log("amount", amount);
  console.log("nominals", nominals);
  console.log("currentNominal", currentNominal);
  console.log("availableNotes", availableNotes);
  console.log("notesNeeded", notesNeeded);
  console.log("numberOfNotes", numberOfNotes);
  console.groupEnd();

  for (let i = numberOfNotes; i >= 0; i--) {
    console.log(
      "Start i",
      i,
      "numberofNotes",
      numberOfNotes,
      "currentNominal",
      currentNominal
    );
    let result = collect(amount - i * currentNominal, nominals.slice(1));

    if (result) {
      console.log(
        "i",
        i,
        "numberofNotes",
        numberOfNotes,
        "currentNominal",
        currentNominal,
        "result",
        result
      );
      return i ? { [currentNominal]: i, ...result } : result;
    }
  }
}

let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };
// let limits1 = { 100: 5, 50: 100, 30: 6 };

// console.log(iWantToGet(230, limits)); // {30: 1, 100: 2}
// console.log(iWantToGet(830, limits1)); // {30: 1, 50: 6, 100: 5}
// console.log(iWantToGet(1000, limits)); // {1000: 1}
console.log(iWantToGet(120, limits)); //  {100: 2}
// console.log(iWantToGet(150, limits)); //  {50: 1, 100: 1}
// console.log(iWantToGet(50000, limits)); //
// console.log(iWantToGet(120, limits));

// ==========================================
// const numbers = [1, 2, 3, 4, 5];
// const summ = numbers.reduce((acc, value) => acc + value, 0);
// console.log(summ); // 15

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react", "react"] },
// ];
// const allLikes = tweets.reduce(
//   (totalLikes, tweet) => totalLikes + tweet.likes,
//   0
// );
// console.log("allLikes", allLikes);

// const countLikes = (tweets) =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log("countLikes", countLikes(tweets));

// // let allTags = [];
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);

// console.log("tags", tags);
// ===========================================
// const getTags = (allTweets) => {
//   allTweets.reduce((allTags2, tweet) => {
//     allTags2.push(...tweet.tags);
//     return allTags2;
//   }, []);
// };
// const funcTags = getTags(tweets);
// console.log("funcTags", funcTags);

// const abc = [1, 2, 3, 3, 4];
// console.log("abc", abc);
// const abcUnique = new Set(abc);
// console.log("abcUnique", abcUnique);
// ===========================================
