import {Swiper} from "swiper";
import noUiSlider from 'nouislider';

export default function calculator() {
  const container = document.querySelector('.js-init-calculator');
  if (container) {
    
    const url = container.dataset.url;

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        render(data);
      })

    function render(data) {
      let current = 'cat';

      const slidesContainer = container.querySelector('.calculator__slider-wrapper');
      data.boxes.forEach(item => {
        const template = getTemplate(slidesContainer, "#slide");
        const image = template.querySelector('img');
        image.src = item.image;
        image.alt = item.name;
        const title = template.querySelector('.calculator__slide-title');
        title.textContent = item.name;

        slidesContainer.append(template);
      })

      const sliderElement = container.querySelector('.swiper');
      const swiper = new Swiper(sliderElement, {
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        allowTouchMove: false
      });

      let range; // no ui slider

      const rangeLabel = container.querySelector('.range__label');

      const checkbox = container.querySelector('.js-checkbox');
      checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('active');

        if (checkbox.classList.contains('active')) {
          current = 'dog';

          range.updateOptions({
            range: {
              'min': 1,
              'max': 50
            },
            start: 10
          })
          swiper.slideToLoop(data.boxes.findIndex((item) => item.type === "dog"))
        } else {
          current = 'cat';
          range.updateOptions({
            range: {
              'min': 1,
              'max': 10
            },
            start: 2
          })
          swiper.slideToLoop(data.boxes.findIndex((item) => item.type === "cat"))
        }
      })

      const rangeElement = container.querySelector('.js-range');
      range = noUiSlider.create(rangeElement, {
          range: {
            'min': 1,
            'max': 10
          },
          start: 2,
          connect: false,
          step: 1
      });
      
      const input = container.querySelector('.js-input');
      range.on('update', (values) => {
        input.value = Math.round(values[0]);
        swiper.slideToLoop(checkWeight(data, Number(input.value)));
        checkDoses(data, input.value);
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

      function checkWeight(data, weight) {
        return data.boxes.findIndex(item => current === item.type && item.weight.from <= weight && item.weight.to >= weight) || 0;
      }

      function checkDoses(data, weight) {
        const item = data.doses.find(item => current === item.type && item.weight.from <= weight && item.weight.to >= weight) || data.doses[0];

        rangeLabel.textContent = `разовая доза ${item.drops} капель = ${item.dose} мл`
      }
    }
  }
}

/**
 * Получает шаблон элемента
 * @param {Object} container DOM-элемент, контейнер, в котором находится шаблон
 * @param {String} selector CSS-селектор шаблона
 * @returns {Object} DOM-элемент
 */
 function getTemplate(container = document, selector) {
  return container.querySelector(selector)
    .content
    .children[0]
    .cloneNode(true);
}