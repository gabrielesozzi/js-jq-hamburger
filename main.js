var menu = $(".hamburger-menu");
var logoMenu = $(".header-right a")
var closeMenu = $(".close")


logoMenu.click( function () {
  menu.addClass("active")
})

closeMenu.click( function () {
  menu.removeClass("active");
})


// Altro metodo senza utilizzo classe active

// logoMenu.click( function () {
  //   menu.fadeToggle();
  // })
  //
  // closeMenu.click( function () {
    //   menu.fadeToggle();
    // })
