var el = document.getElementById('c');
var ctx = el.getContext('2d');

ctx.canvas.width  = window.innerWidth - 20;
ctx.canvas.height = window.innerHeight - 20;
ctx.fillStyle = 'red';
  
el.onmousemove = function(e) {  
  ctx.fillRect(e.clientX - 8, e.clientY - 8, 2, 2);
};
