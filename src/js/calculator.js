import {Swiper} from "swiper";
import noUiSlider from 'nouislider';

export default function calculator() {
  const container = document.querySelector('.js-init-calculator');
  if (container) {
    const checkbox = container.querySelector('.js-checkbox');
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('active');
    })

    const sliderElement = container.querySelector('.swiper');
    const swiper = new Swiper(sliderElement, {
      slidesPerView: 5,
      centeredSlides: true,
      loop: true
    });

    const rangeElement = container.querySelector('.js-range');
    const range = noUiSlider.create(rangeElement, {
        range: {
          'min': 1,
          'max': 5
        },
        start: 1,
        connect: false,
        step: 1
    });
    
    const input = container.querySelector('.js-input');
    range.on('update', (values) => {
      input.value = Math.round(values[0]);
        setSize(input);
    })

    setSize(input);

    input.addEventListener('change', () => {
      range.set(input.value);
      setSize(input);
    })

    input.addEventListener('input', () => {
      setSize(input);
    })

    function setSize(input) {
      input.size = input.value.length || 1;
      if (input.value.length > 3) {
        input.size = 3;
      }
    }
  }
}