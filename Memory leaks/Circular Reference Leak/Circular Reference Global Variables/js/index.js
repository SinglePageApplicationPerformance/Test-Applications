function removeOtherButton(){
		document.getElementById("leakbutton").remove();
	}
(function () {
	
	function leakExample() {
		window.a1={
			name:"",
			list:[]
		};
		window.a2={
			name:"",
			list:[]
		};
		for(var i=0; i<300000; i++){
			window.a1.list.push({name:"test"});
		}
		for(var i=0; i<300000; i++){
			window.a2.list.push({name:"test"});
		}
		window.a1.name = window.a2.list[0].name; 
		window.a2.name = window.a1.list[0].name; 
	}
	leakExample();
	
})();



