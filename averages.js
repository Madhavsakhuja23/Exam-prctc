// Static question bank. Each object belongs to exactly one set.
const averagesQuestions = [
  {
    "question": "The average of 7 numbers is 20. What is their total?",
    "options": [
      "140",
      "133",
      "150",
      "147"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "Find the average of 14 and 26.",
    "options": [
      "22",
      "24",
      "18",
      "20"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "The average of 9 values is 25. A new value is added and the average becomes 28. What is the added value?",
    "options": [
      "57",
      "53",
      "60",
      "55"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "A group of 6 people has average age 51. One person aged 38 is replaced, and the average rises by 2 years. What is the new person's age?",
    "options": [
      "50",
      "55",
      "52",
      "48"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "A traveller covers equal distances at 40 km/h and 30 km/h. What is the average speed for the whole journey?",
    "options": [
      "35",
      "32.29",
      "34.29",
      "36.29"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "Group A has 20 students with average score 70; Group B has 30 students with average score 80. Find the combined average.",
    "options": [
      "75",
      "79",
      "76",
      "73"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "What is the average of the first 10 positive integers?",
    "options": [
      "6.5",
      "7.5",
      "5.5",
      "4.5"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "The average of 8 numbers is 17. The first 7 numbers have average 16. Find the last number.",
    "options": [
      "26",
      "24",
      "28",
      "22"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "Find the average of 10, 20, 30, 40, 10.",
    "options": [
      "24",
      "20",
      "27",
      "22"
    ],
    "answer": 3,
    "set": 1
  },
  {
    "question": "A journey is split into three equal distances travelled at 20, 30 and 60 km/h. Find the average speed.",
    "options": [
      "28",
      "30",
      "32",
      "36.67"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "A bowler's average was 12.4 runs per wicket after 125 wickets. In the next match he takes 5 wickets and his average falls to 12.2. How many runs did he concede in that match?",
    "options": [
      "41",
      "36",
      "34",
      "38"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "The average of 11 numbers is 21. If one number is increased by 22, by how much does the average increase?",
    "options": [
      "1",
      "2",
      "22",
      "11"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "Find the average of 15, 21 and 27.",
    "options": [
      "21",
      "19",
      "25",
      "23"
    ],
    "answer": 0,
    "set": 1
  },
  {
    "question": "The average of 9 numbers is 31. A number 27 is replaced and the average increases by 3. What is the replacement number?",
    "options": [
      "59",
      "54",
      "51",
      "57"
    ],
    "answer": 1,
    "set": 1
  },
  {
    "question": "The average of all integers from 1 through 13 is:",
    "options": [
      "6",
      "8",
      "7",
      "9"
    ],
    "answer": 2,
    "set": 1
  },
  {
    "question": "The average of 8 numbers is 22. What is their total?",
    "options": [
      "186",
      "168",
      "176",
      "184"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "Find the average of 18 and 30.",
    "options": [
      "26",
      "28",
      "22",
      "24"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "The average of 10 values is 26. A new value is added and the average becomes 29. What is the added value?",
    "options": [
      "61",
      "57",
      "64",
      "59"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "A group of 7 people has average age 52. One person aged 41 is replaced, and the average rises by 2 years. What is the new person's age?",
    "options": [
      "60",
      "55",
      "57",
      "53"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "A traveller covers equal distances at 48 km/h and 32 km/h. What is the average speed for the whole journey?",
    "options": [
      "36.4",
      "40.4",
      "38.4",
      "40"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "Group A has 24 students with average score 65; Group B has 36 students with average score 75. Find the combined average.",
    "options": [
      "68",
      "70",
      "74",
      "71"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "What is the average of the first 11 positive integers?",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "The average of 9 numbers is 18. The first 8 numbers have average 17. Find the last number.",
    "options": [
      "26",
      "28",
      "30",
      "24"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "Find the average of 10, 20, 30, 40, 20.",
    "options": [
      "29",
      "24",
      "26",
      "22"
    ],
    "answer": 1,
    "set": 2
  },
  {
    "question": "A journey is split into three equal distances travelled at 24, 36 and 72 km/h. Find the average speed.",
    "options": [
      "38",
      "44",
      "34",
      "36"
    ],
    "answer": 3,
    "set": 2
  },
  {
    "question": "A bowler's average was 12.4 runs per wicket after 150 wickets. In the next match he takes 5 wickets and his average falls to 12.2. How many runs did he concede in that match?",
    "options": [
      "29",
      "33",
      "31",
      "36"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "The average of 12 numbers is 22. If one number is increased by 24, by how much does the average increase?",
    "options": [
      "24",
      "12",
      "2",
      "1"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "Find the average of 18, 24 and 33.",
    "options": [
      "29",
      "23",
      "25",
      "27"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "The average of 10 numbers is 32. A number 28 is replaced and the average increases by 3. What is the replacement number?",
    "options": [
      "55",
      "63",
      "58",
      "61"
    ],
    "answer": 2,
    "set": 2
  },
  {
    "question": "The average of all integers from 1 through 14 is:",
    "options": [
      "7.5",
      "9.5",
      "6.5",
      "8.5"
    ],
    "answer": 0,
    "set": 2
  },
  {
    "question": "The average of 9 numbers is 24. What is their total?",
    "options": [
      "225",
      "226",
      "216",
      "207"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Find the average of 22 and 34.",
    "options": [
      "26",
      "30",
      "32",
      "28"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average of 11 values is 27. A new value is added and the average becomes 30. What is the added value?",
    "options": [
      "63",
      "61",
      "68",
      "65"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "A group of 8 people has average age 53. One person aged 44 is replaced, and the average rises by 2 years. What is the new person's age?",
    "options": [
      "62",
      "58",
      "60",
      "65"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "A traveller covers equal distances at 36 km/h and 24 km/h. What is the average speed for the whole journey?",
    "options": [
      "30.8",
      "30",
      "28.8",
      "26.8"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Group A has 18 students with average score 60; Group B has 27 students with average score 90. Find the combined average.",
    "options": [
      "81",
      "75",
      "78",
      "79"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "What is the average of the first 12 positive integers?",
    "options": [
      "5.5",
      "6.5",
      "8.5",
      "7.5"
    ],
    "answer": 1,
    "set": 3
  },
  {
    "question": "The average of 10 numbers is 19. The first 9 numbers have average 18. Find the last number.",
    "options": [
      "26",
      "32",
      "28",
      "30"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Find the average of 10, 20, 30, 40, 30.",
    "options": [
      "28",
      "31",
      "24",
      "26"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "A journey is split into three equal distances travelled at 30, 45 and 90 km/h. Find the average speed.",
    "options": [
      "45",
      "55",
      "43",
      "47"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "A bowler's average was 12.4 runs per wicket after 175 wickets. In the next match he takes 5 wickets and his average falls to 12.2. How many runs did he concede in that match?",
    "options": [
      "26",
      "31",
      "24",
      "28"
    ],
    "answer": 0,
    "set": 3
  },
  {
    "question": "The average of 13 numbers is 23. If one number is increased by 26, by how much does the average increase?",
    "options": [
      "1",
      "26",
      "2",
      "13"
    ],
    "answer": 2,
    "set": 3
  },
  {
    "question": "Find the average of 22, 28 and 37.",
    "options": [
      "31",
      "33",
      "27",
      "29"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average of 11 numbers is 33. A number 29 is replaced and the average increases by 3. What is the replacement number?",
    "options": [
      "65",
      "67",
      "59",
      "62"
    ],
    "answer": 3,
    "set": 3
  },
  {
    "question": "The average of all integers from 1 through 15 is:",
    "options": [
      "8",
      "7",
      "9",
      "10"
    ],
    "answer": 0,
    "set": 3
  }
];
