function createHomeInfo() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const homeTitle = document.createElement('h2');
    homeTitle.classList.add('title');
    homeTitle.textContent = 'Welcome to Akame\'s Steak House';

    const homeInfo = document.createElement('p');
    homeInfo.textContent = 'Quality runs through our veins here at Akame\'s Steak House. We take special pride in everything that we do, with deeper focus on serving prime cuts of meat, delicious burgers and exceptional service in heart of the The Empire.';

    const homeImg = document.createElement('img');
    homeImg.src = './images/home-img.jpg';
    homeImg.alt = 'Eat good';

    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(homeInfo);
    homeContainer.appendChild(homeImg);

    return homeContainer;
}

function createHome() {
    const home = document.createElement('div');
    home.classList.add('content');
    home.appendChild(createHomeInfo());

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());

    return main;
}

export default loadHome;