var color = "red";

var button = d3.select(".transition")
    .append("button")
    .text("Click me!");

var div = d3.select(".transition")
    .append("div")
    .style("background-color", "white")
    .text("Watch me!");
  
var transition = function() {
  div.transition()
      .style("background-color", color)
      .duration(2000);
  color = color == "white" ? "red" : "white";
}

button.on("click", transition);

var loc = 150;

var button2 = d3.select(".transition2")
  .append("button")
    .text("Click me!");

d3.select(".transition2").append("br")    
var svg = d3.select(".transition2")
  .append("svg");
    
var circle = svg.append("circle")
    .attr("cx", 15)
    .attr("cy", 30)
    .attr("r", 15)
    .style("stroke", "red")
    .style("fill", "white");

var transition2 = function() {
  circle.transition()
      .attr("cx", loc)
      .duration(1000)
      .delay(100);  
  loc = loc == 15 ? 150 : 15;
} 

button2.on("click", transition2);   

    
    
