
var width = 800;
var height = 400;
var xCanva = 0;
var yCanva = 0;

var info = [];

var svg = d3.select("#chart-area").append("svg")
	.attr("width", width)
	.attr("height", height);

svg.append("rect")
    .attr("x", xCanva) 
    .attr("y", yCanva) 
    .attr("width", width) 
    .attr("height", height) 
    .attr("fill", "black") 
    .attr("stroke", "gray") 
    .attr("stroke-width", 2); 

d3.csv("./../data/ages.csv").then((data)=> {
    //console.log("TEST");
    console.log(data);
});

d3.tsv("./../data/ages.tsv").then((data)=> {
    console.log(data);
});

d3.json("./../data/ages.json").then((data)=> {
    console.log("JSON");
    console.log(data);
    
    data.forEach((d)=>{
		d.age = +d.age;
	});

	console.log(data);
    info = data;

    
    var circles = svg.selectAll("circle").data(info);

    circles.enter().append("circle")
            .attr("cx", (d, i) => {
                console.log("Item: " + d + " index: "+ i);
                return ((i+1) * 125);
            })
            .attr("cy", (d) => {
                return 100;
            })
            .attr("r", (d) => { return d.age * 5; })
            .attr("fill", (d) => {return d.age < 11 ?  "blue" : "cyan"});

}).catch((error) => {
    console.error(error);
});



