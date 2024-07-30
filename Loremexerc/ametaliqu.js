// Get the canvas element
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Define the rectangle dimensions
var x = 100; // x-coordinate of the top-left corner
var y = 100; // y-coordinate of the top-left corner
var width = 200;
var height = 100;

// Calculate the center of the rectangle
var centerX = x + (width / 2);
var centerY = y + (height / 2);

// Calculate the x and y radii of the ellipse
var xRadius = width / 2;
var yRadius = height / 2;

// Create the ellipse path
ctx.beginPath();
ctx.ellipse(centerX, centerY, xRadius, yRadius, 0, 0, 2 * Math.PI);
ctx.stroke();
