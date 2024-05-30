
var width = 500;
var height = 500;

d3.json("./../buildings.json").then((data)=> {

    data.forEach((d)=>{
        d.height = +d.height;
    });

    var listBuildings = data.map((d) => {return d.name});

    var margin = {top: 10, right: 10, bottom: 100, left:100};

    var svg = d3.select("#chart-area")
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")"); // Add Margin
    
    var x = d3.scaleBand()
        .domain(listBuildings)
        .range([0, 400])
        .paddingInner(0.3)
	    .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, 828])
        .range([0, 400]);

    var color = d3.scaleOrdinal()
        .domain(listBuildings)
        .range(0,255);

    var bottomAxis = d3.axisBottom(x);
    g.append("g")
        .attr("class", "bottom axis")
	    .attr("transform", "translate(0, " + height+ ")")
        .call(bottomAxis)
        .selectAll("text")
        .attr('text-anchor', 'end')
        .attr('font-size', '10px')
        .attr('transform', `rotate(-19) translate(-5, 10)`);

        g.append("text")
        .attr("class", "x axis-label")
        .attr("x", width)
        .attr("y", height)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .style("fill","black")
        .text("X");

    var leftAxis = d3.axisLeft(y).ticks(5).tickFormat((d) => { return d + "m"; });
    g.append("g")
        .attr("class", "left axis")
        .call(leftAxis);

    g.append("text")
        .attr("class", "y axis-label")
        .attr("x", 0)
        .attr("y", 0) 
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .style("fill","black")
        .text("Y");


    var rectangles = g.selectAll("rect")
        .data(data);

    rectangles.enter()
        .append("rect")
        .attr("x", (d) => { return x(d.name); })
        .attr("y", (d) => { return y(d.height); })
        .attr("width",  x.bandwidth)
        .attr("height", (d) => { return height - y(d.height); })
        .attr("fill", (d) => { return color(d.name); });

}).catch((error) => {
    console.log(error);
});