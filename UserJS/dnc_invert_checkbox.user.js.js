// ==UserScript==
// @name       dnc_invert_checkbox
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://*.the-game.ru/*
// @copyright  2012+, You
// ==/UserScript==

if (document.querySelectorAll('input[type="checkbox"]')>9) {
	    var b=document.createElement('input');
	    b.type='button';
	    b.onclick=function() {
    		var cb=document.querySelectorAll('input[type="checkbox"]');
        	for (var i=0; i<cb.length; i++) cb[i].checked=!cb[i].checked;
    		};
    	b.value=' ☑<->☐';
    	document.body.appendChild(b);    
	}