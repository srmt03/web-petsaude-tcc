// import "./utils/petsaude";

import { signup } from "./utils/userFetch.js";

const password = document.getElementById("password-input");
const icon = document.getElementById("icon");

function showHide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    icon.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    icon.classList.remove("hide");
  }
}

icon.addEventListener("click", showHide);

const loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", async () => {
  const email = document.querySelector("#email-input").value;
  const password = document.querySelector("#password-input").value;
  const loginInfos = { email, password };

  const token = await signup(loginInfos.email, loginInfos.password);

  if (token) localStorage.setItem("token", token);
  else {
  }
});
