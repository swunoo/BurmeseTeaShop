import './assets/style.css';

import {initializeFoodPanel, changeFoodPanel} from './foodPanel.js';
import {initializeDrinkPanel, changeDrinkPanel} from './drinkPanel.js';

//Gloabl DOM objects
let content, foodPanel, drinkPanel;

//IIFE to build the frame.
(function (){
    //Background Image
    // const backgroundImg = new Image();
    // backgroundImg.src = bgImg;
    // document.body.style.backgroundImage = backgroundImg;
        // bgWrapper.appendChild(backgroundImg);
    const bgWrapper = document.createElement('div');
    bgWrapper.classList.add('bgWrapper');
    document.body.appendChild(bgWrapper);
    const bgWrapperBlur = document.createElement('div');
    bgWrapperBlur.classList.add('bgWrapperBlur');
    document.body.appendChild(bgWrapperBlur);

    //The nav.
    const nav = document.createElement('div');
    nav.classList.add('flex', 'nav');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = '<h1>BURMESE TEA SHOP</h1>';
    logo.addEventListener('mousedown', e=>location.reload());

    const searchBar = document.createElement('div');
    searchBar.classList.add('flex', 'searchBar');
    const searchInput = document.createElement('input');
    searchBar.appendChild(searchInput);
    
    const about = document.createElement('a');
    about.classList.add('about');
    about.innerHTML = 'About';

   nav.appendChild(logo);
   nav.appendChild(searchBar);
   nav.appendChild(about);
   document.body.appendChild(nav);

   //The content (foodPanel and drinkPanel)
   content = document.createElement('div');
   foodPanel = document.createElement('div');
   drinkPanel = document.createElement('div');
   content.classList.add('content');
   foodPanel.classList.add('foodPanel');
   drinkPanel.classList.add('drinkPanel', 'flex');
   content.appendChild(foodPanel);
   content.appendChild(drinkPanel);

   foodPanel.appendChild(initializeFoodPanel());
   drinkPanel.appendChild(initializeDrinkPanel());

   document.body.appendChild(content);

   

})();

