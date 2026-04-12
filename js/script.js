const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animación de la hamburguesa (opcional)
    menu.classList.toggle('is-active');
});

// Cerrar el menú al hacer clic en un enlace (importante para SPAs)
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navLinks.classList.remove('active');
}));