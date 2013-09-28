//This script is contains the update and render method of the game

canvas=document.getElementById("canvas");
d = canvas.getContext("2d");

function update(){
	updateKeyInput();
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
	d.fillText("X: "+ Math.cos(player.posMovementStart) + ", Y: " + Math.sin(player.posMovementStart), 20,20);
	d.fillText("X real: " + player.posX +", Y real: "+ player.posY, 20, 50); 
	
	if (playerWalkingInCircle){
		player.posX = (Math.cos(player.posMovementStart) * player.amplitudeX) + X_SHIFT;
		player.posY = (Math.sin(player.posMovementStart) * player.amplitudeY) + Y_SHIFT;
		player.posMovementStart += player.speed;
	}
	
}

window.setInterval("update()",60/1000);
window.setInterval("render()",1);
