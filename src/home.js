function createHome() {
// const main = document.getElementById('main');

	const sectionHome = document.createElement('section');
	// sectionHome.setAttribute('id', 'home');
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
	homeDescription.classList.add('description');
	homeDescription.textContent =
		'Welcome to the Stake House, where we serve the best steaks in town. Our menu features a wide variety of mouth-watering cuts, cooked to perfection and seasoned with the finest spices. Come dine with us and enjoy a cozy atmosphere and excellent service. Whether you\'re in the mood for a classic T-bone or a juicy ribeye, we\'ve got you covered. Don\'t believe us? Try it out for yourself and see why we\'re the go-to spot for steak lovers. Book your table today!';
	sectionHome.appendChild(homeDescription);
}

export default createHome;