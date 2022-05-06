import {drinkData} from './menuData.js';

export const initializeDrinkPanel = function(){
    const drinkPanel = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = "Drinks";
    drinkPanel.appendChild(title);

    drinkData.forEach(drinks => {
        drinkPanel.appendChild(addDrinks(drinks));
    });
    // console.log('drinkPanel', drinkPanel);
    // console.log('drinkPanelInnerHTML ', drinkPanel.innerHTML);
    return drinkPanel;
}

//Adding Drinks
function addDrinks(obj){
    const group = document.createElement('div');
    group.classList.add('flex', 'drinkGp');

    const groupName = document.createElement('h3');
    groupName.textContent = obj.name;
    groupName.classList.add('drinkGpName');

    const groupItems = document.createElement('div');
    groupItems.classList.add('drinkGpItems', 'flex');
    obj.items.forEach(item=>{
        const drinkItem = document.createElement('div');
        drinkItem.classList.add('drinkGpItem', 'flex');
        drinkItem.appendChild(item.itemSrc);
        drinkItem.innerHTML += `<h5>${item.itemName} <br> ${item.itemPrice} </h5>`;
        groupItems.appendChild(drinkItem);
    })
    
    group.appendChild(groupName);
    group.appendChild(groupItems);
    return group;
}

//Function to populate the drinkPanel
export const changedrinkPanel = function(obj){
    content.innerHTML = '';
    const e = document.createElement('h2');
    e.innerHTML = "Hello";
    drinkPanel.appendChild(e);
}

