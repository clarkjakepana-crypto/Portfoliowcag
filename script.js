"use strict";

const themeButton = document.getElementById("theme-button");

// Apply light or dark mode.
function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeButton.setAttribute("aria-pressed", String(dark));
}

// Restore the saved theme when browser storage is available.
try {
  const savedTheme = localStorage.getItem("portfolio-theme");
  setTheme(savedTheme === "dark");
} catch (error) {
  setTheme(false);
}

themeButton.hidden = false;

// Switch themes when the button is clicked.
themeButton.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");

  setTheme(dark);

  try {
    localStorage.setItem(
      "portfolio-theme",
      dark ? "dark" : "light"
    );
  } catch (error) {
   
  }
});

// Display the current year.
document.getElementById("year").textContent =
  new Date().getFullYear();

// Display your name if the profile picture cannot load.
const photo = document.getElementById("profile-photo");
const fallback = document.getElementById("photo-fallback");

function showPhotoFallback() {
  photo.hidden = true;
  fallback.hidden = false;
}

photo.addEventListener("error", showPhotoFallback);


if (photo.complete && photo.naturalWidth === 0) {
  showPhotoFallback();
}