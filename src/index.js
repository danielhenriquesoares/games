import {TicTacToe} from './tictactoe';
import './sass/main.scss';
/* import swordLogo from './img/SWORD_Health_logo.svg'; */

(function() {
    "use strict";
    console.debug("hello webpack");

    /* window.onscroll(ev => {
        let limit = 150;

        console.debug(document.documentElement.scrollTop);
    }); */
    window.addEventListener("scroll", () => {
        let limit = 150;

        if (document.documentElement.scrollTop > limit) {
            document.querySelector('header').style.opacity = 0;
        } else {
            document.querySelector('header').style.opacity = 1;
        }
        console.debug(document.documentElement.scrollTop);
    });

    let logo = document.getElementById('sword-logo'),
        facebook = document.getElementById('facebook'),
        twitter = document.getElementById('twitter'),
        instagram = document.getElementById('instagram'),
        send = document.getElementById('send');

    logo.src = './img/SWORD_Health_logo.svg';
    facebook.src = './img/facebook.svg';
    twitter.src = './img/twitter.svg';
    instagram.src = './img/instagram.svg';
    send.src = './img/send.svg';

    let gridSize = document.getElementById('select-grid-size');
    gridSize.addEventListener('change', ev => {
        console.debug(ev.target.value);

        try {
            document.getElementById('game-area').style.visibility = 'visible';
            let ticTacToe = new TicTacToe(+ev.target.value);
            ticTacToe.onInit();
        } catch(e) {
            console.error(e);
        }
    });
    
}).call();
