const Max = document.querySelector("#Maxnumber");

const Play = document.querySelector(".start");
const score = document.querySelector(".hidden");

function rand(maxnumber) {
  return Math.floor(Math.random() * (maxnumber + 1));
}

function PlayGame(event) {
  const Guess = document.querySelector("#guess");
  event.preventDefault();
  if (Max.value == "" || Guess.value == "") {
    return;
  }
  const maxnumber = Max.value;
  const guessnumber = parseInt(Guess.value, 10);
  const random = Math.ceil(Math.random() * maxnumber);
  score.innerHTML = `You chose: ${
    Guess.value
  } , the machine chose: ${random}.<br />
  <strong>${guessnumber === random ? "You won!" : "You lost!"}</strong>`;
}
Play.addEventListener("click", PlayGame);
