document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("nav-placeholder");
    if (!placeholder) return;

    const isInPages = window.location.pathname.includes("/pages/");
    const navPath = isInPages ? "../partials/nav.html" : "partials/nav.html";

    fetch(navPath)
        .then(res => res.text())
        .then(html => {
            placeholder.innerHTML = html;
        })
        .catch(err => console.error("Nav error:", err));
});