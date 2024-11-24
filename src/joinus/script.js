document.getElementById("join-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ship = document.getElementById("ship").value;
    const experience = document.getElementById("experience").value;
    const message = document.getElementById("message").value;
  
    if (name && email && ship && experience) {
      alert(`Köszönjük, ${name}! A jelentkezésedet fogadtuk.`);
    } else {
      alert("Kérjük, töltsd ki az összes kötelező mezőt!");
    }
  });
  