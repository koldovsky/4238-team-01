# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```

Add the data-proofer-ignore attribute to any tag to ignore it from every check.

```html
<a href="https://notareallink" data-proofer-ignore>Not checked.</a>
```


## Team
- Dmytro Gerasymenko 7, 11, 20
- Olena Moroz 5, 6, 12
- Maksym Khrapa 15
- Kostantin Paholok 2, 19
- Levko Sviatoslav 1
- Dmytro Belevtsev 9, 18
- Vasylyna Kuliaba 16
- Oleksandr Kozynets
- Anastasiia Dubachynska 3, 14
