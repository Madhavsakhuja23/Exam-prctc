// Fixed, reviewed question objects. answer is the zero-based index of the correct option.
const averagesQuestions = [
  {
    "question": "The average of 30 numbers is 54. If one more number 25 is included, what is the new average?",
    "options": [
      "51.06",
      "53.06",
      "48.06",
      "56.06"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "The average of 30 values increases by 6 when one value is replaced. By how much did the replaced value increase?",
    "options": [
      "173",
      "180",
      "177",
      "184"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "A vehicle travels 5 km at 45 km/h and the next 4 km at 60 km/h. Find its average speed for the whole journey.",
    "options": [
      "54.63",
      "50.63",
      "42.63",
      "47.63"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "In a group of 40 students, the average score of 24 students is 56, and that of the remaining students is 78. Find the overall average.",
    "options": [
      "67.8",
      "64.8",
      "58.8",
      "62.8"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "The average of 12 numbers was calculated as 36 after a value 18 was mistakenly used instead of 30. Find the correct average.",
    "options": [
      "30.0",
      "37.0",
      "34.0",
      "41.0"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "The average age of 5 people is 35.8. When each person's age is increased by 5 years, what is the new average?",
    "options": [
      "33.8",
      "37.8",
      "44.8",
      "40.8"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "The average of 18 numbers rises from 50 to 52. By how much has their total sum increased?",
    "options": [
      "33",
      "36",
      "40",
      "29"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "The average of 15 numbers is 54. If one more number 30 is included, what is the new average?",
    "options": [
      "47.5",
      "50.5",
      "52.5",
      "55.5"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "The average of 20 values increases by 7 when one value is replaced. By how much did the replaced value increase?",
    "options": [
      "144",
      "133",
      "137",
      "140"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "A vehicle travels 4 km at 45 km/h and the next 4 km at 72 km/h. Find its average speed for the whole journey.",
    "options": [
      "52.38",
      "55.38",
      "59.38",
      "47.38"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "In a group of 40 students, the average score of 15 students is 52, and that of the remaining students is 70. Find the overall average.",
    "options": [
      "63.25",
      "66.25",
      "61.25",
      "57.25"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "The average of 12 numbers was calculated as 28 after a value 12 was mistakenly used instead of 30. Find the correct average.",
    "options": [
      "29.5",
      "33.5",
      "26.5",
      "22.5"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "The average age of 5 people is 30.8. When each person's age is increased by 3 years, what is the new average?",
    "options": [
      "33.8",
      "37.8",
      "30.799999999999997",
      "26.799999999999997"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "The average of 20 numbers rises from 55 to 58. By how much has their total sum increased?",
    "options": [
      "60",
      "57",
      "53",
      "64"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "The average of 24 numbers is 60. If one more number 35 is included, what is the new average?",
    "options": [
      "59.0",
      "57.0",
      "62.0",
      "54.0"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "The average of 30 values increases by 3 when one value is replaced. By how much did the replaced value increase?",
    "options": [
      "94",
      "90",
      "83",
      "87"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "A vehicle travels 4 km at 48 km/h and the next 4 km at 80 km/h. Find its average speed for the whole journey.",
    "options": [
      "64.0",
      "60.0",
      "57.0",
      "52.0"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "In a group of 40 students, the average score of 30 students is 56, and that of the remaining students is 82. Find the overall average.",
    "options": [
      "62.5",
      "56.5",
      "60.5",
      "65.5"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "The average of 10 numbers was calculated as 28 after a value 12 was mistakenly used instead of 40. Find the correct average.",
    "options": [
      "30.8",
      "27.8",
      "34.8",
      "23.8"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "The average age of 5 people is 32.8. When each person's age is increased by 4 years, what is the new average?",
    "options": [
      "36.8",
      "40.8",
      "29.799999999999997",
      "33.8"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "The average of 18 numbers rises from 55 to 60. By how much has their total sum increased?",
    "options": [
      "87",
      "90",
      "83",
      "94"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "The average of 18 numbers is 48. If one more number 40 is included, what is the new average?",
    "options": [
      "47.58",
      "50.58",
      "45.58",
      "42.58"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "The average of 18 values increases by 5 when one value is replaced. By how much did the replaced value increase?",
    "options": [
      "94",
      "90",
      "87",
      "83"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "A vehicle travels 4 km at 36 km/h and the next 3 km at 80 km/h. Find its average speed for the whole journey.",
    "options": [
      "47.1",
      "44.1",
      "39.1",
      "51.1"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "In a group of 40 students, the average score of 25 students is 42, and that of the remaining students is 82. Find the overall average.",
    "options": [
      "55.0",
      "57.0",
      "51.0",
      "60.0"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "The average of 15 numbers was calculated as 36 after a value 10 was mistakenly used instead of 35. Find the correct average.",
    "options": [
      "41.666666666666664",
      "37.666666666666664",
      "30.666666666666664",
      "34.666666666666664"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "The average age of 5 people is 32.2. When each person's age is increased by 2 years, what is the new average?",
    "options": [
      "34.2",
      "31.200000000000003",
      "27.200000000000003",
      "38.2"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "The average of 10 numbers rises from 40 to 44. By how much has their total sum increased?",
    "options": [
      "33",
      "37",
      "44",
      "40"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "The average of 30 numbers is 64. If one more number 35 is included, what is the new average?",
    "options": [
      "63.06",
      "61.06",
      "58.06",
      "66.06"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "The average of 24 values increases by 5 when one value is replaced. By how much did the replaced value increase?",
    "options": [
      "124",
      "113",
      "117",
      "120"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "A vehicle travels 2 km at 60 km/h and the next 3 km at 96 km/h. Find its average speed for the whole journey.",
    "options": [
      "77.42",
      "81.42",
      "74.42",
      "69.42"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "In a group of 40 students, the average score of 18 students is 56, and that of the remaining students is 78. Find the overall average.",
    "options": [
      "68.1",
      "62.1",
      "71.1",
      "66.1"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "The average of 12 numbers was calculated as 28 after a value 10 was mistakenly used instead of 45. Find the correct average.",
    "options": [
      "30.916666666666668",
      "23.916666666666668",
      "34.91666666666667",
      "27.916666666666668"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "The average age of 5 people is 30.8. When each person's age is increased by 5 years, what is the new average?",
    "options": [
      "39.8",
      "32.8",
      "28.799999999999997",
      "35.8"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average of 20 numbers rises from 35 to 37. By how much has their total sum increased?",
    "options": [
      "37",
      "33",
      "44",
      "40"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average of 20 numbers is 42. If one more number 35 is included, what is the new average?",
    "options": [
      "44.67",
      "36.67",
      "39.67",
      "41.67"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average of 36 values increases by 4 when one value is replaced. By how much did the replaced value increase?",
    "options": [
      "137",
      "144",
      "141",
      "148"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "A vehicle travels 5 km at 60 km/h and the next 2 km at 96 km/h. Find its average speed for the whole journey.",
    "options": [
      "59.2",
      "67.2",
      "64.2",
      "71.2"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "In a group of 40 students, the average score of 30 students is 48, and that of the remaining students is 74. Find the overall average.",
    "options": [
      "57.5",
      "48.5",
      "52.5",
      "54.5"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average of 16 numbers was calculated as 28 after a value 10 was mistakenly used instead of 50. Find the correct average.",
    "options": [
      "27.5",
      "34.5",
      "23.5",
      "30.5"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average age of 5 people is 31.2. When each person's age is increased by 2 years, what is the new average?",
    "options": [
      "37.2",
      "30.200000000000003",
      "26.200000000000003",
      "33.2"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average of 18 numbers rises from 55 to 58. By how much has their total sum increased?",
    "options": [
      "47",
      "54",
      "58",
      "51"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "The average of 24 numbers is 48. If one more number 25 is included, what is the new average?",
    "options": [
      "50.08",
      "47.08",
      "42.08",
      "45.08"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "The average of 18 values increases by 4 when one value is replaced. By how much did the replaced value increase?",
    "options": [
      "65",
      "72",
      "69",
      "76"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "A vehicle travels 2 km at 45 km/h and the next 6 km at 96 km/h. Find its average speed for the whole journey.",
    "options": [
      "74.81",
      "71.81",
      "66.81",
      "78.81"
    ],
    "answer": 0,
    "set": 3
  }
];
