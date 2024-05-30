
var width = 400;
var height = 400;

var svg = d3.select("#chart-area").append("svg")
	.attr("width", width)
	.attr("height", height);

var data = [25, 20, 15, 10, 5];

var dataShow = d3.select("#dataShow").append("svg")
	.attr("width", width)
	.attr("height", height);

var bars = dataShow.selectAll("rect").data(data);


var xCanva = 0;
var yCanva = 0;
var barHeight = yCanva+180;
var marginBottom = xCanva+20;

bars.enter().append("rect")
    .attr("x", (d, i) => {
        console.log("Item: " + d + " index: "+ i);
            return ((i * 60) + 50);
        })
    .attr("y", (d) => {
        return barHeight - d - marginBottom + 200;
    })
    .attr("height", (d) => { return d; })
    .attr("width", 50)
    .attr("fill", "blue");

dataShow.append("rect")
    .attr("x", xCanva) 
    .attr("y", yCanva) 
    .attr("width", width) 
    .attr("height", height) 
    .attr("fill", "none") 
    .attr("stroke", "black") 
    .attr("stroke-width", 2); 