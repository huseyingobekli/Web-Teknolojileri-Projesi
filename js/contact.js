const switchButton = document.querySelector("#on-off");
const formWrapper = document.querySelector(".formmain");

switchButton.addEventListener("click", () => {
  formWrapper.classList.toggle("active");
});
