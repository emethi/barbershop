// Efeito de transição suave ao carregar a página
window.onload = function() {
    document.body.style.opacity = "1";
};
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            const href = this.getAttribute("href");
            if (href && href !== "#") {
                event.preventDefault();
                document.body.style.opacity = "0";
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});