function createContact() {
	// const main = document.getElementById('main');

	const sectionContact = document.createElement('section');
	// sectionHome.setAttribute('id', 'contact');
	sectionContact.classList.add('section-contact');
	main.appendChild(sectionContact);

	const headingContainer = document.createElement('div');
	headingContainer.classList.add('heading');
	sectionContact.appendChild(headingContainer);

	const headingName = document.createElement('h1');
	headingName.textContent = 'Contact Information';
	headingContainer.appendChild(headingName);

	const headingTagLine = document.createElement('p');
	headingTagLine.textContent = 'steak house';
	headingContainer.appendChild(headingTagLine);

	const contactAddress = document.createElement('p');
    contactAddress.classList.add('contact-details')
	contactAddress.textContent = 'Address: ';
	sectionContact.appendChild(contactAddress);

	const contactAddressDetails = document.createElement('span');
	contactAddressDetails.textContent = '123 Main St, AnyTown USA 12345';
	contactAddress.appendChild(contactAddressDetails);

	const contactPhone = document.createElement('p');
    contactPhone.classList.add('contact-details')
	contactPhone.textContent = 'Phone Number: ';
	sectionContact.appendChild(contactPhone);

	const contactPhoneDetails = document.createElement('span');
	contactPhoneDetails.textContent = '555-555-5555';
	contactPhone.appendChild(contactPhoneDetails);

	const contactHours = document.createElement('p');
	contactHours.textContent = 'Hours of Operation:';
	sectionContact.appendChild(contactHours);

	const contactHoursMonFr = document.createElement('p');
	contactHoursMonFr.textContent = 'Monday-Friday: ';
	sectionContact.appendChild(contactHoursMonFr);

	const contactHoursMonFrDetails = document.createElement('span');
	contactHoursMonFrDetails.textContent = '11am-10pm';
	contactHoursMonFr.appendChild(contactHoursMonFrDetails);

	const contactHoursWeekend = document.createElement('p');
    contactHoursWeekend.classList.add('contact-details')
	contactHoursWeekend.textContent = 'Saturday-Sunday: ';
	sectionContact.appendChild(contactHoursWeekend);

	const contactHoursWeekendDetails = document.createElement('span');
	contactHoursWeekendDetails.textContent = '4pm-11pm';
	contactHoursWeekend.appendChild(contactHoursWeekendDetails);

    const contactImgMap = document.createElement('img');
    contactImgMap.classList.add('menu-img');
    contactImgMap.setAttribute('src', './img/contact-map.jpg')
    sectionContact.appendChild(contactImgMap);
}

export default createContact;
