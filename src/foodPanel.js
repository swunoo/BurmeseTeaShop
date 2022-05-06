import riceIcon from './assets/fried-rice.png';
import noodleIcon from './assets/ramen.png';
import prataIcon from './assets/samosa.png';

import { foodData } from './menuData';

export const initializeFoodPanel = function(){
    const foodPanel = document.createElement('div');
    foodPanel.innerHTML = 
        "<h1> Burmese tea shops serve around 30 dishes, </h1>"
        + "<h2> which fall into the following 3 categories.</h2>";
    
    const riceImg = new Image();
    const noodleImg = new Image();
    const prataImg = new Image();

    riceImg.src = riceIcon;
    noodleImg.src = noodleIcon;
    prataImg.src = prataIcon;

    const dishes = document.createElement('div');
    dishes.classList.add('flex', 'dishes');
    // dishes.innerHTML =
    //     "<div class='flex dish'><img src='' alt='Rice-based'><h3>Rice-based</h3> </div>"
    //     +"<div class='flex dish'><img src='' alt='Noddle-based'><h3>Noddle-based</h3> </div>"
    //     +"<div class='flex dish'><img src='' alt='Prata-based'><h3>Prata-based</h3></div>";
    const dish1 =document.createElement('div');
    const dish2 =document.createElement('div');
    const dish3 =document.createElement('div');
    dish1.classList.add('flex', 'dish');
    dish2.classList.add('flex', 'dish');
    dish3.classList.add('flex', 'dish');
    dish1.appendChild(riceImg);
    dish2.appendChild(noodleImg);
    dish3.appendChild(prataImg);
    dish1.innerHTML += '<h3>Burmese Rice</h3>';
    dish2.innerHTML += '<h3>Khout Swe^</h3>';
    dish3.innerHTML += '<h3>Indian Stuff</h3>';
    dishes.appendChild(dish1);
    dishes.appendChild(dish2);
    dishes.appendChild(dish3);

    dish1.addEventListener('mousedown', e=>showDish(dish1, foodPanel, 1));
    dish2.addEventListener('mousedown', e=>showDish(dish2, foodPanel, 2));
    dish3.addEventListener('mousedown', e=>showDish(dish3, foodPanel, 3));

    foodPanel.appendChild(dishes);
    return foodPanel;
}

//Function to show the selected dish.
function showDish(dish,panel,index){
    panel.innerHTML = '';
    panel.classList.add('selected');
    dish.classList.add('selectedDish');
    panel.appendChild(dish);
    
    const dishes = document.createElement('div');
    dishes.classList.add('subDishes', 'flex');

    const dishList = foodData[index];

    dishList.forEach(item => {
        const dishItem = document.createElement('div');
        dishItem.classList.add('dishGpItem', 'flex');
        dishItem.appendChild(item.itemSrc);
        dishItem.innerHTML += `${item.itemName} <br> ${item.itemPrice}`;
        dishes.appendChild(dishItem);
    })

    panel.appendChild(dishes);
}

//Function to populate the foodPanel
export const changeFoodPanel = function(obj){
    content.innerHTML = '';
    const e = document.createElement('h2');
    e.innerHTML = "Hello";
    foodPanel.appendChild(e);
}

