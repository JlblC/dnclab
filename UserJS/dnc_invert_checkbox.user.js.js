// ==UserScript==
// @name       DnC invert checkboxes
// @namespace  https://github.com/JlblC/dnclab
// @version    0.02
// @description  Позволяет инвертировать флажки
// @updateURL    https://raw2.github.com/JlblC/dnclab/master/UserJS/dnc_invert_checkbox.user.js.js
// @downloadURL  https://raw2.github.com/JlblC/dnclab/master/UserJS/dnc_invert_checkbox.user.js.js
// @match      http://*.the-game.ru/*
// ==/UserScript==

if (document.querySelectorAll('input[type="checkbox"]'.length)>9) {
	    var b=document.createElement('input');
	    b.type='button';
	    b.onclick=function() {
    		var cb=document.querySelectorAll('input[type="checkbox"]');
        	for (var i=0; i<cb.length; i++) cb[i].checked=!cb[i].checked;
    		};
    	b.value=' ☑<–>☐';
    	document.body.appendChild(b);    
	}