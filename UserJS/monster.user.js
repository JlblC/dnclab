// ==UserScript==
// @name         monster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://the-game.ru/frames/planet_fleets/on/*
// @match        *://*.the-game.ru/frames/planet_fleets/on/*
// @downloadURL  https://github.com/JlblC/dnclab/raw/master/UserJS/monster.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function monster(){
        const a=['🐉','👾','🐙','👽'];
        let m=document.createElement('div');
        m.classList.add('monster');
        m.innerText=a[~~(a.length*Math.random())];
        document.querySelector('.monster')?.remove();
        document.body.append(m);
    }
    setInterval(monster,500);
    // Your code here...
})();
