export default function header() {
  const header = document.querySelector('header');

  if (header) {
    const toggleHeader = () => {
      if (window.scrollY > window.innerHeight) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }

    window.addEventListener('scroll', toggleHeader)

    toggleHeader();
  }
}