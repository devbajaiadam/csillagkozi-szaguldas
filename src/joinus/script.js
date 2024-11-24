document.getElementById("join-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ship = document.getElementById("ship").value;
    const experience = document.getElementById("experience").value;
    const message = document.getElementById("message").value;
  
    // Egyszerű validáció és visszajelzés
    if (name && email && ship && experience) {
      alert(`Köszönjük, ${name}! A jelentkezésedet fogadtuk.`);
      // További logika: Küldés szerverre (AJAX / API hívás)
    } else {
      alert("Kérjük, töltsd ki az összes kötelező mezőt!");
    }
  });
  