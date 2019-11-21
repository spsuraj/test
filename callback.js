function placeorder(ordernumber){
	console.log("Customer order : ",ordernumber);
	cook(function(){
		console.log("Delivered food : ",ordernumber);
	})
	}
	
	function cook(callback){
		setTimeout(callback,5000);
	}	
	
placeorder(1);
placeorder(2);
placeorder(3);
placeorder(4);
placeorder(5);
placeorder(6);