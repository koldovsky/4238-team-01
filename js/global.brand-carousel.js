const caroucel = document.querySelector(".brand-carousel");
// caroucel.addEventListener('click', showMessage);
// function showMessage(){
//     alert('!');
// }

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

const itemContainer = document.querySelector(".brand-carousel__track");
const btnLeft = document.querySelector(".brand-carousel__button--left");
const btnRight = document.querySelector(".brand-carousel__button--right");

window.addEventListener("resize", renderSlides);
btnLeft.addEventListener("click", slideLeft);
btnRight.addEventListener("click", slideRight);

let currentIndex = 0;

function renderSlides() {
  const html = [];
  html.push(slides[currentIndex]);

  if (window.matchMedia("(min-width: 425px)").matches) {
    html.push(slides[(currentIndex + 1) % slides.length]);
    if (window.matchMedia("(min-width: 768px)").matches) {
      html.push(slides[(currentIndex + 2) % slides.length]);
      if (window.matchMedia("(min-width: 1024px)").matches) {
        html.push(slides[(currentIndex + 3) % slides.length]);
        if (window.matchMedia("(min-width: 1280px)").matches) {
          html.push(slides[(currentIndex + 4) % slides.length]);
        }
      }
    }
  }

  itemContainer.innerHTML = html.join("");
}

function slideLeft() {
  currentIndex = (currentIndex + 1) % slides.length;
  renderSlides();
}

function slideRight() {
  currentIndex = ((currentIndex - 1) + slides.length) % slides.length;
  renderSlides();
}

renderSlides();
