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
	for(i=0;i<10;i++){
		while(enemy[i].x<(-50) || enemy[i].x>260){
			enemy[i].x = randomize(60)*10;
		}
		enemy[i].update();
	}
	
	//verifyiing enemies collision
	for(var j=0;j<10;j++){
		for(i=0;i<4;i++){
			enemy[j].verifyGateCollision(enemy[j],gate[i]);
		}
		enemy[j].verifyCityCollision(enemy[i],city);
	}	
}

function render(){
	d.drawImage(background_grass, 0, 0);
	d.drawImage(city.sprite, 149, 48);
	
	//render player
	player.render();
	
	//render enemy
	for(i=0;i<10;i++){
		enemy[i].render();
	}
	
	//render gates
	for(i=0;i<4;i++){
		gate[i].render();
	}
	
	xText();	

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