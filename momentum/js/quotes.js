const quotes = [
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다 반드시 실천하여야 한다",
    author: "이소룡",
  },
  {
    quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든 믿는 대로 될 것이다",
    author: "헨리 포드",
  },
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Gail Winfrey",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
