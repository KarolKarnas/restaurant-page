import loadWebsite from './website';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

// console.log('hello God');

// ON PAGE LOAD
loadWebsite();
createHome();

// ON NAV CLICK
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

function classToggle(e) {
	e.classList.add('tab-active');
}

const liHome = document.getElementById('li-home');
liHome.addEventListener('click', (e) => {
	clearMain();
	createHome();
	removeActiveTabBold();
	classToggle(e.target);
});

const liMenu = document.getElementById('li-menu');
liMenu.addEventListener('click', (e) => {
	clearMain();
	createMenu();
	removeActiveTabBold();
	classToggle(e.target);
});

const liContact = document.getElementById('li-contact');
liContact.addEventListener('click', (e) => {
	clearMain();
	createContact();
	removeActiveTabBold();
	classToggle(e.target);
});
