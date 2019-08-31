

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    let element = document.querySelector('.for-dropdown');
    let elementListy = document.querySelector('.dropdown'); 

    element.addEventListener("mouseover", function(){ elementListy.style.display = 'block'; }); // zadanie 1
    
    element.addEventListener("mouseout", function(){ elementListy.style.display = 'none'; }); // zadanie 1
  });


