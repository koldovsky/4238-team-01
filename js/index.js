function init() {
    import('./index.cases.js'); // Anastasiia Dubachynska
    import('./index.faq.js'); // Dmytro Gerasymenko
    import('./global.brand-carousel.js'); // Dmytro Belevtsev
    import('./index.contact-us.js'); //Anastasiia Dubachynska
    import('./news-scroll.js'); // Levko Sviayoslav
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});

