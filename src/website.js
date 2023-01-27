const contentContainer = document.getElementById('content');
let main;

function createHeader() {
	const header = document.createElement('header');
	header.classList.add('header');
	contentContainer.appendChild(header);

	const nav = document.createElement('nav');
	header.appendChild(nav);

	const logo = document.createElement('img');
	logo.setAttribute('src', 'img/logo-3.png');
	logo.classList.add('logo');
	nav.appendChild(logo);

	const ulNav = document.createElement('ul');
	nav.appendChild(ulNav);

	const liHome = document.createElement('li');
	liHome.setAttribute('id', 'li-home');
	ulNav.appendChild(liHome);

	const aHome = document.createElement('a');
	aHome.classList.add('tab-active');
	aHome.textContent = 'Home';
	liHome.appendChild(aHome);

	const liMenu = document.createElement('li');
	liMenu.setAttribute('id', 'li-menu');
	ulNav.appendChild(liMenu);

	const aMenu = document.createElement('a');
	// aMenu.setAttribute('href', '#menu');
	aMenu.textContent = 'Menu';
	liMenu.appendChild(aMenu);

	const liContact = document.createElement('li');
	liContact.setAttribute('id', 'li-contact');
	ulNav.appendChild(liContact);

	const aContact = document.createElement('a');
	// aContact.setAttribute('href', '#contact');
	aContact.textContent = 'Contact';
	liContact.appendChild(aContact);
}

function createMain() {
	main = document.createElement('main');
	main.setAttribute('id', 'main');
	contentContainer.appendChild(main);
}

function createFooter() {
	const footer = document.createElement('footer');
	contentContainer.appendChild(footer);

	const footerAuthor = document.createElement('p');
	footerAuthor.classList.add('author');
	footerAuthor.textContent = 'Made with code Karol Karnas 2023';
	footer.appendChild(footerAuthor);

	const copyContainer = document.createElement('div');
	copyContainer.classList.add('copyrights');
	footer.appendChild(copyContainer);

	const copyLogo = document.createElement('a');
	copyLogo.textContent = 'Logo designed by macrovector';
	copyLogo.setAttribute('href', 'http://www.freepik.com');
	copyContainer.appendChild(copyLogo);

	const copyImageHome = document.createElement('a');
	copyImageHome.textContent = 'Image by fxquadro';
	copyImageHome.setAttribute(
		'href',
		'https://www.freepik.com/free-photo/master-chef-wearing-uniform-cooking-delicious-beef-steak-kitchen-restaurant_30806468.htm#page=3&query=steak%20house&position=9&from_view=search&track=sph'
	);
	copyContainer.appendChild(copyImageHome);

	const copyImgMenu = document.createElement('a');
	copyImgMenu.textContent = 'Image by KamranAydinov';
	copyImgMenu.setAttribute(
		'href',
		'https://www.freepik.com/free-photo/grilled-t-bone-steak-served-with-salt-herbs-grilled-cherry-tomatoes_7268936.htm#query=tbone&position=1&from_view=search&track=sph'
	);
	copyContainer.appendChild(copyImgMenu);

	const copyImgContact = document.createElement('a');
	copyImgContact.textContent = 'Image by Freepik';
	copyImgContact.setAttribute(
		'href',
		'https://www.freepik.com/free-photo/top-view-map-blue-background_11512903.htm#query=location&position=8&from_view=search&track=sph'
	);
	copyContainer.appendChild(copyImgContact);
}

function loadWebsite() {
	createHeader();
	createMain();
	createFooter();
}

export default loadWebsite;
