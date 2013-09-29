//This script contains anything

function textGateHealth(){
	d.fillStyle="white";
	d.font = " 9pt Arial";
	
	
	if(!gate[PURPLE_GATE-1].broken)d.fillText(Math.floor(gate[PURPLE_GATE-1].health)+" / "+GATE_MAXHEALTH, MINIATURE_PURPLE_GATE_X_POSITION + 58, MINIATURE_PURPLE_GATE_Y_POSITION + 15);
	else d.fillText(gate[PURPLE_GATE-1].cooldown.toFixed(1), MINIATURE_PURPLE_GATE_X_POSITION + 58, MINIATURE_PURPLE_GATE_Y_POSITION + 15);
	
	if(!gate[GOLD_GATE-1].broken) d.fillText(Math.floor(gate[GOLD_GATE-1].health)+" / "+GATE_MAXHEALTH, MINIATURE_GOLD_GATE_X_POSITION + 58, MINIATURE_GOLD_GATE_Y_POSITION + 15);
	else d.fillText(gate[GOLD_GATE-1].cooldown.toFixed(1), MINIATURE_GOLD_GATE_X_POSITION + 58, MINIATURE_GOLD_GATE_Y_POSITION + 15);
	
	if(!gate[BLUE_GATE-1].broken)d.fillText(Math.floor(gate[BLUE_GATE-1].health)+" / "+GATE_MAXHEALTH, MINIATURE_BLUE_GATE_X_POSITION + 58, MINIATURE_BLUE_GATE_Y_POSITION + 15);
	else d.fillText(gate[BLUE_GATE-1].cooldown.toFixed(1), MINIATURE_BLUE_GATE_X_POSITION + 58, MINIATURE_BLUE_GATE_Y_POSITION + 15);
	
	if(!gate[RED_GATE-1].broken)d.fillText(Math.floor(gate[RED_GATE-1].health)+" / "+GATE_MAXHEALTH, MINIATURE_RED_GATE_X_POSITION + 58, MINIATURE_RED_GATE_Y_POSITION + 15);
	else d.fillText(gate[RED_GATE-1].cooldown.toFixed(1), MINIATURE_RED_GATE_X_POSITION + 58, MINIATURE_RED_GATE_Y_POSITION + 15);
	
	d.font = " 25pt Arial";
	d.fillText("SCORE : "+player.score,20,50);
}

function randomize(limit){
	return Math.floor(Math.random()*limit)+1;
}

function drawBar(posx, posy, size, width, state, horizontal, colorInside){
	if(state==-30) state = 0;

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


var count = 0;
var amount = 1;
function time(){
	count++
	if(count%350==0){
		for(i=0;i<NUMBER_OF_TROLLS_TO_SPAWN;i++){
			enemy[i].timeCounter = enemy[i].timeCounter + 1;
		}
	}
	if(count%1000==0){
		amount = amount + randomize(3);
		
		if(amount >= NUMBER_OF_TROLLS_TO_SPAWN){
			amount = NUMBER_OF_TROLLS_TO_SPAWN;
		}
	}
	if(count>20000){
		count=0;
	}
}
