'use strict';
import  tabs  from './modules/tabs';
import  modal  from './modules/modal';
import  timer  from './modules/timer';
import  cards  from './modules/cards';
import  calc  from './modules/calc';
import  server  from './modules/server';
import  slider  from './modules/slider';
import {showModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 5000);  

    tabs();
    modal('[data-modal]' , '.modal', modalTimerId);
    timer();
    cards();
    calc();
    server(modalTimerId);
    slider();
    
});

