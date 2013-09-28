//This script contains anything

function xText(){
	d.fillStyle="blue";
	d.fillText("X: "+ Math.cos(player.posMovementStart) + ", Y: " + Math.sin(player.posMovementStart), 20,20);
	d.fillText("X real: " + player.posX +", Y real: "+ player.posY, 20, 50); 
}

function randomize(limite){
	return Math.floor(Math.random()*limite)+1;
}

function drawBar(posx, posy, size, width, state, horizontal, colorInside){
	d.fillStyle="black";
	if(horizontal){
		d.fillRect(posx, posy-1, size+2, width);
		d.fillStyle = colorInside;
		d.fillRect(posx+1, posy, state, width-2);
	}
	else if(!horizontal){
		d.fillRect(posx, posy-1, width, size+2);
		d.fillStyle = colorInside;
		d.fillRect(posx+1, posy+(size-state), width-2, state);
	}
	d.fillStyle="black";
}

var timeCounter=0;
var count = 0;
function time(){
	count++
	if(count%350==0){
		timeCounter++
	}
}
