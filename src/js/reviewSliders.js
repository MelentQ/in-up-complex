import {Swiper, Navigation, EffectFade} from "swiper";

Swiper.use([Navigation, EffectFade]);

export default function reviewSliders() {
  const sliders = Array.from(document.querySelectorAll('.js-init-review-slider'));
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
      slidesPerGroup: 1,
      spaceBetween: 18,
      autoHeight: true,
      ...navSettings,
      breakpoints: {
        641: {
          slidesPerView: 2,
          slidesPerGroup: 2
        }
      }
    });

    if (navigation) {
      const counter = navigation.querySelector('.navigation__counter');
      const updateCounter = (swiper) => {
        const max = Math.ceil(swiper.slides.length / swiper.params.slidesPerView);
        const current = (swiper.slides.length % swiper.params.slidesPerView != 0) && (swiper.slides.length == swiper.activeIndex + 2)
          ? max
          : Math.ceil((swiper.activeIndex + 1) / swiper.params.slidesPerView);
        
        counter.textContent = `${current}/${max}`;
      };
  
      updateCounter(swiper);
  
      swiper.on('slideChange', updateCounter);
    }
  })
}