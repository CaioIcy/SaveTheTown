canvas=document.getElementById("canvas");
d = canvas.getContext("2d");

function initialize() {
	player = new Player(230,230,0.001,4.71,390,60);
	gate = new Array();
	gate[0] = new Gate(X_POSITION_GATE_1,Y_POSITION_GATE_1,HEALTH_GATE);
	gate[1] = new Gate(X_POSITION_GATE_2,Y_POSITION_GATE_2,HEALTH_GATE);
	gate[2] = new Gate(X_POSITION_GATE_3,Y_POSITION_GATE_3,HEALTH_GATE);
	gate[3] = new Gate(X_POSITION_GATE_4,Y_POSITION_GATE_4,HEALTH_GATE);
}

function update(){
	keyInput();
	player.update();
}


function render(){

	d.fillStyle="#F5DEB3";
	d.fillRect(0,0,canvas.width,canvas.height);
	
	d.drawImage(background, 0, 0);
	for(i=0;i<4;i++){
		d.fillStyle="red";
		d.fillRect(gate[i].x,gate[i].y,78,78);
	}
	
	d.fillStyle="blue";
	


	d.fillRect(player.posX, player.posY, 20, 20);
	d.fillText("X: "+ Math.cos(player.position) + ", Y: " + Math.sin(player.position), 20,20);
	d.fillText("X real: " + player.posX +", Y real: "+ player.posY, 20, 50); 
	
	if (walk){
		player.posX = (Math.cos(player.position)*player.x + 390);
		player.posY = (Math.sin(player.position)*player.y + 290);
		player.position+=player.speed;
	}
	
}

window.onload=initialize;
window.setInterval("update()",60/1000);
window.setInterval("render()",1);