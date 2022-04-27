import {Swiper, Navigation, EffectFade} from "swiper";

Swiper.use([Navigation, EffectFade]);

export default function sliders() {
  const sliders = Array.from(document.querySelectorAll('.js-init-slider'));
  sliders.forEach(slider => {
    const navigation = slider.querySelector('.navigation');
    let navSettings = {};

    if (navigation) {
      navSettings = {
        navigation: {
          nextEl: navigation.querySelector('.js-next'),
          prevEl: navigation.querySelector('.js-prev'),
        }
      }
    }

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      autoHeight: true,
      ...navSettings,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });

    if (navigation) {
      const counter = navigation.querySelector('.navigation__counter');
      const updateCounter = (swiper) => {
        counter.textContent = `${swiper.activeIndex + 1}/${swiper.slides.length}`;
      };
  
      updateCounter(swiper);
  
      swiper.on('slideChange', updateCounter);
    }
  })
}