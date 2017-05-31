$(document).ready(function() {
	$("#getMessage").on("click", function() {
		var html = "";
		var randNum = Math.floor(Math.random() * (101 - 0 + 1));
		$.getJSON("/data/quotes.json", function(quotes){
			html += quotes[randNum].quote;
			$(".message").html(html);
		});

	});
});