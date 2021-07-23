import {TicTacToe} from './tictactoe';
import './sass/main.scss';

(function() {
    "use strict";

    window.addEventListener("scroll", () => {
        let limit = 150;

        if (document.documentElement.scrollTop > limit) {
            document.querySelector('header').style.opacity = 0;
        } else {
            document.querySelector('header').style.opacity = 1;
        }
    });

    let logo = document.getElementById('sword-logo'),
        facebook = document.getElementById('facebook'),
        twitter = document.getElementById('twitter'),
        instagram = document.getElementById('instagram'),
        send = document.getElementById('send');

    logo.src = './assets/img/SWORD_Health_logo.svg';
    facebook.src = './assets/img/facebook.svg';
    twitter.src = './assets/img/twitter.svg';
    instagram.src = './assets/img/instagram.svg';
    send.src = './assets/img/send.svg';

    let gridSize = document.getElementById('select-grid-size');
    gridSize.addEventListener('change', ev => {

        try {
            document.getElementById('game-area').style.visibility = 'visible';
            let ticTacToe = new TicTacToe(+ev.target.value);
            ticTacToe.onInit();
        } catch(e) {
            console.error(e);
        }
    });
    
}).call();
