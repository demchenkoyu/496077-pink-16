var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var navBackground = document.querySelector('.page-header__logo');


  navMain.classList.remove('main-nav--nojs');
  navBackground.classList.add('page-header__logo--back');



  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      navBackground.classList.remove('page-header__logo--back');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navBackground.classList.add('page-header__logo--back');
    }
  });
