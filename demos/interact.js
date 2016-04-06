var svg = d3.select(".interact").append("svg")
    .attr("height", 50);

var circle = svg.append("circle")
    .attr("cx", 15)
    .attr("cy", 30)
    .attr("r", 15)
    .attr("fill", "red");  

circle.on("mouseover", function() {
      d3.select(this).transition().duration(300)
          .style("fill", "yellow");
    })
    .on("mouseout", function(){
      d3.select(this).transition().duration(300)
          .style("fill", "red");
    })
    .on("click", function() {
      alert("Hello!");
    });
    
circle.append("title")
    .text("A trick!");

