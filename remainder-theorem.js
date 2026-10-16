// Static question bank. Each object belongs to exactly one set.
const remainderQuestions = [
  {
    "question": "What is the remainder when 17200 is divided by 18?",
    "options": [
      "13",
      "10",
      "11",
      "12"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "Using the standard non-negative remainder, what is the remainder when -53 is divided by 7?",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "If a leaves remainder 5 and b leaves remainder 6 when divided by 7, what remainder does a+b leave when divided by 7?",
    "options": [
      "4",
      "0",
      "6",
      "5"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "What is the remainder when 8 × 9 is divided by 11?",
    "options": [
      "7",
      "9",
      "8",
      "6"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "Find the remainder when 3^17 is divided by 7.",
    "options": [
      "1",
      "5",
      "0",
      "6"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "What is the remainder when 10! is divided by 7?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the units digit of 7^4?",
    "options": [
      "8",
      "1",
      "4",
      "2"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "What are the last two digits of 7^2?",
    "options": [
      "50",
      "56",
      "49",
      "62"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "For prime p=5 and a=2, what is the remainder of a^(p−1) divided by p?",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "By Wilson's theorem, what is the remainder when (5−1)! is divided by 5?",
    "options": [
      "2",
      "4",
      "1",
      "0"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "Find the remainder when 2^11 is divided by 7 using cyclicity of powers.",
    "options": [
      "6",
      "5",
      "0",
      "4"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "What is the non-negative remainder when 123−45 is divided by 9?",
    "options": [
      "8",
      "7",
      "0",
      "6"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "Simplify 84/28. What is the remainder when the numerator of the simplified fraction is divided by 11?",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "What is the remainder when f(x)=3x²+4x+1 is divided by (x−2)?",
    "options": [
      "21",
      "20",
      "24",
      "22"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "What is the remainder when (6767 + 67) is divided by 68?",
    "options": [
      "35",
      "36",
      "34",
      "37"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "What is the remainder when 18347 is divided by 23?",
    "options": [
      "17",
      "18",
      "19",
      "16"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "Using the standard non-negative remainder, what is the remainder when -77 is divided by 9?",
    "options": [
      "4",
      "5",
      "7",
      "6"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "If a leaves remainder 8 and b leaves remainder 9 when divided by 11, what remainder does a+b leave when divided by 11?",
    "options": [
      "8",
      "9",
      "6",
      "7"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "What is the remainder when 7 × 10 is divided by 13?",
    "options": [
      "7",
      "8",
      "6",
      "5"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "Find the remainder when 5^13 is divided by 11.",
    "options": [
      "6",
      "4",
      "5",
      "7"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "What is the remainder when 12! is divided by 11?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "What is the units digit of 3^8?",
    "options": [
      "8",
      "2",
      "1",
      "4"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "What are the last two digits of 3^4?",
    "options": [
      "94",
      "82",
      "88",
      "81"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "For prime p=7 and a=3, what is the remainder of a^(p−1) divided by p?",
    "options": [
      "3",
      "2",
      "0",
      "1"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "By Wilson's theorem, what is the remainder when (7−1)! is divided by 7?",
    "options": [
      "0",
      "6",
      "1",
      "2"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "Find the remainder when 3^10 is divided by 8 using cyclicity of powers.",
    "options": [
      "1",
      "4",
      "3",
      "2"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "What is the non-negative remainder when 236−74 is divided by 11?",
    "options": [
      "0",
      "10",
      "9",
      "8"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "Simplify 126/42. What is the remainder when the numerator of the simplified fraction is divided by 13?",
    "options": [
      "6",
      "5",
      "4",
      "3"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "What is the remainder when f(x)=2x²+7x+2 is divided by (x−3)?",
    "options": [
      "42",
      "41",
      "44",
      "40"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "What is the remainder when (5858 + 58) is divided by 59?",
    "options": [
      "18",
      "19",
      "17",
      "16"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "What is the remainder when 24581 is divided by 29?",
    "options": [
      "20",
      "21",
      "19",
      "18"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "Using the standard non-negative remainder, what is the remainder when -101 is divided by 12?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "If a leaves remainder 12 and b leaves remainder 13 when divided by 17, what remainder does a+b leave when divided by 17?",
    "options": [
      "10",
      "11",
      "8",
      "9"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "What is the remainder when 9 × 12 is divided by 17?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "Find the remainder when 7^19 is divided by 13.",
    "options": [
      "7",
      "6",
      "9",
      "8"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "What is the remainder when 15! is divided by 13?",
    "options": [
      "3",
      "1",
      "0",
      "2"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "What is the units digit of 9^5?",
    "options": [
      "2",
      "6",
      "0",
      "9"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "What are the last two digits of 9^3?",
    "options": [
      "29",
      "36",
      "42",
      "30"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "For prime p=11 and a=7, what is the remainder of a^(p−1) divided by p?",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "By Wilson's theorem, what is the remainder when (11−1)! is divided by 11?",
    "options": [
      "0",
      "2",
      "10",
      "1"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Find the remainder when 5^9 is divided by 13 using cyclicity of powers.",
    "options": [
      "7",
      "6",
      "8",
      "5"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "What is the non-negative remainder when 345−67 is divided by 13?",
    "options": [
      "7",
      "8",
      "5",
      "6"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Simplify 150/30. What is the remainder when the numerator of the simplified fraction is divided by 17?",
    "options": [
      "6",
      "5",
      "8",
      "7"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "What is the remainder when f(x)=5x²+3x+6 is divided by (x−4)?",
    "options": [
      "101",
      "98",
      "99",
      "97"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "What is the remainder when (4949 + 49) is divided by 50?",
    "options": [
      "1",
      "49",
      "0",
      "48"
    ],
    "answer": 3,
    "set": 3
  }
];
