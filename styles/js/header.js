// make a function that hides the header when the user scrolls down and shows it when the user scrolls up
// this function is called on scroll
// Only make the navbar sticky when the user scrolls past the header

let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScrollTop = scrollTop;
});
