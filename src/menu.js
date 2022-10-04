function createMenuItem(src, name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemImg = document.createElement('img');
    itemImg.src = `./images/${src}`;
    itemImg.alt = 'menu-item';

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemDescription = document.createElement('h3');
    itemDescription.textContent = description;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDescription);

    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemInfo);

    return menuItem;
}

function createMenuInfo() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('title');
    menuTitle.textContent = 'The Menu';

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(createMenuItem('menu-img1.jpg', 'Akame\'s House Special', 'Charcoal Grilled Venison Round Steak w/ Chestnut Sauce'));
    menuContainer.appendChild(createMenuItem('menu-img2.png', 'The Royal', 'A huge plate of our best meats and joints for you to feast on. Best for big eaters'));
    menuContainer.appendChild(createMenuItem('menu-img3.jpg', 'Seafood Nabe', 'A Japanese hot pot to warm the heart, filled to the brim with exciting and humble flavours'));
    menuContainer.appendChild(createMenuItem('menu-img4.png', 'Whole Fourchu Lobster', 'Also known as the \'Rolls Royce of Lobsters\', the ingredients and spices used in this dish give it a unique, vintage taste'));
    menuContainer.appendChild(createMenuItem('menu-img5.png', 'Le Petite Royal', 'A great variety of meats and vegetables for your little Kings and Queens'));
    menuContainer.appendChild(createMenuItem('menu-img6.png', 'Junmai daiginjo-shu', 'Subtly sweet ultra-premium pure-rice sake'));

    return menuContainer;
}

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('content');
    menu.appendChild(createMenuInfo());

    return menu;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());

    return main;
}

export default loadMenu;