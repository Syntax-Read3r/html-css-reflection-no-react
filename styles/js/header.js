// This will hide and show the header on scroll

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
