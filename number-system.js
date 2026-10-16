// Fixed, reviewed question objects. answer is the zero-based index of the correct option.
const numberSystemQuestions = [
  {
    "question": "Find the sum of all integers from 1 to 18 that are divisible by 3 but not by 2.",
    "options": [
      "24",
      "20",
      "27",
      "31"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "How many positive divisors does 45² have?",
    "options": [
      "12",
      "8",
      "15",
      "19"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "How many trailing zeros are there in 300! ?",
    "options": [
      "71",
      "67",
      "78",
      "74"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the units digit of 12^67?",
    "options": [
      "1",
      "5",
      "8",
      "12"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "What is the remainder when 6789⁴ + 6789² + 1 is divided by 9?",
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
    "question": "How many positive divisors of 18² are divisible by 6?",
    "options": [
      "5",
      "12",
      "1",
      "8"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "If 23 is an odd prime, what is the remainder when 23² is divided by 8?",
    "options": [
      "5",
      "-2",
      "-6",
      "1"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "Find 1² + 2² + … + 45².",
    "options": [
      "31392",
      "31388",
      "31395",
      "31399"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "Find the sum of all integers from 1 to 40 that are divisible by 3 but not by 2.",
    "options": [
      "144",
      "151",
      "147",
      "140"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "How many positive divisors does 20² have?",
    "options": [
      "19",
      "12",
      "15",
      "8"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "How many trailing zeros are there in 180! ?",
    "options": [
      "41",
      "44",
      "48",
      "37"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "What is the units digit of 23^123?",
    "options": [
      "11",
      "4",
      "7",
      "0"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "What is the remainder when 5678⁴ + 5678² + 1 is divided by 9?",
    "options": [
      "-4",
      "0",
      "3",
      "7"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "How many positive divisors of 21² are divisible by 6?",
    "options": [
      "4",
      "0",
      "-7",
      "-3"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "If 17 is an odd prime, what is the remainder when 17² is divided by 8?",
    "options": [
      "1",
      "-6",
      "-2",
      "5"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "How many positive divisors does 84² have?",
    "options": [
      "42",
      "45",
      "49",
      "38"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "How many trailing zeros are there in 180! ? (Variant 17)",
    "options": [
      "37",
      "41",
      "48",
      "44"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "What is the units digit of 17^67?",
    "options": [
      "3",
      "7",
      "0",
      "-4"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "What is the remainder when 9876⁴ + 9876² + 1 is divided by 9?",
    "options": [
      "5",
      "1",
      "-2",
      "-6"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "How many positive divisors of 60² are divisible by 6?",
    "options": [
      "21",
      "24",
      "28",
      "17"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "If 53 is an odd prime, what is the remainder when 53² is divided by 8?",
    "options": [
      "1",
      "-2",
      "-6",
      "5"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Find 1² + 2² + … + 36².",
    "options": [
      "16203",
      "16210",
      "16206",
      "16199"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "Find the sum of all integers from 1 to 20 that are divisible by 3 but not by 2.",
    "options": [
      "24",
      "31",
      "27",
      "20"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "How many positive divisors does 36² have?",
    "options": [
      "25",
      "22",
      "29",
      "18"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "How many trailing zeros are there in 180! ? (Variant 25)",
    "options": [
      "37",
      "48",
      "41",
      "44"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "What is the units digit of 2^101?",
    "options": [
      "-1",
      "6",
      "2",
      "-5"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "What is the remainder when 6789⁴ + 6789² + 1 is divided by 9? (Variant 27)",
    "options": [
      "-6",
      "1",
      "5",
      "-2"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "How many positive divisors of 27² are divisible by 6?",
    "options": [
      "-7",
      "4",
      "-3",
      "0"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "If 37 is an odd prime, what is the remainder when 37² is divided by 8?",
    "options": [
      "-2",
      "5",
      "1",
      "-6"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "Find 1² + 2² + … + 20².",
    "options": [
      "2867",
      "2870",
      "2874",
      "2863"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "How many trailing zeros are there in 180! ? (Variant 31)",
    "options": [
      "48",
      "37",
      "44",
      "41"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "What is the units digit of 23^41?",
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
    "question": "What is the remainder when 1001⁴ + 1001² + 1 is divided by 9?",
    "options": [
      "0",
      "-4",
      "7",
      "3"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "How many positive divisors of 18² are divisible by 6? (Variant 34)",
    "options": [
      "5",
      "12",
      "8",
      "1"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "If 53 is an odd prime, what is the remainder when 53² is divided by 8? (Variant 35)",
    "options": [
      "1",
      "-6",
      "-2",
      "5"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "Find 1² + 2² + … + 18².",
    "options": [
      "2113",
      "2102",
      "2106",
      "2109"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "Find the sum of all integers from 1 to 28 that are divisible by 3 but not by 2.",
    "options": [
      "72",
      "79",
      "75",
      "68"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "How many positive divisors does 18² have?",
    "options": [
      "19",
      "12",
      "8",
      "15"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "How many trailing zeros are there in 250! ?",
    "options": [
      "59",
      "66",
      "62",
      "55"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "What is the units digit of 8^37?",
    "options": [
      "1",
      "8",
      "5",
      "12"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "What is the remainder when 8912⁴ + 8912² + 1 is divided by 9?",
    "options": [
      "3",
      "-4",
      "7",
      "0"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "How many positive divisors of 72² are divisible by 6?",
    "options": [
      "24",
      "28",
      "17",
      "21"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "If 17 is an odd prime, what is the remainder when 17² is divided by 8? (Variant 43)",
    "options": [
      "1",
      "5",
      "-2",
      "-6"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "Find 1² + 2² + … + 60².",
    "options": [
      "73807",
      "73803",
      "73810",
      "73814"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Find the sum of all integers from 1 to 42 that are divisible by 3 but not by 2.",
    "options": [
      "147",
      "144",
      "140",
      "151"
    ],
    "answer": 0,
    "set": 3
  }
];
