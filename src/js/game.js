canvas=document.getElementById("canvas");
d = canvas.getContext("2d");

function initialize() {
	player = new Player(30,0,2);
	base = new Array();
	base[0] = new Base();
}

function update(){
	player.update();
}

function render(){
	d.fillStyle="#F5DEB3";
	d.fillRect(0,0,canvas.width,canvas.height);
	d.clearRect(player.x-player.speedX,player.y,100,100);
	d.drawImage(background, 0, 0);
	d.fillStyle="black";
	d.fillRect(player.x,player.y,100,100);
}

window.onload=initialize;
window.setInterval("update()",60/1000);
window.setInterval("render()",1);