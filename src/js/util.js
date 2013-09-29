//This script contains anything

function xText(){
	d.fillStyle="white";
	d.fillText(Math.floor(gate[PURPLE_GATE-1].health)+" / "+GATE_MAXHEALTH, MINIATURE_PURPLE_GATE_X_POSITION + 58, MINIATURE_PURPLE_GATE_Y_POSITION + 15);
	d.fillText(Math.floor(gate[GOLD_GATE-1].health)+" / "+GATE_MAXHEALTH, MINIATURE_GOLD_GATE_X_POSITION + 58, MINIATURE_GOLD_GATE_Y_POSITION + 15);
	d.fillText(Math.floor(gate[BLUE_GATE-1].health)+" / "+GATE_MAXHEALTH, MINIATURE_BLUE_GATE_X_POSITION + 58, MINIATURE_BLUE_GATE_Y_POSITION + 15);
	d.fillText(Math.floor(gate[RED_GATE-1].health)+" / "+GATE_MAXHEALTH, MINIATURE_RED_GATE_X_POSITION + 58, MINIATURE_RED_GATE_Y_POSITION + 15);
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
