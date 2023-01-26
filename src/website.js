const contentContainer = document.getElementById('content');

function createHeader() {
	const header = document.createElement('header');
	header.classList.add('header');

	const nav = document.createElement('nav');

	const logo = document.createElement('img');
	logo.setAttribute('src', 'img/logo-3.png');
	logo.classList.add('logo');

	const ulNav = document.createElement('ul');

	const liHome = document.createElement('li');
	const aHome = document.createElement('a');
	aHome.setAttribute('href', '#home');
	aHome.textContent = 'Home';

	const liMenu = document.createElement('li');
	const aMenu = document.createElement('a');
	aMenu.setAttribute('href', '#menu');
	aMenu.textContent = 'Menu';

	const liContact = document.createElement('li');
	const aContact = document.createElement('a');
	aContact.setAttribute('href', '#contact');
	aContact.textContent = 'Contact';

	contentContainer.appendChild(header);
	header.appendChild(nav);
	nav.appendChild(logo);
	nav.appendChild(ulNav);

	ulNav.appendChild(liHome);
	liHome.appendChild(aHome);

	ulNav.appendChild(liMenu);
	liMenu.appendChild(aMenu);

	ulNav.appendChild(liContact);
	liContact.appendChild(aContact);
}

function createMain() {
	const main = document.createElement('main');
	contentContainer.appendChild(main);

	const sectionHome = document.createElement('section');
	sectionHome.setAttribute('id', 'home');
	main.appendChild(sectionHome);

	const headingContainer = document.createElement('div');
	headingContainer.classList.add('heading');
	sectionHome.appendChild(headingContainer);

	const headingName = document.createElement('h1');
	headingName.textContent = 'Steak House';
	headingContainer.appendChild(headingName);

	const headingTagLine = document.createElement('p');
	headingTagLine.textContent = 'Best in Town';
	headingContainer.appendChild(headingTagLine);

	const homeImg = document.createElement('img');
	homeImg.setAttribute('src', './img/home-1.jpg');
	sectionHome.appendChild(homeImg);

	const homeDescription = document.createElement('p');
    homeDescription.classList.add('desciption');
	homeDescription.textContent = 'Welcome to the Stake House, where we serve the best steaks in town. Our menu features a wide variety of mouth-watering cuts, cooked to perfection and seasoned with the finest spices. Come dine with us and enjoy a cozy atmosphere and excellent service. Whether you\'re in the mood for a classic T-bone or a juicy ribeye, we\'ve got you covered. Don\'t believe us? Try it out for yourself and see why we\'re the go-to spot for steak lovers. Book your table today!';
    sectionHome.appendChild(homeDescription);
}

function createFooter() {
	const footer = document.createElement('footer');
	contentContainer.appendChild(footer);

	const footerAuthor = document.createElement('p');
	footerAuthor.textContent = 'Made with code Karol Karnas 2023';
	footer.appendChild(footerAuthor);

	const copyContainer = document.createElement('div');
	copyContainer.classList.add('copyrights');
	footer.appendChild(copyContainer);

	const copyLogo = document.createElement('a');
	copyLogo.textContent = 'Logo designed by macrovector / Freepik';
	copyLogo.setAttribute('href', 'http://www.freepik.com');
	copyContainer.appendChild(copyLogo);

	const copyImageHome = document.createElement('a');
	copyImageHome.textContent = 'Image by fxquadro';
	copyImageHome.setAttribute(
		'href',
		'https://www.freepik.com/free-photo/master-chef-wearing-uniform-cooking-delicious-beef-steak-kitchen-restaurant_30806468.htm#page=3&query=steak%20house&position=9&from_view=search&track=sph'
	);
	copyContainer.appendChild(copyImageHome);
}

function loadWebsite() {
	createHeader();
	createMain();
	createFooter();
}

export default loadWebsite;
