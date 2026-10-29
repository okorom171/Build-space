
/* TOGGLE LIGHT AND DARK MODES */

const themeBtn = document.querySelector(".toggleBtn");

themeBtn.addEventListener("click", () => {
  const theme_attribute = document
    .querySelector("html")
    .getAttribute("data-theme");

  if (theme_attribute === "light") {
    document.querySelector("html").setAttribute("data-theme", "dark");
    themeBtn.textContent = "Light Mode";
  } else {
    document.querySelector("html").setAttribute("data-theme", "light");
    themeBtn.textContent = "Dark Mode";
  }
});
