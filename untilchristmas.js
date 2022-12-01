const time = document.querySelector(".time");

function clock() {
  const xmasday = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  const difference = new Date(xmasday - now);
  const secondsvalue = Math.floor(difference / 1000);
  const minutesvalue = Math.floor(secondsvalue / 60);
  const hoursvalue = Math.floor(minutesvalue / 60);
  const daysvalue = Math.floor(hoursvalue / 24);
  const seconds = String(secondsvalue % 60).padStart(2, "0");
  const minutes = String(minutesvalue % 60).padStart(2, "0");
  const hours = String(hoursvalue % 24).padStart(2, "0");
  time.innerHTML = `${daysvalue}d ${hours}h ${minutes}m ${seconds}s`;
}

clock();
setInterval(clock, 1000);
