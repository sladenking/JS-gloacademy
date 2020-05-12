const canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d');

const angle = degrees => (Math.PI / 180) * degrees;

ctx.beginPath();
ctx.arc(75, 75, 50, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'blue';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 75, 50, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(325, 75, 50, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'red';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(137, 125, 50, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'yellow';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(262, 125, 50, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();
