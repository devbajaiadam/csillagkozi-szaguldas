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