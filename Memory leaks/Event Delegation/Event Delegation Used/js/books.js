(function() {
    'use strict';
	var button = document.getElementById("renderbutton").addEventListener('click', function(e) {
        var books = document.querySelector('#books');

    books.addEventListener('click', function(e) {
        if (e.target.innerHTML==="10") {
            alert("10 clicked.");
        }
    }, false);
	for(var i=0; i<30000; i++){
		var listElement=document.createElement("li");
		listElement.innerHTML = Math.floor(Math.random()*10)+1;
		books.appendChild(listElement);
	}
    });
})();