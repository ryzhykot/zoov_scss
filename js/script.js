window.onload = function () {
  // MENU-BURGER

  const iconMenu = document.querySelector('.menu__icon');
  const bodyMenu = document.querySelector('.menu__body');

  if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
    /* document.body.classList.toggle('_lock'); */
    iconMenu.classList.toggle('active');
    bodyMenu.classList.toggle('active');
  });
  }

  // HEADER

  const headerElement = document.querySelector('.header');

  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
    } else {
      headerElement.classList.add('_scroll');
    }
  };

  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement); // метод следит за объектом header


  // SPOLLERS

  const spollerButtons = document.querySelectorAll('[data-spoller]');
  const spollerText = document.querySelectorAll('.spoiler-block__text');

  spollerButtons.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
/*       spollerButtons.forEach((btnItem) => {
        btnItem.classList.remove('_active');
      }); */
      btnItem.classList.toggle('_active');

/*       spollerText.forEach((textItem) => {
        textItem.classList.add('hidden');
      }); */
      spollerText[index].classList.toggle('hidden');
    });
  });
};