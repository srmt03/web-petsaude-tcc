const emailInput = document.querySelector("#email-input");
const passwordInput = document.getElementById("password-input");

emailInput.addEventListener("input", (e) => {
  document.querySelector(".error-popup").classList.remove("show");
});

passwordInput.addEventListener("input", (e) => {
  document.querySelector(".error-popup").classList.remove("show");
});

document.querySelector(".hide-popup-btn").addEventListener("click", () => {
  document.querySelector(".error-popup").classList.remove("show");
});
