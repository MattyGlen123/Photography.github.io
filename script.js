// Navigation functionality

const navItems = document.querySelector('.navigation__list');
const checkbox = document.getElementById('navi-toggle');

navItems.addEventListener('click', closeNav);

function closeNav() {
  checkbox.checked = false;
}

// About functionality

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const aboutSection = document.querySelector('.about');
const aboutSectionImg = document.querySelector('.about__img');
const aboutSectionText = document.querySelector('.about__text-box');

function checkslide() { // when window is scrolled onto about section, trigger animation.
  const appearAt = (window.scrollY + window.innerHeight) - aboutSection.offsetHeight / 2; 
  const imageIsHalfShown = appearAt > aboutSection.offsetTop;
  
  if(imageIsHalfShown) {
    aboutSectionImg.classList.remove('ImgPreScroll');
    aboutSectionImg.classList.add('ImgScrolled');
		aboutSectionText.classList.remove('TextPreScroll');
		aboutSectionText.classList.add('TextScrolled');
  }
}

window.addEventListener('scroll', debounce(checkslide));