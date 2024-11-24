// Visszaszámláló dátum beállítása
const targetDate = new Date("2024-12-31T23:59:59").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Frissítés a visszaszámláló HTML elemeiben
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "A verseny elkezdődött! 🚀";
  }
}, 1000);