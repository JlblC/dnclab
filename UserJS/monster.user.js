// ==UserScript==
// @name         monster
// @namespace    https://github.com/JlblC/dnclab/raw/master/UserJS/monster.user.js
// @version      0.1.4
// @description  try to take over the world!
// @author       You
// @match        *://the-game.ru/planet/*
// @match        *://*.the-game.ru/planet/*
// @updateURL    https://github.com/JlblC/dnclab/raw/master/UserJS/monster.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('monster start');
    const 
        pf = document.querySelector('#planet_fleets'),
        td = pf.parentElement,
        ht = pf.contentDocument.documentElement,
        bd = ht.lastElementChild;
    let i=0;
    for (let z of [pf,td,ht,bd]) {
        z.style.backgroundColor=['blue','red','green','yelloy'][i++];  
        // z.style.width="98%";
    }
      setInterval(()=>pf.style.zIndex=~~(10-10*Math.random()),500);    
          
                 
    function monster(){
        const a=['🐉','👾','🐙','👽'];
        let m=document.createElement('div');
        m.classList.add('monster');
        m.innerText=a[~~(a.length*Math.random())];
        document.querySelector('.monster')?.remove();
        document.body.append(m);
    }
    
})();
