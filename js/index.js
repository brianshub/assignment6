$(document).ready(function(){

	var cities = ["NYC", "SF", "LA", "ATX", "SYD"]
	cities.forEach(function(element, index){
			$("select").append("<option>"+element+"</option>");
	});
	$("select").change(function(){
		var city = $("#city-type").val();
		switch (city) {
		case "NYC":
		$("body").attr("class", "nyc");
		break;

		case "SF":
		$("body").attr("class", "sf");
		break; 

		case "LA":
		$("body").attr("class", "la");
		break; 

		case "ATX":
		$("body").attr("class", "austin");
		break; 

		default: 
		$("body").attr("class", "sydney");
		break; 
	}
	});
});