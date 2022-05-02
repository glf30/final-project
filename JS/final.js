const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signIn = document.getElementById("sign-in");

signUpButton.addEventListener("click", () => {
  console.log("DeezeNutz");
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signIn.addEventListener("click", () => {
  console.log("click");
  console.log(location.href);
  location.href = "http://google.com", true;
  console.log(location.href);
});
