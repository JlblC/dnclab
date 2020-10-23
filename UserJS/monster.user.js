// ==UserScript==
// @name         monster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://the-game.ru/frames/planet_fleets/on/*
// @match        *://*.the-game.ru/frames/planet_fleets/on/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function monster(){
        let m=document.createElement('div');
        m.classList.add('monster');
        m.innerText='👾';
        document.querySelector('.monster')?.remove();
        document.body.append(m);
    }
    setInterval(monster,500);
    // Your code here...
})();