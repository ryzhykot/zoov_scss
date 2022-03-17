if (document.querySelector('.barf-list')) {
  new Swiper('.barf-list', {
    observer: true,
    observeParents: true,
    // SLIDES ==================================================================================
    slidesPerView: 1,
    spaceBetween: 0,
    watchOverflow: true,
    // DOTTS ==================================================================================
    pagination: {
      el: '.barf-list .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // УПРАВЛЕНИЕ ==================================================================================
    simulateTouch: true,
    touchRatio: 1,
    toushAngle: 45,
    grabCursor: true,

    // клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // BREAKPOINTS ==================================================================================
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1268: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  });
}

// SECOND ==================================================================================

if (document.querySelector('.ration-slider')) {
  new Swiper('.ration-slider', {
    observer: true,
    observeParents: true,
    loop: true,

    // SLIDES ==================================================================================

    slidesPerView: 1,
    spaceBetween: 0,
    watchOverflow: true,
    slidesPerGroup: 1,
    parallax: true,
    // SPEED LOOP ==================================================================================
    speed: 800,
    // AUTOPLAY ==================================================================================
			autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
      disableOnInteraction: true,
    },

    // DOTTS ==================================================================================

    pagination: {
      el: '.ration-slider .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // УПРАВЛЕНИЕ ==================================================================================

    simulateTouch: true,
    touchRatio: 1,
    toushAngle: 45,
    grabCursor: true,

    // клавиатурой
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // BREAKPOINTS ==================================================================================
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      360: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2.55,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3.25,
        spaceBetween: 24,
        loop: true,
      },
      1268: {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: false,
      },
    },
  });
}

// POPAP SLIDER ==================================================================================

if (document.querySelector('.popup-slider')) {
  // Создаем слайдер
  new Swiper('.popup-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    slidesPerGroup: 1,
    // миниатюры
    thumbs: {
      swiper: {
        el: '.popup-mini',
        slidesPerView: 4,
        spaceBetween: 28,
        breakpoints: {
          320: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }
      }
    },
  });
}





