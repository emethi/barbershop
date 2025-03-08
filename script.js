// Seleciona o ícone do menu hambúrguer e o menu de navegação
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// Função para abrir/fechar o menu
function toggleMenu() {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// Adiciona um evento de clique ao ícone do menu hambúrguer
mobileMenu.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target) || mobileMenu.contains(event.target);
    if (!isClickInsideMenu && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});