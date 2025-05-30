const hash = window.location.hash;

if (hash === "#news") {
  const waitForNews = setInterval(() => {
    const newsSection = document.querySelector("#news");

    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" });
      clearInterval(waitForNews);
    }
  }, 100); // перевіряємо кожні 100 мс
}

const newsAnchor = document.querySelector('[href*="#news"]');
const isOnIndex = window.location.pathname.includes('index.html') || window.location.pathname === '/';

if (!isOnIndex && newsAnchor) {
  newsAnchor.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'index.html#news';
  });
}
