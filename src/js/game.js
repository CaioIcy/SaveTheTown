//This script is contains the update and render method of the game

var canvas = document.getElementById("canvas");
var d = canvas.getContext("2d");

var keyboard = new Keyboard();

function update(){

	keyboard.updateKeyInput();
	player.update();
	for(i=0;i<4;i++){
		enemy.verifyGateCollision(enemy,gate[i]);
	}
	enemy.verifyCityCollision(enemy,city);
	enemy.update();
	while(enemy.x<200 || enemy.x>600){
		enemy.x = randomize(60)*10;
	}
	
}

function render(){
	d.drawImage(background_grass, 0, 0);
	d.drawImage(city.sprite, 149, 48);
	
	//render player
	player.render();
	enemy.render();
	
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