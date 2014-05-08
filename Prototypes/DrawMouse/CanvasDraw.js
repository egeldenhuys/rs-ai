var el = document.getElementById('c');
var ctx = el.getContext('2d');

ctx.fillStyle = 'red';

el.onmousemove = function(e) {  
  ctx.fillRect(e.clientX - 5, e.clientY, 1, 1);
  
};
