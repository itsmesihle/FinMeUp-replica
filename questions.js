/* const prompt = require("prompt-sync")();

let questions = {
    cpu: "computational power unit",
    "comfortable": "true",
    ter: "total expense ratio",
    etf: "electronic traded fund",
    ipo: "initial public offering"
};

console.log(questions);

questions.comfortable = "false";

const randomIndex = 0 + Math.round(Math.random() * 3);
delete questions.comfortable;

console.log(Object.keys(questions));
console.log(typeof (questions)); */

const QUESTIONSabbreviations = [
  {
    question: "What does TER stand for?",
    answer: "total expense ratio",
  },
  {
    question: "What does TER stand for?",
    answer: "total expense ratio",
  },
  {
    question: "What does IPO stand for?",
    answer: "initial public offer",
  },
  {
    question: "What does ETF stand for?",
    answer: "electronically traded funds",
  },
];

console.log(QUESTIONS[1].question);
