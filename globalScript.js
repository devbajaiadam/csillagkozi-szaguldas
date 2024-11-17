// Csillagok száma
const numStars = 100; // Itt állíthatod be a csillagok számát

// A stars konténer lekérése
const starsContainer = document.querySelector('.stars');

// Csillagok létrehozása
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Véletlenszerű elhelyezés
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    // Csillag hozzáadása a konténerhez
    starsContainer.appendChild(star);
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

const monthYear = document.getElementById("month-year");
const daysGrid = document.getElementById("days-grid");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Beállítjuk a hónapot és az évet
  const monthNames = [
    "Január", "Február", "Március", "Április", "Május", "Június",
    "Július", "Augusztus", "Szeptember", "Október", "November", "December"
  ];
  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Töröljük a napokat
  daysGrid.innerHTML = "";

  // Hónap kezdő és végdátumai
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Kitöltjük a napokat
  for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
    const emptyCell = document.createElement("div");
    daysGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("div");
    dayCell.textContent = day;

    // Mai nap kiemelése
    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayCell.classList.add("today");
    }

    daysGrid.appendChild(dayCell);
  }
}

// Hónap váltása
prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Naptár renderelése
renderCalendar(currentDate);
