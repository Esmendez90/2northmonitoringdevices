const elements = document.querySelectorAll(".display-element");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.y <= 850
  );
}

window.addEventListener("scroll", () => {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("is-in-viewport");
    } else {
      element.classList.remove("is-in-viewport");
    }
  });
});

