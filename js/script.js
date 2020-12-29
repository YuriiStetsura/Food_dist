'use strict';
import  tabs  from './modules/tabs';
import  modal  from './modules/modal';
import  timer  from './modules/timer';
import  cards  from './modules/cards';
import  calc  from './modules/calc';
import  forms  from './modules/forms';
import  slider  from './modules/slider';
import {showModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 5000);  

    tabs('.tabcontent' , '.tabheader__items' , '.tabheader__item' , 'tabheader__item_active');
    modal('[data-modal]' , '.modal', modalTimerId);
    timer('.timer' , '2021-12-31');
    cards();
    calc();
    forms('form' , modalTimerId);
    slider({
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper', 
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        field: '.offer__slider-inner', 
        totalConter: '#total', 
        currentConter: '#current', 
        container: '.offer__slider',
    });
    
});

