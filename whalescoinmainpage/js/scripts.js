document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".btn-nav");
  
    navButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        navButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        alert(`Navigating to ${btn.textContent}`);
      });
    });
  });