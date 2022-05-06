import teaIcon from './assets/tea.png';
import cupIcon from './assets/coffee (1).png';
import coffeeIcon from './assets/coffee-cup (1).png';

import mohingaIcon from './assets/dish1.jpg'

const teaImg = new Image();
const cupImg = new Image();
const coffeeImg = new Image();
teaImg.src = teaIcon;
cupImg.src = cupIcon;
coffeeImg.src = coffeeIcon;

const mohingaImg = new Image();
mohingaImg.src = mohingaIcon;

export let drinkData = [
    {
        name: 'Tea',
        items: [
            {itemName: 'MilkTea',
            itemSrc: teaImg,
            itemPrice: 500}
        ]
    },
    {
        name: 'Coffee',
        items: [
            {itemName: 'Brewed Coffee',
            itemSrc: coffeeImg,
            itemPrice: 1500},
            {itemName: 'Esperesso',
            itemSrc: cupImg,
            itemPrice: 1000},
        ]
    }
]

export let foodData = [
    [],
    [
        {itemName: 'Mohinga',
        itemSrc: mohingaImg,
        itemPrice: 2500},

        {itemName: 'Rice',
        itemSrc: mohingaImg,
        itemPrice: 500}
    ],
    [
        {itemName: 'Mohinga',
        itemSrc: mohingaImg,
        itemPrice: 2500},

        {itemName: 'Rice',
        itemSrc: mohingaImg,
        itemPrice: 500},

        {itemName: 'Rice',
        itemSrc: mohingaImg,
        itemPrice: 500}
    ],
    [
        {itemName: 'Mohinga',
        itemSrc: mohingaImg,
        itemPrice: 2500},

        {itemName: 'Rice',
        itemSrc: mohingaImg,
        itemPrice: 500}
    ]

]