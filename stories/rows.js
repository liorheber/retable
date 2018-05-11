const rows = [
  {
    id: "0",
    S1: "./images/image-1.jpeg",
    S2: {
      tooltip: "Dog",
      icon: "PET"
    },
    S3: "Crazy Joe",
    S4: "Joe is an insane and friendly pug",
    S5: "France",

    S6: 3,
    S7: 1452672956000,
    S8: "black",
    S9: "blue",
    S10: 7,
    S11: 40
  },
  {
    id: "1",
    S1: "./images/image-2.jpeg",
    S2: {
      tooltip: "Rabbit",
      icon: "PET"
    },
    S3: "Jimmy",
    S4: "Jimmy jumps and jumps and jumps and...",
    S5: "USA",

    S6: 40,
    S7: 1452272356000,
    S8: "brown",
    S9: "red",
    S10: 2,
    S11: 82
  },
  {
    id: "2",
    S1: "./images/image-3.jpeg",
    S2: {
      tooltip: "Dog",
      icon: "PET"
    },
    S3: "Kate",
    S4: "Playful kates' goal is to chew the world",
    S5: "Israel",

    S6: 2,
    S7: 1543911356000,
    S8: "white",
    S9: "green",
    S10: 15,
    S11: 4
  },
  {
    id: "3",
    S1: "./images/image-4.jpeg",
    S2: {
      tooltip: "Cat",
      icon: "PET"
    },
    S3: "Jack",
    S4: "Jack sleeps, eats and sleeps",
    S5: "Denmark",

    S6: 1,
    S7: 1443911356000,
    S8: "white",
    S9: "blue",
    S10: 4,
    S11: 90
  },
  {
    id: "4",
    S1: "./images/image-5.jpeg",
    S2: {
      tooltip: "Dog",
      icon: "PET"
    },
    S3: "Pinchi",
    S4: "Pinchi loves to take showers, hates everything else",
    S5: "Germany",

    S6: 7,
    S7: 1643612556000,
    S8: "white",
    S9: "black",
    S10: 25,
    S11: 30
  },
  {
    id: "5",
    S1: "./images/image-6.jpeg",
    S2: {
      tooltip: "Lizard",
      icon: "PET"
    },
    S3: "Iggie",
    S4: "Iggie creeps on you since 2011",
    S5: "Italy",

    S6: 100,
    S7: 1305447356000,
    S8: "green",
    S9: "black",
    S10: 1,
    S11: 50
  },
  {
    id: "6",
    S1: "./images/image-7.jpeg",
    S2: {
      tooltip: "Hedgehog",
      icon: "PET"
    },
    S3: "Kippi",
    S4: "Button shaped nose, always the bell of the ball!",
    S5: "Spain",

    S6: 9,
    S7: 1505147356000,
    S8: "gray",
    S9: "black",
    S10: 4,
    S11: 62
  },
  {
    id: "7",
    S1: "./images/image-8.jpeg",
    S2: {
      tooltip: "Squirrel",
      icon: "PET"
    },
    S3: "Alvin",
    S4: "A true celebrity! Alvin from the chipmunks!",
    S5: "USA",

    S6: 2,
    S7: 1005143536000,
    S8: "gray",
    S9: "black",
    S10: 100,
    S11: 25
  },
  {
    id: "8",
    S1: "./images/image-9.jpeg",
    S2: {
      tooltip: "Parakeet",
      icon: "PET"
    },
    S3: "Polly",
    S4: "She really wants that cracker...",
    S5: "India",

    S6: 6,
    S7: 1105147656000,
    S8: "green",
    S9: "red",
    S10: 3,
    S11: 47
  },
  {
    id: "9",
    S1: "./images/image-10.jpeg",
    S2: {
      tooltip: "Dog",
      icon: "PET"
    },
    S3: "Teddy",
    S4: "Teddy is an insane dog, simple as that",
    S5: "Israel",

    S6: 0,
    S7: 1388524156000,
    S8: "brown",
    S9: "black",
    S10: 8,
    S11: 35
  },
  {
    id: "10",
    S1: "./images/image-11.jpeg",
    S2: {
      tooltip: "Cat",
      icon: "PET"
    },
    S3: "Kittie",
    S4: "Elegant as they can get, she will purr you away!",
    S5: "Russia",

    S6: 3,
    S7: 1543971356000,
    S8: "red",
    S9: "green",
    S10: 12,
    S11: 85
  },
  {
    id: "11",
    S1: "./images/image-12.jpeg",
    S2: {
      tooltip: "Turtle",
      icon: "PET"
    },
    S3: "Michael",
    S4: "Friend for a pizza?",
    S5: "USA",

    S6: 3,
    S7: 943931356000,
    S8: "green",
    S9: "blue",
    S10: 4,
    S11: 8
  },
  {
    id: "12",
    S1: "./images/image-13.jpeg",
    S2: {
      tooltip: "Mouse",
      icon: "PET"
    },
    S3: "Pluto",
    S4: "Will eat cheese...",
    S5: "Holland",

    S6: 1,
    S7: 843911556000,
    S8: "white",
    S9: "red",
    S10: 100,
    S11: 71
  },
  {
    id: "13",
    S1: "./images/image-14.jpeg",
    S2: {
      tooltip: "Cat",
      icon: "PET"
    },
    S3: "Sleepy Rita",
    S4: "Let Rita sleep and you two will get along",
    S5: "Egypt",

    S6: 9,
    S7: 1543326256000,
    S8: "gray",
    S9: "green",
    S10: 3,
    S11: 98
  },
  {
    id: "14",
    S1: "./images/image-15.jpeg",
    S2: {
      tooltip: "Monkey",
      icon: "PET"
    },
    S3: "Pitz",
    S4: "Funky monkey name Pitz",
    S5: "China",

    S6: 2,
    S7: 1242326266000,
    S8: "brown",
    S9: "black",
    S10: 15,
    S11: 46
  },
  {
    id: "15",
    S1: "./images/image-16.jpeg",
    S2: {
      tooltip: "Dog",
      icon: "PET"
    },
    S3: "George",
    S4: "A true royalty, show your respect!",
    S5: "England",

    S6: 1,
    S7: 1142326266000,
    S8: "white",
    S9: "green",
    S10: 100,
    S11: 68
  },
  {
    id: "16",
    S1: "./images/image-17.jpeg",
    S2: {
      tooltip: "Guinea pig",
      icon: "PET"
    },
    S3: "Yana",
    S4: "She'll eat anything and everything",
    S5: "Australia",

    S6: 16,
    S7: 1452326266000,
    S8: "brown",
    S9: "red",
    S10: 4,
    S11: 27
  },
  {
    id: "17",
    S1: "./images/image-18.jpeg",
    S2: {
      tooltip: "Sheep",
      icon: "PET"
    },
    S3: "Nora",
    S4: "Warm and loving, worth cuddling!",
    S5: "Canada",

    S6: 6,
    S7: 1352313666000,
    S8: "white",
    S9: "black",
    S10: 1,
    S11: 52
  },
  {
    id: "18",
    S1: "./images/image-19.jpeg",
    S2: {
      tooltip: "Lizard",
      icon: "PET"
    },
    S3: "Sam",
    S4: "No words will ever describe",
    S5: "Japan",

    S6: 84,
    S7: 1305447356000,
    S8: "green",
    S9: "black",
    S10: 2,
    S11: 38
  },
  {
    id: "18",
    S1: "./images/image-20.jpeg",
    S2: {
      tooltip: "Fox",
      icon: "PET"
    },
    S3: "Zora",
    S4: "Beautiful, elegant, foxy",
    S5: "Jordan",

    S6: 4,
    S7: 1425613356000,
    S8: "red",
    S9: "blue",
    S10: 4,
    S11: 79
  }
];

export default rows;
