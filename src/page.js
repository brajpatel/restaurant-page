import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// HEADER
function createHeader() {
    const header = document.createElement('header');

    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = `Akame's Steak House <i class="fa-solid fa-dragon"></i>`

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

// NAVBAR
function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-button');
    homeBtn.classList.add('home-btn');
    homeBtn.innerHTML = `Home <i class="fa-solid fa-house"></i>`;
    homeBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activateBtn(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-button');
    menuBtn.classList.add('menu-btn');
    menuBtn.innerHTML = `Menu <i class="fa-solid fa-drumstick-bite"></i>`;
    menuBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activateBtn(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-button');
    contactBtn.classList.add('contact-btn');
    contactBtn.innerHTML = `Contact <i class="fa-solid fa-phone-flip"></i>`;
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activateBtn(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function activateBtn(btn) {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove('active');
        }
    })
    
    btn.classList.add('active');
}

// MAIN
function createMain() {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');

    return main;
}

// FOOTER
function createFooterMessage() {
    const footerMessage = document.createElement('p');
    footerMessage.classList.add('footer-message')
    footerMessage.textContent = 'Made by';

    const githubLink = document.createElement('a');
    const link = document.createTextNode('Brajesh');

    githubLink.classList.add('github-link');
    githubLink.href = 'https://github.com/brajpatel';
    githubLink.title = 'My github!';
    githubLink.setAttribute('target', '_blank');
    githubLink.appendChild(link);

    const githubIcon = document.createElement('i');
    githubIcon.innerHTML = `<i class="fa-brands fa-github"></i>`

    footerMessage.appendChild(githubLink);
    footerMessage.appendChild(githubIcon);

    return footerMessage;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.appendChild(createFooterMessage());
    
    return footer;
}

function initialisePage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    activateBtn(document.querySelector('.nav-button'));
    loadHome();
}

export default initialisePage;