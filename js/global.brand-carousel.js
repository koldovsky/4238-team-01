const frameOpenTagL = '<div class="brand-carousel__frame">';
const frameOpenTagR = '<div class="brand-carousel__frame offset">';
const frameCloseTag = "</div>";
const slides = [
  `<div class="brand-carousel__item">
            <img width="120" src="img/global/ibm.svg" alt="IBM" />
        </div>`,
  `<div class="brand-carousel__item">
            <img width="120" src="img/global/amazon.svg" alt="Amazon" />
        </div>`,
  `<div class="brand-carousel__item">
            <img width="120" src="img/global/intel.svg" alt="Intel" />
        </div>`,
  `<div class="brand-carousel__item">
            <img width="120" src="img/global/apple.svg" alt="Apple" />
        </div>`,
  `<div class="brand-carousel__item">
            <img width="120" src="img/global/microsoft.svg" alt="Microsoft" />
        </div>`,
  `<div class="brand-carousel__item">
            <img width="120" src="img/global/google.svg" alt="Google" />
        </div>`,
  `<div class="brand-carousel__item">
            <img width="120" src="img/global/visa.svg" alt="Visa" />
        </div>`,
];

let framePositionX = 0;
let currentIndex = 0;
let frame;

const carouselTrack = document.querySelector(".brand-carousel__track");
const btnLeft = document.querySelector(".brand-carousel__button--left");
const btnRight = document.querySelector(".brand-carousel__button--right");

window.addEventListener("resize", renderSlides);
btnLeft.addEventListener("click", slideLeft);
btnRight.addEventListener("click", slideRight);

renderSlides();

function renderSlides() {
  const html = [];
  html.push(frameOpenTagL);
  html.push(slides[currentIndex]);
  let offset = 0;

  if (window.matchMedia("(min-width: 425px)").matches) {
    html.push(slides[(currentIndex + ++offset) % slides.length]);
    if (window.matchMedia("(min-width: 768px)").matches) {
      html.push(slides[(currentIndex + ++offset) % slides.length]);
      if (window.matchMedia("(min-width: 1024px)").matches) {
        html.push(slides[(currentIndex + ++offset) % slides.length]);
        if (window.matchMedia("(min-width: 1280px)").matches) {
          html.push(slides[(currentIndex + ++offset) % slides.length]);
        }
      }
    }
  }

  const gap = offset * 10;
  let currentWidth = (offset + 1) * 160 + gap + "px";

  carouselTrack.style.width = currentWidth;
  carouselTrack.style.justifySelf = "center";
  html.push(frameCloseTag);
  carouselTrack.innerHTML = html.join("");
}

function renderSlidesLeft() {
  const html = [];
  html.push(frameOpenTagL);
  html.push(slides[currentIndex]);
  let offset = 0;

  if (window.matchMedia("(min-width: 425px)").matches) {
    html.push(slides[(currentIndex + ++offset) % slides.length]);
    if (window.matchMedia("(min-width: 768px)").matches) {
      html.push(slides[(currentIndex + ++offset) % slides.length]);
      if (window.matchMedia("(min-width: 1024px)").matches) {
        html.push(slides[(currentIndex + ++offset) % slides.length]);
        if (window.matchMedia("(min-width: 1280px)").matches) {
          html.push(slides[(currentIndex + ++offset) % slides.length]);
        }
      }
    }
  }

  const gap = offset * 10;
  let currentWidth = (offset + 1) * 160 + gap + "px";

  carouselTrack.style.width = currentWidth;
  carouselTrack.style.justifySelf = "flex-start";
  html.push(slides[(currentIndex + ++offset) % slides.length]); // hidden slide
  html.push(frameCloseTag);
  carouselTrack.innerHTML = html.join("");

  currentIndex = (currentIndex + 1) % slides.length;
}

function renderSlidesRight() {
  const html = [];
  html.push(frameOpenTagR);
  html.push(slides[(currentIndex - 1 + slides.length) % slides.length]); // hidden slide
  html.push(slides[currentIndex]);
  let offset = 0;

  if (window.matchMedia("(min-width: 425px)").matches) {
    html.push(slides[(currentIndex + ++offset) % slides.length]);
    if (window.matchMedia("(min-width: 768px)").matches) {
      html.push(slides[(currentIndex + ++offset) % slides.length]);
      if (window.matchMedia("(min-width: 1024px)").matches) {
        html.push(slides[(currentIndex + ++offset) % slides.length]);
        if (window.matchMedia("(min-width: 1280px)").matches) {
          html.push(slides[(currentIndex + ++offset) % slides.length]);
        }
      }
    }
  }

  const gap = offset * 10;
  let currentWidth = (offset + 1) * 160 + gap + "px";
  carouselTrack.style.justifySelf = "flex-start";
  carouselTrack.style.width = currentWidth;
  html.push(frameCloseTag);
  carouselTrack.innerHTML = html.join("");

  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
}

function slideLeft() {
  framePositionX = -170;
  renderSlidesLeft();
  setTimeout(translate);
}

function slideRight() {
  framePositionX = 0;
  renderSlidesRight();
  setTimeout(translate);
}

function translate() {
  frame = document.querySelector(".brand-carousel__frame");
  frame.style.transform = `translateX(${framePositionX}px)`;
  framePositionX = 0;
}
