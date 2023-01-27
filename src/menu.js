function createMenu() {
    // const main = document.getElementById('main');
    
        const sectionMenu = document.createElement('section');
        // sectionHome.setAttribute('id', 'home');
        main.appendChild(sectionMenu);
    
        const headingContainer = document.createElement('div');
        headingContainer.classList.add('heading');
        sectionMenu.appendChild(headingContainer);
    
        const headingName = document.createElement('h1');
        headingName.textContent = 'Menu';
        headingContainer.appendChild(headingName);
    
        const headingTagLine = document.createElement('p');
        headingTagLine.textContent = 'steak house';
        headingContainer.appendChild(headingTagLine);

        // RIB-EYE

        const menuImgRibEye = document.createElement('img');
        menuImgRibEye.classList.add('menu-img');
        menuImgRibEye.setAttribute('src', './img/menu-rib-eye.jpg');
        sectionMenu.appendChild(menuImgRibEye);

        const dishRibEye = document.createElement('p');
        dishRibEye.classList.add('menu-txt');
        dishRibEye.textContent = 'Rib-Eye';
        sectionMenu.appendChild(dishRibEye); 

        const priceRibEye = document.createElement('span');
        priceRibEye.textContent = ' 109zł';
        dishRibEye.appendChild(priceRibEye);

        // T BONE

        const menuImgTBone = document.createElement('img');
        menuImgTBone.classList.add('menu-img', 'menu-img-margin');
        menuImgTBone.setAttribute('src', './img/menu-t-bone.jpg');
        sectionMenu.appendChild(menuImgTBone);

        const dishTBone = document.createElement('p');
        dishTBone.classList.add('menu-txt');
        dishTBone.textContent = 'T-Bone';
        sectionMenu.appendChild(dishTBone); 

        const priceTBone = document.createElement('span');
        priceTBone.textContent = ' 309zł';
        dishTBone.appendChild(priceTBone);

        // STEAK

        const menuImgSteak = document.createElement('img');
        menuImgSteak.classList.add('menu-img', 'menu-img-margin');
        menuImgSteak.setAttribute('src', './img/menu-steak.jpg');
        sectionMenu.appendChild(menuImgSteak);

        const dishSteak = document.createElement('p');
        dishSteak.classList.add('menu-txt');
        dishSteak.textContent = 'Steak';
        sectionMenu.appendChild(dishSteak); 

        const priceSteak = document.createElement('span');
        priceSteak.textContent = ' 209zł';
        dishSteak.appendChild(priceSteak);
    }
    
    export default createMenu;