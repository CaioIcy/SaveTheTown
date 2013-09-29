//This script is contains the update and render method of the game

var canvas = document.getElementById("canvas");
var d = canvas.getContext("2d");

var keyboard = new Keyboard();

function update(){

	//keyboard update
	keyboard.updateKeyInput();
	
	//player update
	player.update();
	
	//enemies update
	for(i=0;i<NUMBER_OF_TROLLS_TO_SPAWN;i++){
		while(enemy[i].x<(enemy[i].minX) || enemy[i].x> (enemy[i].maxX) ){
			enemy[i].x = randomize(82)*10;
		}
	}
	
	for(i=0;i<amount;i++)
		enemy[i].update();
	
	//verifyiing enemies collision
	for(var j=0;j<NUMBER_OF_TROLLS_TO_SPAWN;j++){
		for(i=0;i<4;i++){
			enemy[j].verifyGateCollision(enemy[j],gate[i]);
		}
		enemy[j].verifyCityCollision(enemy[i],city);
	}	
}

function render(){

	d.drawImage(background_grass, 0, 0);
	d.drawImage(city.sprite, 149, 48);
	
	d.drawImage(gate[0].sprite, MINIATURE_PURPLE_GATE_X_POSITION, MINIATURE_PURPLE_GATE_Y_POSITION, 30, 30);
	d.drawImage(gate[1].sprite, MINIATURE_GOLD_GATE_X_POSITION, MINIATURE_GOLD_GATE_Y_POSITION, 30, 30);
	d.drawImage(gate[2].sprite, MINIATURE_BLUE_GATE_X_POSITION, MINIATURE_BLUE_GATE_Y_POSITION, 30, 30);
	d.drawImage(gate[3].sprite, MINIATURE_RED_GATE_X_POSITION, MINIATURE_RED_GATE_Y_POSITION, 30, 30);
	
	drawBar(MINIATURE_PURPLE_GATE_X_POSITION + 38, MINIATURE_PURPLE_GATE_Y_POSITION + 5, 80, 20, 80, true, "#762A9C");
	drawBar(MINIATURE_GOLD_GATE_X_POSITION + 38, MINIATURE_GOLD_GATE_Y_POSITION + 5, 80, 20, 80, true, "#878A00");
	drawBar(MINIATURE_BLUE_GATE_X_POSITION + 38, MINIATURE_BLUE_GATE_Y_POSITION + 5, 80, 20, 80, true, "#0657FF");
	drawBar(MINIATURE_RED_GATE_X_POSITION + 38, MINIATURE_RED_GATE_Y_POSITION + 5, 80, 20, 80, true, "#C70035");

	//render player
	player.render();
	
	//render enemy
	for(i=0;i<amount;i++){
		enemy[i].render();
	}
	for(i=amount;i<NUMBER_OF_TROLLS_TO_SPAWN;i++)
		enemy[i].timeCounter=0;
	
	//render gates
	for(i=0;i<4;i++){
		gate[i].render();
	}
	
	for(i=0;i<amount;i++){
		drawBar(enemy[i].x, enemy[i].y-4, 15, 3, enemy[i].timeCounter>14 ?  0 : 15 - enemy[i].timeCounter, true, "pink");
	}
	xText();	
	time();

}

window.setInterval("update()",60/1000);
window.setInterval("render()",1);

window.onkeydown = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = true;

};

window.onkeyup = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = false;

};
