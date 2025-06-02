function init() {
    import('./global.brand-carousel.js'); // Dmytro Belevtsev
    import('./about-us.history.js'); // Dmytro Belevtsev
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});