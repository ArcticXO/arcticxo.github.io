const toggleSwitch = document.querySelector("#dark-mode-toggle");
const currentTheme = localStorage.getItem("theme");

if (!currentTheme || currentTheme === "light") {
  // Set default mode to light
  document.documentElement.setAttribute("data-theme", "light");
  // Update localStorage to reflect the default mode
  localStorage.setItem("theme", "light");
} else {
  document.documentElement.setAttribute("data-theme", "dark");
}

function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

toggleSwitch.addEventListener("click", switchTheme, false);
