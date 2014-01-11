// ==UserScript==
// @name       DnC invert checkboxes
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @updateURL    https://raw2.github.com/JlblC/dnclab/master/UserJS/dnc_invert_checkbox.user.js.js
// @downloadURL  https://raw2.github.com/JlblC/dnclab/master/UserJS/dnc_invert_checkbox.user.js.js
// @match      http://*.the-game.ru/*
// ==/UserScript==

if (document.querySelectorAll('input[type="checkbox"]')>9) {
	    var b=document.createElement('input');
	    b.type='button';
	    b.onclick=function() {
    		var cb=document.querySelectorAll('input[type="checkbox"]');
        	for (var i=0; i<cb.length; i++) cb[i].checked=!cb[i].checked;
    		};
    	b.value=' ☑<–>☐';
    	document.body.appendChild(b);    
	}