import loadWebsite from './website.js';
import createHome from './home.js';
import createMenu from './menu.js';

console.log('hello God');

loadWebsite();
// createHome()
createMenu();

function clearMain() {
	const mainChildren = main.childNodes;
	mainChildren.forEach((el) => {
		el.remove();
	});
}

function removeActiveTabBold() {
	const allLi = document.querySelectorAll('a');
	allLi.forEach((el) => el.classList.remove('tab-active'));
}

function classToggle (e) {
 e.classList.add('tab-active');
}

const liHome = document.getElementById('li-home');
liHome.addEventListener('click', (e) => {
	clearMain();
	createHome();
    removeActiveTabBold()
	classToggle(e.target);
});

const liMenu = document.getElementById('li-menu');
liMenu.addEventListener('click', (e) => {
	clearMain();
	createMenu();
    removeActiveTabBold()
    classToggle(e.target);
});
