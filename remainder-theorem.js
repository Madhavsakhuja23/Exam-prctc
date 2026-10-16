// Fixed, reviewed question objects. answer is the zero-based index of the correct option.
const remainderQuestions = [
  {
    "question": "Find the remainder when 17^83 is divided by 7.",
    "options": [
      "9",
      "5",
      "2",
      "-2"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "Find the remainder when 789² + 987² is divided by 8.",
    "options": [
      "-1",
      "-5",
      "2",
      "6"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "What is the remainder when (30)! + 1 is divided by 31?",
    "options": [
      "-3",
      "4",
      "-7",
      "0"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "Using Fermat's little theorem, find the remainder of 3^4 when divided by the prime 5.",
    "options": [
      "-6",
      "-2",
      "1",
      "5"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "Find the least non-negative remainder when 67891 − 6789 is divided by 13.",
    "options": [
      "2",
      "-1",
      "-5",
      "6"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "Find the remainder when 3^62 is divided by 11.",
    "options": [
      "13",
      "2",
      "9",
      "6"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "Find the remainder when 1 + 2 + 3 + … + 40 is divided by 13.",
    "options": [
      "-6",
      "-2",
      "5",
      "1"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "Find the remainder when 101³ + 23³ is divided by 13.",
    "options": [
      "11",
      "4",
      "8",
      "15"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "Find the remainder when 53^55 is divided by 7.",
    "options": [
      "4",
      "8",
      "1",
      "-3"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "Find the remainder when 389² + 345² is divided by 8.",
    "options": [
      "6",
      "-5",
      "-1",
      "2"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the remainder when (22)! + 1 is divided by 23?",
    "options": [
      "0",
      "-7",
      "-3",
      "4"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "Using Fermat's little theorem, find the remainder of 2^6 when divided by the prime 7.",
    "options": [
      "1",
      "5",
      "-6",
      "-2"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "Find the least non-negative remainder when 78912 − 2345 is divided by 9.",
    "options": [
      "-3",
      "1",
      "8",
      "4"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "Find the remainder when 4^84 is divided by 13.",
    "options": [
      "1",
      "-2",
      "-6",
      "5"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "Find the remainder when 1 + 2 + 3 + … + 20 is divided by 7.",
    "options": [
      "-7",
      "0",
      "-3",
      "4"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "Find the remainder when 257² + 345² is divided by 9.",
    "options": [
      "11",
      "0",
      "7",
      "4"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "What is the remainder when (16)! + 1 is divided by 17?",
    "options": [
      "0",
      "-7",
      "-3",
      "4"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Using Fermat's little theorem, find the remainder of 5^4 when divided by the prime 5.",
    "options": [
      "0",
      "-7",
      "4",
      "-3"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Find the least non-negative remainder when 78912 − 4567 is divided by 11.",
    "options": [
      "7",
      "4",
      "11",
      "0"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Find the remainder when 3^73 is divided by 19.",
    "options": [
      "7",
      "-4",
      "0",
      "3"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "Find the remainder when 1 + 2 + 3 + … + 40 is divided by 9.",
    "options": [
      "-6",
      "5",
      "1",
      "-2"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "Find the remainder when 409³ + 29³ is divided by 8.",
    "options": [
      "6",
      "3",
      "10",
      "-1"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Find the remainder when 17^71 is divided by 9.",
    "options": [
      "1",
      "12",
      "5",
      "8"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "Find the remainder when 678² + 567² is divided by 11.",
    "options": [
      "1",
      "5",
      "12",
      "8"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "What is the remainder when (30)! + 1 is divided by 31? (Variant 25)",
    "options": [
      "0",
      "-3",
      "4",
      "-7"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Using Fermat's little theorem, find the remainder of 2^22 when divided by the prime 23.",
    "options": [
      "-2",
      "-6",
      "5",
      "1"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "Find the least non-negative remainder when 12345 − 2345 is divided by 11.",
    "options": [
      "-6",
      "1",
      "-2",
      "5"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "Find the remainder when 5^38 is divided by 11.",
    "options": [
      "4",
      "-3",
      "1",
      "8"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Find the remainder when 1 + 2 + 3 + … + 25 is divided by 7.",
    "options": [
      "-4",
      "7",
      "3",
      "0"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "Find the remainder when 409³ + 19³ is divided by 9.",
    "options": [
      "-1",
      "2",
      "-5",
      "6"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "What is the remainder when (16)! + 1 is divided by 17? (Variant 31)",
    "options": [
      "4",
      "-3",
      "0",
      "-7"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Using Fermat's little theorem, find the remainder of 11^16 when divided by the prime 17.",
    "options": [
      "5",
      "-2",
      "1",
      "-6"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Find the least non-negative remainder when 45678 − 3456 is divided by 11.",
    "options": [
      "8",
      "1",
      "4",
      "-3"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Find the remainder when 5^95 is divided by 17.",
    "options": [
      "7",
      "11",
      "4",
      "0"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "Find the remainder when 1 + 2 + 3 + … + 60 is divided by 7.",
    "options": [
      "7",
      "-4",
      "0",
      "3"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "Find the remainder when 101³ + 17³ is divided by 8.",
    "options": [
      "3",
      "10",
      "-1",
      "6"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "Find the remainder when 41^19 is divided by 17.",
    "options": [
      "7",
      "3",
      "0",
      "-4"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "Find the remainder when 678² + 345² is divided by 7.",
    "options": [
      "9",
      "2",
      "5",
      "-2"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "What is the remainder when (22)! + 1 is divided by 23? (Variant 39)",
    "options": [
      "4",
      "0",
      "-3",
      "-7"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "Using Fermat's little theorem, find the remainder of 11^10 when divided by the prime 11.",
    "options": [
      "-3",
      "0",
      "-7",
      "4"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "Find the least non-negative remainder when 78912 − 3456 is divided by 13.",
    "options": [
      "4",
      "-3",
      "8",
      "1"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "Find the remainder when 8^62 is divided by 11.",
    "options": [
      "2",
      "9",
      "6",
      "13"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "Find the remainder when 1 + 2 + 3 + … + 35 is divided by 13.",
    "options": [
      "-1",
      "3",
      "6",
      "10"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Find the remainder when 607³ + 29³ is divided by 11.",
    "options": [
      "7",
      "10",
      "3",
      "14"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "Find the remainder when 23^83 is divided by 13.",
    "options": [
      "1",
      "4",
      "-3",
      "8"
    ],
    "answer": 1,
    "set": 3
  }
];
