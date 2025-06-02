const accordionButtons = document.querySelectorAll(".faq__accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const isActive = this.classList.contains("active");

    if (isActive) {
      this.classList.remove("active");
      content.classList.remove("active");
    } else {
      // close all questions
      accordionButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.classList.remove("active");
      });

      // open the clicked question with a tiny delay for smoother visual transition
      setTimeout(() => {
        this.classList.add("active");
        content.classList.add("active");
      }, 250);
    }
  });
});
