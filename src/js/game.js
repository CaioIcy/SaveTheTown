canvas=document.getElementById("canvas");
d = canvas.getContext("2d");

function initialize() {
	player = new Player(220,210,0.005,0);
	gate = new Array();
	gate[0] = new Gate(X_POSITION_GATE_1,Y_POSITION_GATE_1,HEALTH_GATE);
	gate[1] = new Gate(X_POSITION_GATE_2,Y_POSITION_GATE_2,HEALTH_GATE);
	gate[2] = new Gate(X_POSITION_GATE_3,Y_POSITION_GATE_3,HEALTH_GATE);
	gate[3] = new Gate(X_POSITION_GATE_4,Y_POSITION_GATE_4,HEALTH_GATE);
}

function update(){
	player.update();
}


function render(){

	d.fillStyle="#F5DEB3";
	d.fillRect(0,0,canvas.width,canvas.height);
	
	d.drawImage(background, 0, 0);
	
	d.fillStyle="blue";
	d.fillRect(Math.cos(player.position)*player.x + 345,Math.sin(player.position)*player.y + 250,100,100);
	player.position+=player.speed;
	
	for(i=0;i<4;i++){
		d.fillStyle="red";
		d.fillRect(gate[i].x,gate[i].y,78,78);
	}
}

window.onload=initialize;
window.setInterval("update()",60/1000);
window.setInterval("render()",1);