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
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
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
  'Xander',
  'Jared',
  'Grace',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const appDescriptions = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Compass',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker',
  'Deliveries',
];

const possibleTags = [
  'html',
  'css',
  'javascript',
  'typescript',
  'go',
  'cpp',
  'python',
  'rust',
  'React',
  'React Native',
  'NextJS',
  'Tailwind',
  'Vue',
  'mongodb',
  'sql',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomApplications = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(appDescriptions),
      buildSuccess: Math.random() < 0.5,
      tags: [...getApplicationTags(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each application
const getApplicationTags = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleTags);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      tagBody: getRandomArrItem(possibleTags),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomApplications };
