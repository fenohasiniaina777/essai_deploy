const toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Ouvrir et fermer avec le bouton
toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
});

// Ferme la sidebar si on clique ailleur
document.addEventListener("click", () => {
    sidebar.classList.remove("active");
})