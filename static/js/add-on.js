/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/
var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var changeicon = document.getElementById("theme-icon");

toggle.addEventListener("click", () => {
    if (toggle.checked) {
        maketheTheme("dark");
    } else {
        maketheTheme("light");
    }
});


// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
maketheTheme(savedTheme);


function maketheTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        changeicon.className="fas fa-sun fa-2x";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        changeicon.className="fas fa-moon fa-2x";

    }
}

