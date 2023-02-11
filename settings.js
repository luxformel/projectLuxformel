function initThemeSelector() {
  const themeSelect = document.getElementById("themeSelect");
  const themeStylesheetLink = document.getElementById("themeStylesheetLink");
  const currentTheme = localStorage.getItem("theme") || "defaultTheme";

  function activateTheme(themeName) {
    themeStylesheetLink.setAttribute("href", `css/Themes/${themeName}.css`);
  }

  themeSelect.addEventListener("change", () => {
    activateTheme(themeSelect.value);
    localStorage.setItem("theme", themeSelect.value);
  });
  themeSelect.value = currentTheme;
  activateTheme(currentTheme);
}

initThemeSelector();

function initNavSetting() {
  const navigatorSelect = document.getElementById("navigatorSelect");
  const navStylesheet = document.getElementById("navStylesheet");
  const currentNavSetting = localStorage.getItem("navSetting") || "relativeNav";

  function activateTheme(navSettingName) {
    navStylesheet.setAttribute("href", `css/settings/${navSettingName}.css`);
  }

  navigatorSelect.addEventListener("change", () => {
    activateTheme(navigatorSelect.value);
    localStorage.setItem("navSetting", navigatorSelect.value);
  });
  navigatorSelect.value = currentNavSetting;
  activateTheme(currentNavSetting);
}

initNavSetting();
