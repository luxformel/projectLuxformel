const currentTheme = localStorage.getItem("theme") || "defaultTheme";
const themeStylesheetLink = document.getElementById("themeStylesheetLink");

function activateTheme(themeName) {
  themeStylesheetLink.setAttribute("href", `css/Themes/${themeName}.css`);
}
function setTheme() {
  activateTheme(currentTheme);
}
setTheme();

const currentNavSetting = localStorage.getItem("navSetting") || "relativeNav";
const navStylesheet = document.getElementById("navStylesheet");
console.log(currentNavSetting);

function activateNavSetting(navSettingName) {
  navStylesheet.setAttribute("href", `css/settings/${navSettingName}.css`);
}
function setNavSetting() {
  activateNavSetting(currentNavSetting);
}
setNavSetting();
