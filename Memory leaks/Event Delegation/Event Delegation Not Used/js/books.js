(function() {
    'use strict';
	var button = document.getElementById("renderbutton").addEventListener('click', function(e) {
    var books = document.querySelector('#books');
	for(var i=0; i<30000; i++){
		var listElement=document.createElement("li");
		listElement.innerHTML = Math.floor(Math.random()*10)+1;
		books.appendChild(listElement);
		listElement.addEventListener('click', function(e) {
        if (e.target.innerHTML==="10") {
            alert("10 clicked.");
        }
    });
	}
    });
})();