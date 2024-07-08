document.addEventListener("DOMContentLoaded", function () {
  var submenuToggles = document.querySelectorAll(".submenu-toggle");
  var submenus = document.querySelectorAll(".submenu");

  submenuToggles.forEach(function (toggle, index) {
    toggle.addEventListener("click", function () {
      submenus[index].classList.toggle("open");
    });
  });
});

function test() {
  alert("test");
}
