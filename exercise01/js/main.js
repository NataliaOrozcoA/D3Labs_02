
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 70)
	.attr("fill", "blue");
var circle2 = svg.append("circle")
	.attr("cx", 250)
	.attr("cy", 250)
	.attr("r", 50)
	.attr("fill", "gray");

var rect = svg.append("rect")
	.attr("x", 20)
	.attr("y", 20)
	.attr("width", 20)
	.attr("height", 30)
	.attr("fill","red");
var rect2 = svg.append("rect")
	.attr("x", 25)
	.attr("y", 30)
	.attr("width", 50)
	.attr("height", 14)
	.attr("fill","yellow");
