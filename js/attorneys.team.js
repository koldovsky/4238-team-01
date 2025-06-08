const flipButton = document.querySelector(".team__flip-button");
const attorneyNames = document.querySelectorAll(".team__attorney-name");
const imageWrappers = document.querySelectorAll(
  ".team__attorney-image-wrapper"
);
const teamSection = document.querySelector(".team");
let isFlipped = false;

flipButton.addEventListener("click", function () {
  // flip the button itself first
  flipButton.classList.toggle("flipped");

  // then change section background
  teamSection.classList.toggle("flipped");

  // finally flip the attorney names and images with staggered timing
  attorneyNames.forEach((nameElement, index) => {
    setTimeout(() => {
      nameElement.classList.toggle("flipped");
      imageWrappers[index].classList.toggle("flipped");
    }, index * 100);
  });

  isFlipped = !isFlipped;
});
