'use strict';

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






  // MENU-BURGER

// определяет на каком устройстве открыта страница (мобильное устройство или пк)
/* const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|Ipod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener('click', function(e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }

} else {
  document.body.classList.add('_pc');
}

// MENU

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}


// ПРОКРУТКА ПРИ КЛИКЕ

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 
      document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('._active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}


  // TIMER


  const deadline = '2022-03-01'; // дата окончания таймера (в виде строки)

  function getTimeRemaining(endtime) { //! разница между датами (что за аргумент endtime?)
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor( (t / (1000 * 60 * 60 * 24)) );
    const hours = Math.floor( (t / (1000 * 60 * 60) % 24) );
    const minutes = Math.floor( (t / 1000 / 60) % 60 );
    const seconds = Math.floor( (t / 1000) % 60 );

    return {      //! почему ключ в кавычках? значение подтягивается из переменной? 
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }


  function setClock(selector, endtime) {   // установить таймер
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock(); // вызываем вручную, чтобы не было задерки, так как const timeInterval вызывает аж через секунду

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);


    // TABS

    const buttonTabs = document.querySelectorAll('.tabs__button');
    const contentTabs = document.querySelectorAll('.tabs__content');
    const buttonTabsParent = document.querySelector('.tabs__button-group');
  
    function hideTabContent() {               // функция скрывает контент и удаляет класс активности кнопки
      contentTabs.forEach(item => {
        item.classList.add('hide');             // добавляем класс который скрывает контент
        item.classList.remove('show', 'fade');  // удаляем класс активности и анимации
      });
  
      buttonTabs.forEach(item => {
        item.classList.remove('tabs__button--active');  // удаляем класс активности кнопок
      });
    }
  
    function showTabContent(i = 1) {        // по умолчанию показать элемент под 1 индексом
      buttonTabs[i].classList.add('tabs__button--active');  // присвоить активный класс кнопке с индексом 1
      contentTabs[i].classList.add('show', 'fade');  // добавить контенту под 1 индексом класс анимации и видимости
      contentTabs[i].classList.remove('hide');  // удалить у контента под 1 индексом класс скрытия
    }
  
    hideTabContent();
    showTabContent();
  
    buttonTabsParent.addEventListener('click', (event) => {   //обложка для всех кнопок для диллегирования
      const target = event.target;                            // событие, ссылка на объект
      if (target && target.classList.contains('tabs__button')) {  // условие: если событие кнопка с классом tabs__button
        buttonTabs.forEach((item, i) => {   // то перебрать все кнопки определить какая и её индекс
          if (target == item) {    // и если событие на котором произошло действие равняется кнопке при переборе
            hideTabContent();      // запустить функции скрытия
            showTabContent(i);     // запустить функцию активности с индексом
          }
        });
      }
    });
 */

/* window.addEventListener('DOMContentLoaded', () => {
  // назначение главного глобального обработчика событий. либо через windows
  //либо через document. внутри него будут содержаться остальные скрипты

// MODAL

  const buttonOpenModal = document.querySelector('.button__modal');
  const modal = document.querySelector('.modal');
  const buttonCloseModal = document.querySelector('.modal__close');

  function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    //clearInterval(modalTimerId);
  }

  buttonOpenModal.addEventListener('click', openModal);

  buttonCloseModal.addEventListener('click', closeModal);


  modal.addEventListener('click', (e) => {      // чтобы закрывалось при клике на пустое место
    if (e.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {  // чтобы закрывалось окно при нажатии Escape
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
}); */