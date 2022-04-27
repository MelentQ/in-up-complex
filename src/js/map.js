export default function map() {
  const container = document.querySelector('.js-init-map');
  if (container) {

    const url = container.dataset.url;

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        ymaps.ready(() => {
          render(data);
        })
      })

    function render(data) {
      // Map
      const map = new ymaps.Map("map", {
        center: data[0].coords,
        zoom: 10,
        controls: []
      });
      data.forEach(city => {
        city.places.forEach(place => {
          const placemark = new ymaps.Placemark(place.coords);
          map.geoObjects.add(placemark);
        })
      })

      // Dropdown
      const dropdowns = Array.from(container.querySelectorAll('.dropdown'));
      dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown__btn');

        btn.addEventListener('click', () => {
          dropdown.classList.toggle('active');
        })

        window.addEventListener('click', e => {
          const target = e.target
          if (!target.closest('.dropdown__content') && !target.closest('.dropdown__btn')) {
            dropdown.classList.remove('active');
          }
        })

        const selected = dropdown.querySelector('.dropdown__selected');
        selected.textContent = data[0].city;

        const optionsContainer = dropdown.querySelector('.dropdown__options');

        data.forEach(item => {
          const option = getTemplate(optionsContainer, '#option');
          option.textContent = item.city;

          option.addEventListener('click', () => {
            map.setCenter(item.coords, 10);

            selected.textContent = option.textContent;
            const options = dropdown.querySelectorAll('.dropdown__option');
            options.forEach((opt, j) => {
              opt.classList.remove('active');
            })
            option.classList.add('active');

            dropdown.classList.remove('active');
          })

          optionsContainer.append(option);
        })

        const options = dropdown.querySelectorAll('.dropdown__option');
        options[0].classList.add('active');
      })
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