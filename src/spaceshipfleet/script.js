function rotateSpaceship(element) {
    // Ha már forog, állítsuk le
    if (element.classList.contains("rotating")) {
      element.classList.remove("rotating");
    } else {
      // Különben kezdje el forgatni
      element.classList.add("rotating");
    }
  }
  