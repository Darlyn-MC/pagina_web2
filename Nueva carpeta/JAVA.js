document.addEventListener("DOMContentLoaded", function() {
    // Agregar eventos de desplazamiento suave para los enlaces de navegación
    const links = document.querySelectorAll("nav a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});