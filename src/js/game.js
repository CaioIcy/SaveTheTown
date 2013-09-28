//This script is contains the update and render method of the game

canvas=document.getElementById("canvas");
d = canvas.getContext("2d");

function update(){
	updatePause();
	if(!paused){
		updateKeyInput();
		player.update();
	}
	else{
		//do nothing
	}
}

function render(){

	if(!paused){

		d.fillStyle="#F5DEB3";
		d.fillRect(0,0,canvas.width,canvas.height);
		
		d.drawImage(background, 0, 0);
		for(i=0;i<4;i++){
			gate[i].render();
		}
		
		d.fillStyle="blue";

		d.fillRect(player.posX, player.posY, 20, 20);
		d.fillText("X: "+ Math.cos(player.posMovementStart) + ", Y: " + Math.sin(player.posMovementStart), 20,20);
		d.fillText("X real: " + player.posX +", Y real: "+ player.posY, 20, 50); 
		
		if (playerWalkingInCircle==1 && player.posX.toFixed(1) != 390.0 && player.posY.toFixed(1) != 60.0){
			player.posX = (Math.cos(player.posMovementStart) * player.amplitudeX) + X_SHIFT;
			player.posY = (Math.sin(player.posMovementStart) * player.amplitudeY) + Y_SHIFT;
			player.posMovementStart += player.speed;
		}
		else if (playerWalkingInCircle==2 && player.posX.toFixed(1) != 213.8 && player.posY.toFixed(1) != 432.2){
			player.posX = (Math.cos(player.posMovementStart) * player.amplitudeX) + X_SHIFT;
			player.posY = (Math.sin(player.posMovementStart) * player.amplitudeY) + Y_SHIFT;
			player.posMovementStart += player.speed;
		}
		else if (playerWalkingInCircle==3 && player.posX.toFixed(1) != 390.0 && player.posY.toFixed(1) != 520.0){
			player.posX = (Math.cos(player.posMovementStart) * player.amplitudeX) + X_SHIFT;
			player.posY = (Math.sin(player.posMovementStart) * player.amplitudeY) + Y_SHIFT;
			player.posMovementStart += player.speed;
		}
		else if (playerWalkingInCircle==4 && player.posX.toFixed(1) != 565.0 && player.posY.toFixed(1) != 439.2){
			player.posX = (Math.cos(player.posMovementStart) * player.amplitudeX) + X_SHIFT;
			player.posY = (Math.sin(player.posMovementStart) * player.amplitudeY) + Y_SHIFT;
			player.posMovementStart += player.speed;
		}
	}
	else{
		//do nothing
	}
	
}

window.setInterval("update()",60/1000);
window.setInterval("render()",1);
