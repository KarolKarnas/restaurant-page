import loadWebsite from './website.js';
import createHome from './home.js';
import createMenu from './menu.js';


console.log('hello God');

loadWebsite();
// createHome()
createMenu();

function clearMain() {
	const mainChildren = main.childNodes;
	mainChildren.forEach(el => { el.remove()
	});
}




const liHome = document.getElementById('li-home');
liHome.addEventListener('click', () => {
		clearMain();
		createHome();
})

const liMenu = document.getElementById('li-menu');
liMenu.addEventListener('click', () => {
		clearMain();
		createMenu();
})