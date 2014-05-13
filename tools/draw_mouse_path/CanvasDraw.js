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
	
ctx.fillRect(305 -8 -w/2, 557 -8 -h/2, w, h);
ctx.fillRect(1181 -8 -w/2, 849 -8 -h/2, w, h);
ctx.fillRect(880 -8 -w/2, 664 -8 -h/2, w, h);
ctx.fillRect(267 -8 -w/2, 700 -8 -h/2, w, h);
ctx.fillRect(1394 -8 -w/2, 273 -8 -h/2, w, h);
ctx.fillRect(729 -8 -w/2, 514 -8 -h/2, w, h);
ctx.fillRect(582 -8 -w/2, 664 -8 -h/2, w, h);
ctx.fillRect(285 -8 -w/2, 852 -8 -h/2, w, h);
ctx.fillRect(340 -8 -w/2, 390 -8 -h/2, w, h);
ctx.fillRect(586 -8 -w/2, 719 -8 -h/2, w, h);
ctx.fillRect(341 -8 -w/2, 348 -8 -h/2, w, h);
ctx.fillRect(1335 -8 -w/2, 819 -8 -h/2, w, h);
ctx.fillRect(1266 -8 -w/2, 539 -8 -h/2, w, h);
ctx.fillRect(745 -8 -w/2, 506 -8 -h/2, w, h);
ctx.fillRect(979 -8 -w/2, 501 -8 -h/2, w, h);
ctx.fillRect(1357 -8 -w/2, 620 -8 -h/2, w, h);
ctx.fillRect(1610 -8 -w/2, 832 -8 -h/2, w, h);
ctx.fillRect(1379 -8 -w/2, 168 -8 -h/2, w, h);
ctx.fillRect(246 -8 -w/2, 384 -8 -h/2, w, h);
ctx.fillRect(1466 -8 -w/2, 700 -8 -h/2, w, h);

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

