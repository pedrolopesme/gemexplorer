$(document).ready(function(){

	var renderGemList = function(gems) {
		$("#gemsList li").remove();
		
		for(index in gems) {
			var gem = gems[index];
			$("#gemsList").append('<li> <b> ' + gem.name + ' </b> </li>');
		}
	}

	$('#search').submit(function(e){
		e.preventDefault();
		var url =  "https://rubygems.org/api/v1/search.json?query=" + $("#term").val();
		$.safeGet(url, renderGemList);
	});

});