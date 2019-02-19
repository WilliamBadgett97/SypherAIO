particlesJS.load('particles-js', 'particle-cfg.json', function() {
  console.log('callback - particles.js config loaded');
});

AOS.init();

let navBtn = document.querySelector('.Navbar__Responsive')


navBtn.addEventListener('click', () => {
  console.dir(navBtn.children)
  let child = navBtn.children;
  if(child[0].classList.length === 1) {
    child[0].classList.add('hamburger-top')
    child[1].classList.add('hamburger-mid')
    child[2].classList.add('hamburger-bottom')
    document.querySelector('.Responsive__Nav').style.right = 0;
    document.querySelector('.Responsive__Nav').style.display = 'block';
  }
  else if(child[0].classList.length > 1) {
    child[0].classList.remove('hamburger-top')
    child[1].classList.remove('hamburger-mid')
    child[2].classList.remove('hamburger-bottom')
    document.querySelector('.Responsive__Nav').style.right = '-75%';
    document.querySelector('.Responsive__Nav').style.display = 'none';

  }
})

window.addEventListener('resize', () => {
  if(window.innerWidth > 950) {
    document.querySelector('.Responsive__Nav').style.right = '-75%';
    let child = navBtn.children
    child[0].classList.remove('hamburger-top')
    child[1].classList.remove('hamburger-mid')
    child[2].classList.remove('hamburger-bottom')
  }
})
$('.single-item').slick({
  autoplay: true,
  autoplaySpeed: 2000,
});

let questionHeading = document.querySelectorAll('.faq__flex');



 showText = (el) => {
   let text = el.nextElementSibling;
   if(text.style.opacity === '') {
   text.previousElementSibling.firstElementChild.classList.add('fa-plus')
   text.style.opacity = '1'
   text.style.fontSize = '2em'
 } else {
   text.previousElementSibling.firstElementChild.classList.remove('fa-plus')
   text.style.opacity = ''
   text.style.fontSize = '0'
 }
 }

questionHeading.forEach(el => {
  el.addEventListener('click', () => showText(el))
})
