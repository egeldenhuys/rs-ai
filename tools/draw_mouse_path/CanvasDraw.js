var el = document.getElementById('c');
var ctx = el.getContext('2d');

ctx.canvas.width  = window.innerWidth - 50;
ctx.canvas.height = window.innerHeight - 50;


ctx.strokeStyle = 'black';


draw();

var prevX;
var prevY;

function draw() {
	var w = 10;
	var h = 10;
	ctx.fillStyle = 'blue';
	ctx.fillRect(206  -8 -w/2, 347 -8 -h/2, w, h);
	ctx.fillRect(29   -8 -w/2, 59  -8 -h/2, w, h);
	ctx.fillRect(1745 -8 -w/2, 373 -8 -h/2, w, h);
	ctx.fillRect(790  -8 -w/2, 298 -8 -h/2, w, h);
	ctx.fillRect(1634 -8 -w/2, 120 -8 -h/2, w, h);
	ctx.fillRect(1164 -8 -w/2, 389 -8 -h/2, w, h);
	ctx.fillRect(954  -8 -w/2, 721 -8 -h/2, w, h);
	ctx.fillRect(131  -8 -w/2, 379 -8 -h/2, w, h);
	ctx.fillRect(941  -8 -w/2, 104 -8 -h/2, w, h);
	ctx.fillRect(71   -8 -w/2, 254 -8 -h/2, w, h);
	ctx.fillRect(1132 -8 -w/2, 318 -8 -h/2, w, h);
	ctx.fillRect(428  -8 -w/2, 336 -8 -h/2, w, h);
	ctx.fillRect(298  -8 -w/2, 187 -8 -h/2, w, h);
	ctx.fillRect(640  -8 -w/2, 272 -8 -h/2, w, h);
	ctx.fillRect(1419 -8 -w/2, 632 -8 -h/2, w, h);
	ctx.fillRect(533  -8 -w/2, 100 -8 -h/2, w, h);
	ctx.fillRect(1376 -8 -w/2, 516 -8 -h/2, w, h);
	ctx.fillRect(1287 -8 -w/2, 737 -8 -h/2, w, h);
	ctx.fillRect(319  -8 -w/2, 578 -8 -h/2, w, h);
	ctx.fillRect(1819 -8 -w/2, 706 -8 -h/2, w, h);

	ctx.globalAlpha=0.4;
	ctx.fillStyle = 'red';
}
  
el.onmousemove = function(e) {
	
	ctx.beginPath();
	
	ctx.moveTo(prevX, prevY);
	
	ctx.lineTo(e.clientX - 8, e.clientY - 8);

	ctx.stroke();
	
	prevX = e.clientX - 8;
	prevY = e.clientY - 8;
	
  ctx.fillRect(e.clientX - 8, e.clientY - 8, 2, 2);
};

el.onclick = function(e) {
	ctx.globalAlpha=1;
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	draw();
	ctx.fillStyle = 'red';
	ctx.globalAlpha=0.4;
	
	
	
};

