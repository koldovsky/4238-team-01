const root = document.documentElement;
const darkColor = getComputedStyle(root).getPropertyValue('--btn-bg-dark-color').trim();
const originalColor = getComputedStyle(root).getPropertyValue('--text-alt-section-color').trim();
const button = document.querySelector('.contact-form__play-button');
button.addEventListener('click', () => {
  button.style.backgroundColor = darkColor;
  setTimeout(() => {
    button.style.backgroundColor = originalColor;
  }, 300);
});