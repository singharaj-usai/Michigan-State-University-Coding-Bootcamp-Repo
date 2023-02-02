const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  ``,
];

const descriptionsBodies = [
  'How to disagree with someone',
  'iPhone review',
  'how-to video',
  'video essay on the history of video games',
  'How to make money on the App Store',
  'Learn NextJS in five minutes (Not clickbate)',
  'Movie trailer',
  'Hello world',
  'Another possible solution to the algorithm',
  'Apology video',
  'Submission for startup pitch',
];

const possibleResponses = [
  'I disagree!',
  'I tried your algorithm, here were the results',
  'This was awesome',
  'Thank you for the great content',
  'Please check out my video response',
  'Like and subscribe to my channel please',
  'Reply: The side effects of in app purchases on digital marketplaces',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random videos that we can add to the database. Includes video responses.
const getRandomVideos = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(descriptionsBodies),
      advertiserFriendly: Math.random() < 0.5,
      responses: [...getVideoResponses(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each video
const getVideoResponses = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleResponses);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleResponses),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomVideos, getRandomVideos };
