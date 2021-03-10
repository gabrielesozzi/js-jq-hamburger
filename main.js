var menu = $(".hamburger-menu");
var logoMenu = $(".header-right a")
var closeMenu = $(".close")

logoMenu.click( function () {
  menu.fadeToggle();
})

closeMenu.click( function () {
  menu.fadeToggle();
})
