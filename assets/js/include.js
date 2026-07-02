document.addEventListener("DOMContentLoaded", () => {
    // 1. On cible le placeholder dans le index.html
    const placeholder = document.getElementById("nav-placeholder");
    if (!placeholder) return;

    // 2. On va chercher le contenu du fichier nav.html
    fetch("partials/nav.html")
        .then(res => {
            if (!res.ok) {
                throw new Error("Impossible de charger le fichier nav.html");
            }
            return res.text();
        })
        .then(html => {
            // 3. On injecte le HTML de nav.html à l'intérieur du placeholder
            placeholder.innerHTML = html;
            
            // 4. Si tu as un autre script pour animer le menu (comme le menu burger)
            if (typeof initNav === "function") initNav();
        })
        .catch(err => console.error("Erreur d'inclusion :", err));
});