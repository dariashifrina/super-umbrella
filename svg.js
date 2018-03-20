//Need: switch between norway and another country
//POSSIBLY: put # of medals inside circle.

var country_button = document.getElementById("button");
var svg = document.getElementById("slate");

var norway = [14,14,11];

var drawCircle = function(x, y, r, color) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", color);
    svg.appendChild(circle);
}


var circleRadius = function(place){
    d3.selectAll("circle").data(place).attr('r', function(d){
	return d * 5;
    });
}

var start = function() {
    drawCircle(100, 250, 0, '#802e08');
    drawCircle(300, 250, 0, '#abb0b5');
    drawCircle(500, 250, 0, '#ffe11e');

    circleRadius(norway);
}

start();
