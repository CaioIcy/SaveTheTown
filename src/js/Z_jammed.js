"use strict";
//This script loads all the sprites in the game

var background_grass = new Image();
background_grass.src = "res/images/bg_grass.png";

var spriteCity = new Image();
spriteCity.src = "res/images/city.png";

var blue_gate = new Image();
blue_gate.src = "res/images/blue_gate.png";

var gold_gate = new Image();
gold_gate.src = "res/images/gold_gate.png";

var purple_gate = new Image();
purple_gate.src = "res/images/purple_gate.png";

var red_gate = new Image();
red_gate.src = "res/images/red_gate.png";

var playerSprite = new Image();
playerSprite.src = "res/images/player.png";

var troll = new Image();
troll.src = "res/images/troll.png";
//This script shamefully contains global constants and variables

var pressedKeys = [];
var paused = false;
var i = 0;

//player constants
var PLAYER_STARTING_X = 390;
var PLAYER_STARTING_Y = 60;
var AMPLITUDE_X = 230;
var AMPLITUDE_Y = 230;
var CIRCLE_SPEED = 0.003;
var MOVEMENT_START_POSITION = (3*Math.PI)/2;
var X_SHIFT = 390;
var Y_SHIFT = 290;
var PLAYER_RADIUS = 14;

//Enemies constants
var ENEMY_STARTING_X = -300;
var ENEMY_STARTING_Y = 610;
var ENEMY_SPEED = 1;
var ENEMY_RADIUS = 6;

var NUMBER_OF_TROLLS_TO_SPAWN = 100;


//City constants
var CITY_STARTING_X = 30;
var CITY_STARTING_Y = 30;
var CITY_RADIUS = 6;

//Gates constants
var GOLD_GATE_X_POSITION = 176;
var GOLD_GATE_Y_POSITION = 411;
var BLUE_GATE_X_POSITION = 356;
var BLUE_GATE_Y_POSITION = 497;
var RED_GATE_X_POSITION = 536;
var RED_GATE_Y_POSITION = 411;
var PURPLE_GATE_X_POSITION = 356;
var PURPLE_GATE_Y_POSITION = 28;
var GATE_HEALTH = 100;

var GOLD_GATE_X_CENTER = 217;
var GOLD_GATE_Y_CENTER = 452;
var BLUE_GATE_X_CENTER = 397;
var BLUE_GATE_Y_CENTER = 538;
var RED_GATE_X_CENTER = 577;
var RED_GATE_Y_CENTER = 452;
var PURPLE_GATE_X_CENTER = 397;
var PURPLE_GATE_Y_CENTER = 70;

var PURPLE_GATE = 1;
var GOLD_GATE = 2;
var BLUE_GATE = 3;
var RED_GATE = 4;

var TOWN_CENTER_X = 401;
var TOWN_CENTER_Y = 300;
var GATE_RADIUS = 41;
//This script contains all the ASCII values from the keyboard

//numbers (keyboard)
var VK_0 = 48;
var VK_1 = 49;
var VK_2 = 50;
var VK_3 = 51;
var VK_4 = 52;
var VK_5 = 53;
var VK_6 = 54;
var VK_7 = 55;
var VK_8 = 56;
var VK_9 = 57;

//numpad
var VK_NUM0 = 96;
var VK_NUM1 = 97;
var VK_NUM2 = 98;
var VK_NUM3 = 99;
var VK_NUM4 = 100;
var VK_NUM5 = 101;
var VK_NUM6 = 102;
var VK_NUM7 = 103;
var VK_NUM8 = 104;
var VK_NUM9 = 105;
var VK_NUMMULTIPLY = 106;
var VK_NUMADD = 107;
var VK_NUMSUBTRACT = 109;
var VK_NUMDECIMAL = 110;
var VK_NUMDIVIDE = 111;

//function keys
var VK_F1 = 112;
var VK_F2 = 113;
var VK_F3 = 114;
var VK_F4 = 115;
var VK_F5 = 116;
var VK_F6 = 117;
var VK_F7 = 118;
var VK_F8 = 119;
var VK_F9 = 120;
var VK_F11 = 122;
var VK_F12 = 123;

//letters
var VK_A = 65;
var VK_B = 66;
var VK_C = 67;
var VK_D = 68;
var VK_E = 69;
var VK_F = 70;
var VK_G = 71;
var VK_H = 72;
var VK_I = 73;
var VK_J = 74;
var VK_K = 75;
var VK_L = 76;
var VK_M = 77;
var VK_N = 78;
var VK_O = 79;
var VK_P = 80;
var VK_Q = 81;
var VK_R = 82;
var VK_S = 83;
var VK_T = 84;
var VK_U = 85;
var VK_V = 86;
var VK_W = 87;
var VK_X = 88;
var VK_Y = 89;
var VK_Z = 90;

//others
var VK_BACKSPACE = 8;
var VK_TAB = 9;
var VK_ENTER = 13;
var VK_SHIFT = 16;
var VK_CTRL = 17;
var VK_PAUSE = 19;
var VK_CAPSLOCK = 20;
var VK_ESC = 27;
var VK_SPACEBAR = 32;
var VK_PAGEUP = 33;
var VK_PAGEDOWN = 34;
var VK_END = 35;
var VK_HOME = 36;
var VK_LEFT = 37;
var VK_UP = 38;
var VK_RIGHT = 39;
var VK_DOWN = 40;
var VK_INSERT = 45;
var VK_DELETE = 46;
var VK_NUMLOCK = 144;
var VK_SCRLOCK = 145;
var VK_SEMICOLON_COLON = 186;
var VK_EQUALS_PLUS = 187;
var VK_COMMA = 188;
var VK_MINUS_UNDERSCORE = 189;
var VK_PERIOD = 190;
var VK_FORWARDSLASH_QUESTIONMARK = 191;
var VK_TILDE = 192;
var VK_OPENBRACKETS = 219;
var VK_BACKSLASH_PIPE = 220;
var VK_CLOSEBRACKETS = 221;
var VK_QUOTES = 222;
//This script verifies collisions

function circleCollision(circle1, circle2){
	
	var dx = (circle2.x + circle2.radius) - (circle1.x + circle1.radius);
	var dy = (circle2.y + circle2.radius) - (circle1.y + circle1.radius);
	var distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
		
	if (Math.abs(distance) <= Math.abs(circle1.radius + circle2.radius)){
		return true;
	}
	else{
		return false;
	}
	
}
//Gate Class

function Gate( x, y, hp, radius, sprite){

	this.x= x;
	this.y= y;
	this.health= hp;
	this.sprite;
	this.radius = radius;
	
	this.render = function(){
		d.drawImage(sprite, x, y, sprite.width, sprite.height);
	};
}
//Enemy Class

function Enemy( x, y, speed, radius, sprite, minX, maxX ) {

	this.speed = speed;
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.radius = radius;
	this.move = true;
	this.minX = minX;
	this.maxX = maxX;
	
	this.verifyGateCollision = function(obj1,obj2){
			if(circleCollision(obj1,obj2)){
				this.move = false;
			}
	}
	this.verifyCityCollision = function(obj1,obj2){
			if(circleCollision(obj1,obj2)){
			}
	}
	//Update
	this.update = function(){
		
		if(this.move){
		
			if(this.findGate()==PURPLE_GATE){
			
				if(this.x<(PURPLE_GATE_X_CENTER)){
					this.x+=ENEMY_SPEED;
				}
				else {
					this.x-=ENEMY_SPEED;
				}
				
				if(this.y<(PURPLE_GATE_Y_CENTER)){
					this.y+=ENEMY_SPEED;
				}
				else {
					this.y-=ENEMY_SPEED;
				}
			}
			else if(this.findGate()==GOLD_GATE){
			
				if(this.x<(GOLD_GATE_X_CENTER)){
					this.x+=this.speed;
				}
				else {
					this.x-=this.speed;
				}
				
				if(this.y<(GOLD_GATE_Y_CENTER)){
					this.y+=this.speed;
				}
				else {
					this.y-=this.speed;
				}
			}
			else if(this.findGate()==BLUE_GATE){
			
				if(this.x<(BLUE_GATE_X_CENTER)){
					this.x+=this.speed;
				}
				else {
					this.x-=this.speed;
				}
				
				if(this.y<(BLUE_GATE_Y_CENTER)){
					this.y+=this.speed;
				}
				else {
					this.y-=this.speed;
				}
			}
			else {
			
				if(this.x<(RED_GATE_X_CENTER)){
					this.x+=this.speed;
				}
				else {
					this.x-=this.speed;
				}
				
				if(this.y<(RED_GATE_Y_CENTER)){
					this.y+=this.speed;
				}
				else {
					this.y-=this.speed;
				}
			}
		}
	};
	
	//Render
	this.render = function(){
		d.drawImage(this.sprite,this.x, this.y);
	};
	
	this.findGate = function(){
		
		var nextGate = 2;
		var distanceToGate = Math.sqrt((Math.pow((this.x - GOLD_GATE_X_CENTER),2) + Math.pow((this.y - GOLD_GATE_Y_CENTER),2)));
		if (Math.sqrt((Math.pow((this.x - RED_GATE_X_CENTER),2) + Math.pow((this.y - RED_GATE_Y_CENTER),2)))<distanceToGate){
			distanceToGate = Math.sqrt((Math.pow((this.x - RED_GATE_X_CENTER),2) + Math.pow((this.y - RED_GATE_Y_CENTER),2)));
			nextGate = 4;
		}
		if (Math.sqrt((Math.pow((this.x - PURPLE_GATE_X_CENTER),2) + Math.pow((this.y - PURPLE_GATE_Y_CENTER),2)))<distanceToGate){
			distanceToGate = Math.sqrt((Math.pow((this.x - PURPLE_GATE_X_CENTER),2) + Math.pow((this.y - PURPLE_GATE_Y_CENTER),2)));
			nextGate = 1;
		}
		if (Math.sqrt((Math.pow((this.x - BLUE_GATE_X_CENTER),2) + Math.pow((this.y - BLUE_GATE_Y_CENTER),2)))<distanceToGate){
			distanceToGate = Math.sqrt((Math.pow((this.x - BLUE_GATE_X_CENTER),2) + Math.pow((this.y - BLUE_GATE_Y_CENTER),2)));
			nextGate = 3;
		}
		return nextGate;
	};
	
}
//Player Class

function Player(amplitudeX, amplitudeY, speed, posMovementStart, posX, posY, radius, sprite) {
	this.amplitudeX = amplitudeX;
	this.amplitudeY = amplitudeY;
	this.speed = speed;
	this.posMovementStart = posMovementStart;
	this.posX = posX;
	this.posY = posY;
	this.sprite = sprite;
	this.movingToGate = 0;
	this.radius = radius;
	
	//Update
	this.update = function(){
		if (this.movingToGate==PURPLE_GATE && this.posX.toFixed(1) != 390.0 && this.posY.toFixed(1) != 60.0){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			this.posMovementStart += this.speed;
		}
		else if (this.movingToGate==GOLD_GATE && this.posX.toFixed(1) != 213.8 && this.posY.toFixed(1) != 432.2){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			this.posMovementStart += this.speed;
		}
		else if (this.movingToGate==BLUE_GATE && this.posX.toFixed(1) != 390.0 && this.posY.toFixed(1) != 520.0){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			this.posMovementStart += this.speed;
		}
		else if (this.movingToGate==RED_GATE && this.posX.toFixed(1) != 565.0 && this.posY.toFixed(1) != 439.2){
			this.posX = (Math.cos(this.posMovementStart) * this.amplitudeX) + X_SHIFT;
			this.posY = (Math.sin(this.posMovementStart) * this.amplitudeY) + Y_SHIFT;
			this.posMovementStart += this.speed;
		}
	};
	
	//Render
	this.render = function(){
		d.drawImage(sprite, player.posX, player.posY, sprite.width, sprite.height);
	};
	
}
//City Class

function City(x , y , radius, sprite) {

	this.x = x;
	this.y = y;
	this.radius = sprite.width/2;
	this.sprite = sprite;
}
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
//This script will be the game initializer

var player = new Player( AMPLITUDE_X, AMPLITUDE_Y, CIRCLE_SPEED, MOVEMENT_START_POSITION, PLAYER_STARTING_X, PLAYER_STARTING_Y, PLAYER_RADIUS, playerSprite);

var enemy = new Array();
	for(i=0;i<NUMBER_OF_TROLLS_TO_SPAWN;i++){
		var trollSpawn = randomize(4);
			if(trollSpawn==1){
				enemy[i] = new Enemy( ENEMY_STARTING_X, -20, ENEMY_SPEED, ENEMY_RADIUS, troll,300,500);
			}
			else if(trollSpawn==2){
				enemy[i] = new Enemy( ENEMY_STARTING_X, ENEMY_STARTING_Y, ENEMY_SPEED, ENEMY_RADIUS, troll,(-50),260);
			}
			else if(trollSpawn==3){
				enemy[i] = new Enemy( ENEMY_STARTING_X, ENEMY_STARTING_Y, ENEMY_SPEED, ENEMY_RADIUS, troll,260,560);
			}
			else if(trollSpawn==4){
				enemy[i] = new Enemy( ENEMY_STARTING_X, ENEMY_STARTING_Y, ENEMY_SPEED, ENEMY_RADIUS, troll,560,800);
			}
	}

var city = new City( CITY_STARTING_X, CITY_STARTING_Y, CITY_RADIUS, spriteCity);

var gate = new Array();
gate[PURPLE_GATE-1] = new Gate(PURPLE_GATE_X_POSITION, PURPLE_GATE_Y_POSITION, GATE_HEALTH,GATE_RADIUS, purple_gate);
gate[GOLD_GATE-1] = new Gate(GOLD_GATE_X_POSITION, GOLD_GATE_Y_POSITION, GATE_HEALTH,GATE_RADIUS, gold_gate);
gate[BLUE_GATE-1] = new Gate(BLUE_GATE_X_POSITION, BLUE_GATE_Y_POSITION, GATE_HEALTH,GATE_RADIUS, blue_gate);
gate[RED_GATE-1] = new Gate(RED_GATE_X_POSITION, RED_GATE_Y_POSITION, GATE_HEALTH,GATE_RADIUS, red_gate);
//Keyboard Class
//This script contains all the keyboard actions
function Keyboard(){


	this.updateKeyInput = function(){
		var isPressing = false;

		//up
		if(pressedKeys[VK_UP] || pressedKeys[VK_W]){
			player.movingToGate = 1;
		}
		else if(!pressedKeys[VK_UP] || pressedKeys[VK_W]){
		}
			
		//left
		if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
			player.movingToGate = 2;
		}
		else if(!pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
		}
		
		//down
		if(pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
			player.movingToGate = 3;
		}
		else if(!pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
		}
		
		//right
		if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
			player.movingToGate = 4;
		}
		else if(!pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
		}
		
	};
	
}
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
		enemy[i].update();
	}
	
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
	
	//render player
	player.render();
	
	//render enemy
	for(i=0;i<NUMBER_OF_TROLLS_TO_SPAWN;i++){
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
