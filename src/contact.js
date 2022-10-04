function createInput(label, attr) {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const formLabel = document.createElement('label');
    formLabel.textContent = label + ':';
    formLabel.setAttribute('for', attr)

    const formInput = document.createElement('input');
    formInput.type = 'text';
    formInput.id = attr;

    inputContainer.appendChild(formLabel);
    inputContainer.appendChild(formInput);

    return inputContainer;
}

function createForm() {
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Send Us a Message';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.classList.add('submit-btn');
    submitBtn.textContent = 'Submit';

    contactForm.appendChild(formTitle);
    contactForm.appendChild(createInput('Full Name', 'full-name'));
    contactForm.appendChild(createInput('Email', 'email'));
    contactForm.appendChild(createInput('Subject', 'subject'));
    contactForm.appendChild(submitBtn);

    return contactForm;
}

function createContactDetails() {
    const contactDetails = document.createElement('section');
    contactDetails.classList.add('contact-details');

    const phoneNumber = document.createElement('h3');
    phoneNumber.innerHTML = `<i class="fa-solid fa-phone"></i> 01234567890`;

    const email = document.createElement('h3');
    email.innerHTML = `<i class="fa-solid fa-envelope"></i> akame-steak-house@realEmail.com`

    contactDetails.appendChild(phoneNumber);
    contactDetails.appendChild(email);

    return contactDetails;
}

function createContactInfo() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('title');
    contactTitle.textContent = 'Contact us!';

    const map = document.createElement('div');
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60305499.13841443!2d48.928452499999956!3d22.700141699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e3bc3c049a2e7%3A0xa23712649c278a7d!2sAKAME!5e0!3m2!1sen!2suk!4v1664635468316!5m2!1sen!2suk" width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(createContactDetails());
    contactContainer.appendChild(map);
    contactContainer.appendChild(createForm());

    return contactContainer;
}

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('content');
    contact.appendChild(createContactInfo());

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());

    return main;
}

export default loadContact;