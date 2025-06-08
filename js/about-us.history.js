const button = document.querySelectorAll(".history__timeline-button");

button.forEach((btn) => {
  btn.addEventListener("click", buttonCallback);
});

function buttonCallback(event) {
  const textToOpen = event.target.nextElementSibling;

  let textToClose = document.querySelector(
    ".history__timeline-description--visible"
  );

  if (textToClose === textToOpen) {
    textToClose.classList.toggle("history__timeline-description--visible");
    event.target.innerText = "✚";
  } else {
    event.target.innerText = "✖";
    textToOpen.classList.toggle("history__timeline-description--visible");
    if (textToClose) {
      textToClose.classList.toggle("history__timeline-description--visible");
      textToClose.previousElementSibling.innerText = "✚";
    }
  }
}

const stories = document.querySelectorAll(".story");
const hiddenStory = document.querySelector(".history__hidden-story");
const historyTimeline = document.querySelector(".history__timeline");
const historyHiddenParagraph = document.querySelector(
  ".history__hidden-paragraph"
);

stories.forEach((story) => {
  story.addEventListener("click", getStoryReady);
});
async function getStoryReady(e) {
  const id = e.target.id;
  hiddenStory.style.display = "grid";
  const response = await fetch(`api/story${id}.json`);
  const data = await response.json();
  const { paragraph1, paragraph2 } = data;
  historyHiddenParagraph.innerHTML = paragraph1 + paragraph2;

  setTimeout(showStory);
}
function showStory() {
  hiddenStory.style.opacity = 1;
  historyTimeline.style.opacity = 0;
}

let historyButton = document.querySelector(".history__button");
historyButton.addEventListener("click", () => {
  hiddenStory.style.display = "none";
  hiddenStory.style.opacity = 0;
  historyTimeline.style.opacity = 1;
});
