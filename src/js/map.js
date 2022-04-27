export default function map() {
  const container = document.querySelector('.js-init-map');
  if (container) {

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

      const options = dropdown.querySelectorAll('.dropdown__option');
      const selected = dropdown.querySelector('.dropdown__selected');
      options.forEach((option, i) => {
        option.addEventListener('click', () => {
          selected.textContent = option.textContent;
          options.forEach((opt, j) => {
            if (i === j) {
              opt.classList.add('active');
            } else {
              opt.classList.remove('active');
            }
          })
          dropdown.classList.remove('active');
        })
      })
    })

    // Map
    ymaps.ready(init);
    function init(){
        const map = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10,
            controls: []
        });

        const placemark = new ymaps.Placemark([55.8, 37.6]);
        map.geoObjects.add(placemark);

        const placemark2 = new ymaps.Placemark([55.9, 37.7]);
        map.geoObjects.add(placemark2);

        const placemark3 = new ymaps.Placemark([55.7, 37.5]);
        map.geoObjects.add(placemark3);
    }
  }
}