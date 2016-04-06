//https://bost.ocks.org/mike/circles/
var circleData = [32, 57, 112];

var circle_example_1_chart = function(selection) {
  selection.each(function(d, i) {
    
    var svg = d3.select(this).append("svg").append("g");
    var circle = svg.selectAll("circle")
        .data(circleData).enter()
        .append("circle")
        .attr("cy", 60)
        .attr("cx", function(d, i){ return i * 100 + 30; })
        .style("fill", "steelblue");

    circle.attr("r", function(d) { return Math.sqrt(d); });  
  });
};
circle_example_1_chart(d3.select(".circle_example_1"));

var circle_example_2_chart = function(selection) {
  selection.each(function(d, i) {
    
    var g = d3.select(this).append("svg").append("g");
    var circle = g.selectAll("circle")
        .data(circleData).enter()
        .append("circle")
        .attr("cy", 60)
        .attr("cx", function(d, i){ return i * 100 + 30; })
        .style("fill", "steelblue");
    
    circle.attr("r", function(d) { return Math.sqrt(d); }); 
    
    var svg = d3.select(this).select("svg").attr("width", "100%");
    var g = svg.select("g");

    var circle = g.selectAll("circle")
        .data([32, 57, 112, 293]);

    var circleEnter = circle.enter().append("circle")
        .attr("cy", 60)
        .attr("cx", function(d, i){ return i * 100 + 30; })
        .attr("r", function(d) { return Math.sqrt(d); })
        .style("fill", "steelblue");

  });
};
circle_example_2_chart(d3.select(".circle_example_2"));

var circle_example_3_chart = function(selection) {
  selection.each(function(d, i) {
    
    var g = d3.select(this).append("svg").append("g");
    var circle = g.selectAll("circle")
        .data(circleData).enter()
        .append("circle")
        .attr("cy", 60)
        .attr("cx", function(d, i){ return i * 100 + 30; })
        .style("fill", "steelblue");
    
    circle.attr("r", function(d) { return Math.sqrt(d); }); 
    
    var svg = d3.select(this).select("svg").attr("width", "100%");
    var g = svg.select("g");

    var circle = g.selectAll("circle")
        .data([32, 57]);
    
    circle.exit().remove();

  });
};
circle_example_3_chart(d3.select(".circle_example_3"));