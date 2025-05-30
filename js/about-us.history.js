const button = document.querySelectorAll(".history__timeline-button");

button.forEach((btn) => {
  btn.addEventListener("click", buttonCallback);
});

function buttonCallback(event) {
  const textToOpen = event.target.nextElementSibling;

  // event.target.innerText = "⨂";

  let textToClose = document.querySelector(
    ".history__timeline-description--visible"
  );

  if (textToClose === textToOpen) {
    textToClose.classList.toggle("history__timeline-description--visible");
    event.target.innerText = "⨁";
  } else {
    event.target.innerText = "⨂";
    textToOpen.classList.toggle("history__timeline-description--visible");
    if (textToClose) {
      textToClose.classList.toggle("history__timeline-description--visible");
      textToClose.previousElementSibling.innerText = "⨁";
    }
  }
}
