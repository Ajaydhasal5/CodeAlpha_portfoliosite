
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 200;
      if (top >= offset) {
        sec.style.animation = "fadeIn 1s ease-in-out";
      }
    });
  });
