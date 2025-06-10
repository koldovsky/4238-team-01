const slides = [
  `
    <p class="consultation__description">
      * We will study your case <span class="consultation__description-highlight">for free</span>
      and appreciate your chances of success.
    </p>
    <p class="consultation__phone-number">+1 (234) 567 89 00</p>
    <a href="#contact">
      <button class="consultation__request-button">Send a Request</button>
    </a>
  `,
  `
    <p class="consultation__description">
      * Our team will review your documents <span class="consultation__description-highlight">at no cost</span>
      and provide a plan of action.
    </p>
    <p class="consultation__phone-number">+1 (987) 654 32 10</p>
    <a href="#contact">
      <button class="consultation__request-button">Start Now</button>
    </a>
  `,
  `
    <p class="consultation__description">
      * Request a callback and we'll explain <span class="consultation__description-highlight">your legal options</span>.
    </p>
    <p class="consultation__phone-number">+1 (555) 123 45 67</p>
    <a href="#contact">
      <button class="consultation__request-button">Book a Call</button>
    </a>
  `,
];

let currentIndex = 0;

function renderSlides() {
  const slidesContainer = document.querySelector(".consultation__slider");
  slidesContainer.innerHTML = slides[currentIndex];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  renderSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  renderSlides();
}

const btnNext = document.querySelector(".consultation__slider-button--next");
const btnPrev = document.querySelector(".consultation__slider-button--prev");

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

renderSlides();