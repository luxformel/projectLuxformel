function printFunc() {
  // resets Theme
  //themeStylesheetLink.setAttribute("href", `css/Themes/defaultTheme.css`);

  //sets watermark
  document.getElementById("printWatermark").innerHTML =
    "https://luxformel.info/";

  //prints the window
  window.print();
  //console.log("has been clicked");
}
