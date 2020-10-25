// ==UserScript==
// @name         monster
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        *://the-game.ru/planet/*
// @match        *://*.the-game.ru/planet/*
// @updateURL    https://github.com/JlblC/dnclab/raw/master/UserJS/monster.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $=document.querySelector;
    const 
        pf = document.querySelector('#planet_fleets'),
        td = pf.parentElement,
        ht = pf.contentDocument.documentElement,
        bd = ht.lastElementChild;
    let i=0;
    for (let z of [pf,td,ht,bd]) {
        z.style.backgroundColor=['red','blue','green','yelloy'][i++];
        z.style.width="100%";
    }
          
          
                 
    function monster(){
        const a=['🐉','👾','🐙','👽'];
        let m=document.createElement('div');
        m.classList.add('monster');
        m.innerText=a[~~(a.length*Math.random())];
        document.querySelector('.monster')?.remove();
        document.body.append(m);
    }
    
})();
