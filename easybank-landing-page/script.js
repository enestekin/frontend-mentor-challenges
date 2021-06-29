const btnToggle = document.querySelector('.header__toggle');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.header__overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnToggle.addEventListener('click', () => {


  if (header.classList.contains('open')) { // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out')
    })

  } 
  else { // Open Hamburger menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in')
    })
  }
})

console.log('enes');