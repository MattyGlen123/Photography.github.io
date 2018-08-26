const navItems = document.querySelector('.navigation__list');
const checkbox = document.getElementById('navi-toggle');


navItems.addEventListener('click', closeNav);

function closeNav() {
  checkbox.checked = false;
}



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

function checkslide( ) {
  const appearAt = (window.scrollY + window.innerHeight) - aboutSection.offsetHeight / 2;
  const imageIsHalfShown = appearAt > aboutSection.offsetTop;
  
  if (imageIsHalfShown) {
    aboutSection.classList.remove('preScroll');
    aboutSection.classList.add('appear');
    
  }
}

window.addEventListener('scroll', debounce(checkslide));