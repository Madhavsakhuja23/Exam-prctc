// Static question bank. Each object belongs to exactly one set.
const numberSystemQuestions = [
  {
    "question": "What is the sum of the first 9 natural numbers?",
    "options": [
      "45",
      "50",
      "46",
      "44"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "What is the sum of the first 9 positive odd numbers?",
    "options": [
      "81",
      "90",
      "99",
      "72"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "Find the sum of the first 10 positive even numbers.",
    "options": [
      "120",
      "100",
      "112",
      "110"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "How many trailing zeros are there in 30! ?",
    "options": [
      "9",
      "7",
      "8",
      "6"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "How many positive divisors does 2^5 have?",
    "options": [
      "10",
      "5",
      "7",
      "6"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the units digit of 3^17?",
    "options": [
      "4",
      "3",
      "6",
      "0"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "What is the remainder when 4387 is divided by 9?",
    "options": [
      "2",
      "4",
      "8",
      "5"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "Find 1² + 2² + ... + 12².",
    "options": [
      "662",
      "650",
      "649",
      "674"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "Find 1³ + 2³ + ... + 7³.",
    "options": [
      "791",
      "783",
      "798",
      "784"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the least positive number divisible by 12, 18 and 30?",
    "options": [
      "180",
      "192",
      "198",
      "90"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "How many distinct prime factors does 360 have?",
    "options": [
      "5",
      "4",
      "2",
      "3"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the remainder when 14² is divided by 4?",
    "options": [
      "1",
      "0",
      "3",
      "2"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "What is the 11th triangular number?",
    "options": [
      "67",
      "66",
      "77",
      "65"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "How many positive factors does 84 have?",
    "options": [
      "11",
      "13",
      "14",
      "12"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the difference between the squares of 19 and 18?",
    "options": [
      "36",
      "39",
      "38",
      "37"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the sum of the first 11 natural numbers?",
    "options": [
      "66",
      "71",
      "67",
      "65"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "What is the sum of the first 10 positive odd numbers?",
    "options": [
      "100",
      "90",
      "110",
      "120"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Find the sum of the first 11 positive even numbers.",
    "options": [
      "132",
      "134",
      "143",
      "121"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "How many trailing zeros are there in 35! ?",
    "options": [
      "7",
      "9",
      "8",
      "10"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "How many positive divisors does 2^6 have?",
    "options": [
      "8",
      "6",
      "7",
      "12"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "What is the units digit of 7^22?",
    "options": [
      "0",
      "9",
      "2",
      "6"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "What is the remainder when 5726 is divided by 9?",
    "options": [
      "3",
      "0",
      "6",
      "2"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "Find 1² + 2² + ... + 13².",
    "options": [
      "818",
      "845",
      "819",
      "832"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "Find 1³ + 2³ + ... + 8³.",
    "options": [
      "1304",
      "1296",
      "1295",
      "1312"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "What is the least positive number divisible by 14, 21 and 42?",
    "options": [
      "63",
      "42",
      "21",
      "56"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "How many distinct prime factors does 420 have?",
    "options": [
      "4",
      "5",
      "3",
      "6"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "What is the remainder when 15² is divided by 4?",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "What is the 12th triangular number?",
    "options": [
      "79",
      "77",
      "90",
      "78"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "How many positive factors does 126 have?",
    "options": [
      "13",
      "14",
      "12",
      "11"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "What is the difference between the squares of 21 and 20?",
    "options": [
      "43",
      "42",
      "41",
      "40"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "What is the sum of the first 13 natural numbers?",
    "options": [
      "90",
      "91",
      "92",
      "96"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "What is the sum of the first 11 positive odd numbers?",
    "options": [
      "143",
      "110",
      "132",
      "121"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "Find the sum of the first 12 positive even numbers.",
    "options": [
      "168",
      "158",
      "144",
      "156"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "How many trailing zeros are there in 40! ?",
    "options": [
      "9",
      "8",
      "10",
      "11"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "How many positive divisors does 2^7 have?",
    "options": [
      "14",
      "9",
      "8",
      "7"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "What is the units digit of 8^29?",
    "options": [
      "9",
      "1",
      "8",
      "5"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "What is the remainder when 6914 is divided by 9?",
    "options": [
      "3",
      "2",
      "6",
      "0"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "Find 1² + 2² + ... + 14².",
    "options": [
      "1015",
      "1043",
      "1014",
      "1029"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "Find 1³ + 2³ + ... + 9³.",
    "options": [
      "2024",
      "2034",
      "2043",
      "2025"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "What is the least positive number divisible by 16, 24 and 36?",
    "options": [
      "160",
      "72",
      "144",
      "168"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "How many distinct prime factors does 540 have?",
    "options": [
      "2",
      "4",
      "5",
      "3"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "What is the remainder when 16² is divided by 4?",
    "options": [
      "2",
      "0",
      "3",
      "1"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "What is the 13th triangular number?",
    "options": [
      "91",
      "104",
      "90",
      "92"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "How many positive factors does 198 have?",
    "options": [
      "14",
      "12",
      "11",
      "13"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "What is the difference between the squares of 23 and 22?",
    "options": [
      "47",
      "45",
      "46",
      "44"
    ],
    "answer": 1,
    "set": 3
  }
];
