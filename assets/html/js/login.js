// import "./utils/petsaude";

import { signup } from "./utils/userFetch.js";
import "./utils/errorPopup.js";

const emailInput = document.querySelector("#email-input");
const passwordInput = document.getElementById("password-input");
const icon = document.getElementById("icon");
const loginButton = document.querySelector("#login-button");

function showHide() {
  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
    icon.classList.add("hide");
  } else {
    passwordInput.setAttribute("type", "password");
    icon.classList.remove("hide");
  }
}

icon.addEventListener("click", showHide);

loginButton.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  const loginInfos = { email, password };

  const token = await signup(loginInfos.email, loginInfos.password);

  if (token) localStorage.setItem("token", token);
  else {
    document.querySelector(".error-popup").classList.add("show");
  }
});

// emailInput.addEventListener("input", (e) => {
//   console.log(e);
//   document.querySelector(".error-popup").classList.remove("show");
// });

// document.querySelector(".hide-popup-btn").addEventListener("click", () => {
//   document.querySelector(".error-popup").classList.remove("show");
// });
