//https://bl.ocks.org/mbostock/4122298
//https://bl.ocks.org/mbostock/4090848
var us_map = function(selection) {
  selection.each(function(d, i) {

    
      var width = 600,
          height = 400;
      
      var projection = d3.geo.albersUsa()
        .scale(600)
        .translate([width / 2, height / 2]);
        
      var path = d3.geo.path()
          .projection(projection);

      var svg = d3.select(this).append("svg")
          .attr("width", width)
          .attr("height", height);

      d3.json("data/us.json", function(error, topology) {
        if (error) throw error;

        svg.selectAll("path")
            .data(topojson.feature(topology, topology.objects.counties).features)
          .enter().append("path")
            .attr("d", path);
      });

  });
}
us_map(d3.select(".us_map"));