var margin_chart = function(selection) {
  selection.each(function(d, i) {
    var svg = d3.select(this).append("svg")
        .attr("width", 600)
        .attr("height", 340)
      .append("g")
        .attr("transform", "translate(40,40)");

    var defs = svg.append("defs");

    defs.append("marker")
        .attr("id", "triangle-start")
        .attr("viewBox", "0 0 10 10")
        .attr("refX", 10)
        .attr("refY", 5)
        .attr("markerWidth", -8)
        .attr("markerHeight", 8)
        .attr("orient", "auto")
      .append("path")
        .style("fill", "black")
        .attr("d", "M 0 0 L 10 5 L 0 10 z");

    defs.append("marker")
        .attr("id", "triangle-end")
        .attr("viewBox", "0 0 10 10")
        .attr("refX", 10)
        .attr("refY", 5)
        .attr("markerWidth", 8)
        .attr("markerHeight", 8)
        .attr("orient", "auto")
      .append("path")
        .style("fill", "black")
        .attr("d", "M 0 0 L 10 5 L 0 10 z");

    svg.append("rect")
        .attr("width", 480)
        .attr("height", 280);

    var g = svg.append("g")
        .attr("transform", "translate(40,40)");

    g.append("rect")
        .attr("width", 400)
        .attr("height", 200)
        .style("stroke-dasharray", "8,12");

    svg.append("line")
        .attr("x2", 40)
        .attr("y2", 40)
        .attr("marker-end", "url(#triangle-end)");

    svg.append("line")
        .attr("x1", 240)
        .attr("x2", 240)
        .attr("y2", 40)
        .attr("marker-end", "url(#triangle-end)");

    svg.append("line")
        .attr("x1", 240)
        .attr("x2", 240)
        .attr("y1", 240)
        .attr("y2", 280)
        .attr("marker-start", "url(#triangle-start)");

    svg.append("line")
        .attr("x1", 0)
        .attr("x2", 40)
        .attr("y1", 140)
        .attr("y2", 140)
        .attr("marker-end", "url(#triangle-end)");

    svg.append("line")
        .attr("x1", 480)
        .attr("x2", 440)
        .attr("y1", 140)
        .attr("y2", 140)
        .attr("marker-end", "url(#triangle-end)");

    svg.append("text")
        .text("origin")
        .attr("y", -12);

    svg.append("circle")
        .attr("r", 6);

    g.append("text")
        .text("translate(left,top)")
        .attr("y", -12);

    svg.selectAll("rect,line")
        .style("fill", "none")
        .style("stroke", "black")
        .style("stroke-width", "2px");

    svg.selectAll("text,circle")
        .style("fill", "black");

  });
};
margin_chart(d3.select(".margin"));