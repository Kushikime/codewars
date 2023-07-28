// My solution

function topThreeWords(text) {
  let popularWords = new Map();
  let cleanerRegex = /([a-zA-z']+)/gm;
  let checkForLetters = /([a-z]+)/gm;

  let cleanText = text.toLowerCase().match(cleanerRegex);
  let noLetters = text.toLowerCase().match(checkForLetters);

  if (!cleanText || !noLetters) return [];

  cleanText.forEach((word) => {
    if (!popularWords.get(word)) {
      popularWords.set(word, 1);
      return;
    }
    popularWords.set(word, popularWords.get(word) + 1);
  });

  let sortedMap = [...popularWords].sort((a, b) => b[1] - a[1]);
  return sortedMap.slice(0, 3).map((elem) => elem[0]);
}

let test1 = topThreeWords("  //wont won't won't");
let test2 = topThreeWords(
  `In a village of La Mancha, the name of which I have no desire to call to
    mind, there lived not long since one of those gentlemen that keep a lance
    in the lance-rack, an old buckler, a lean hack, and a greyhound for
    coursing. An olla of rather more beef than mutton, a salad on most
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
    on Sundays, made away with three-quarters of his income.`,
);
let test3 = topThreeWords(
  'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e',
);
let test4 = topThreeWords('a a c b b');
let test5 = topThreeWords('  , e   .. ');

console.log('test1:', test1);
console.log('test2:', test2);
console.log('test3:', test3);
console.log('test4:', test4);
console.log('test5:', test5);

// there is a better solution.
let topThreeWordsBetter = (text) => {
  let dict = new Map();

  // we are replacing the sybmols with whitespace
  // and for each match we add the word to dictionary
  text.replace(/[A-z']+(?=[ ]|$)/g, (match) => {
    // we are lower casing the words
    let word = match.toLowerCase();
    dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
  });
  // delete ' from dict, but if we use another regex it could be skipped
  dict.delete("'");
  //console.log(...dict)

  return [...dict]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, 3);
};

let test6 = topThreeWordsBetter("  //wont won't won't");
let test7 = topThreeWordsBetter(
  `In a village of La Mancha, the name of which I have no desire to call to
    mind, there lived not long since one of those gentlemen that keep a lance
    in the lance-rack, an old buckler, a lean hack, and a greyhound for
    coursing. An olla of rather more beef than mutton, a salad on most
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
    on Sundays, made away with three-quarters of his income.`,
);
let test8 = topThreeWordsBetter(
  'e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e',
);
let test9 = topThreeWordsBetter('a a c b b');
let test10 = topThreeWordsBetter('  , e   .. ');

console.log('test1:', test6);
console.log('test2:', test7);
console.log('test3:', test8);
console.log('test4:', test9);
console.log('test5:', test10);
