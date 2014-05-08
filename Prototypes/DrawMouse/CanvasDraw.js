var el = document.getElementById('c');
var ctx = el.getContext('2d');

ctx.fillStyle = 'red';

ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  
el.onmousemove = function(e) {  
  ctx.fillRect(e.clientX - 8, e.clientY - 8, 1, 1);
  
};
