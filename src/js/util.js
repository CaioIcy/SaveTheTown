//This script contains anything

function xText(){
	d.fillStyle="blue";
	d.fillText("X: "+ Math.cos(player.posMovementStart) + ", Y: " + Math.sin(player.posMovementStart), 20,20);
	d.fillText("X real: " + player.posX +", Y real: "+ player.posY, 20, 50); 
}

function randomize(limite){
	return Math.floor(Math.random()*limite)+1;
}