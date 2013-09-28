"use strict";
//This script loads all the sprites in the game

var background_grass = new Image();
background_grass.src = "res/images/bg_grass.png";
var city = new Image();
city.src = "res/images/city.png";
var blue_gate = new Image();
blue_gate.src = "res/images/blue_gate.png";
var gold_gate = new Image();
gold_gate.src = "res/images/gold_gate.png";
var purple_gate = new Image();
purple_gate.src = "res/images/purple_gate.png";
var red_gate = new Image();
red_gate.src = "res/images/red_gate.png";
var playerSprite = new Image();
playerSprite.src = "res/images/player.png";//This script shamefully contains global constants and variables

var pressedKeys = [];
var paused = false;
var i = 0;

//player constants
const PLAYER_STARTING_X = 390;
const PLAYER_STARTING_Y = 60;
const AMPLITUDE_X = 230;
const AMPLITUDE_Y = 230;
const CIRCLE_SPEED = 0.003;
const MOVEMENT_START_POSITION = (3*Math.PI)/2;
const X_SHIFT = 390;
const Y_SHIFT = 290;
const PLAYER_RADIUS = 14;

//enemies constants
const ENEMY_STARTING_X=30;
const ENEMY_STARTING_Y = 30;
const ENEMY_SPEED = 1;

//gates constants
const GOLD_GATE_X_POSITION = 176;
const GOLD_GATE_Y_POSITION = 411;
const BLUE_GATE_X_POSITION = 356;
const BLUE_GATE_Y_POSITION = 497;
const RED_GATE_X_POSITION = 536;
const RED_GATE_Y_POSITION = 411;
const PURPLE_GATE_X_POSITION = 356;
const PURPLE_GATE_Y_POSITION = 28;
const GATE_HEALTH = 100;

const GOLD_GATE_X_CENTER = 217;
const GOLD_GATE_Y_CENTER = 452;
const BLUE_GATE_X_CENTER = 397;
const BLUE_GATE_Y_CENTER = 538;
const RED_GATE_X_CENTER = 577;
const RED_GATE_Y_CENTER = 452;
const PURPLE_GATE_X_CENTER = 397;
const PURPLE_GATE_Y_CENTER = 70;

const PURPLE_GATE = 1;
const GOLD_GATE = 2;
const BLUE_GATE = 3;
const RED_GATE = 4;

const TOWN_CENTER_X = 401;
const TOWN_CENTER_Y = 300;
 
//This script contains all the ASCII values from the keyboard

//numbers (keyboard)
const VK_0 = 48;
const VK_1 = 49;
const VK_2 = 50;
const VK_3 = 51;
const VK_4 = 52;
const VK_5 = 53;
const VK_6 = 54;
const VK_7 = 55;
const VK_8 = 56;
const VK_9 = 57;

//numpad
const VK_NUM0 = 96;
const VK_NUM1 = 97;
const VK_NUM2 = 98;
const VK_NUM3 = 99;
const VK_NUM4 = 100;
const VK_NUM5 = 101;
const VK_NUM6 = 102;
const VK_NUM7 = 103;
const VK_NUM8 = 104;
const VK_NUM9 = 105;
const VK_NUMMULTIPLY = 106;
const VK_NUMADD = 107;
const VK_NUMSUBTRACT = 109;
const VK_NUMDECIMAL = 110;
const VK_NUMDIVIDE = 111;

//function keys
const VK_F1 = 112;
const VK_F2 = 113;
const VK_F3 = 114;
const VK_F4 = 115;
const VK_F5 = 116;
const VK_F6 = 117;
const VK_F7 = 118;
const VK_F8 = 119;
const VK_F9 = 120;
const VK_F11 = 122;
const VK_F12 = 123;

//letters
const VK_A = 65;
const VK_B = 66;
const VK_C = 67;
const VK_D = 68;
const VK_E = 69;
const VK_F = 70;
const VK_G = 71;
const VK_H = 72;
const VK_I = 73;
const VK_J = 74;
const VK_K = 75;
const VK_L = 76;
const VK_M = 77;
const VK_N = 78;
const VK_O = 79;
const VK_P = 80;
const VK_Q = 81;
const VK_R = 82;
const VK_S = 83;
const VK_T = 84;
const VK_U = 85;
const VK_V = 86;
const VK_W = 87;
const VK_X = 88;
const VK_Y = 89;
const VK_Z = 90;

//others
const VK_BACKSPACE = 8;
const VK_TAB = 9;
const VK_ENTER = 13;
const VK_SHIFT = 16;
const VK_CTRL = 17;
const VK_PAUSE = 19;
const VK_CAPSLOCK = 20;
const VK_ESC = 27;
const VK_SPACEBAR = 32;
const VK_PAGEUP = 33;
const VK_PAGEDOWN = 34;
const VK_END = 35;
const VK_HOME = 36;
const VK_LEFT = 37;
const VK_UP = 38;
const VK_RIGHT = 39;
const VK_DOWN = 40;
const VK_INSERT = 45;
const VK_DELETE = 46;
const VK_NUMLOCK = 144;
const VK_SCRLOCK = 145;
const VK_SEMICOLON_COLON = 186;
const VK_EQUALS_PLUS = 187;
const VK_COMMA = 188;
const VK_MINUS_UNDERSCORE = 189;
const VK_PERIOD = 190;
const VK_FORWARDSLASH_QUESTIONMARK = 191;
const VK_TILDE = 192;
const VK_OPENBRACKETS = 219;
const VK_BACKSLASH_PIPE = 220;
const VK_CLOSEBRACKETS = 221;
const VK_QUOTES = 222;
//This script verifies collisions

function circleCollision(circle1, circle2){
	
	var dx = circle2.x - circle1.x;
	var dy = circle2.y - circle1.y;
	var distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
	
	if (distance < (circle1.radius + circle2.radius)){
		return true;
	}
	else{
		return false;
	}
	
}//Gate Class

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

function Enemy( posX, posY, speed, radius, sprite) {

	this.speed = speed;
	this.posX = posX;
	this.posY = posY;
	this.sprite = sprite;
	this.radius = radius;
	this.move = true;
	
	//Update
	this.update = function(){
		for(i=0;i<gate.length;i++){
			if(!circleCollision(this,gate[i])){
				this.move = false
			}
		}
		
		if(this.move){
			if(this.findGate()==PURPLE_GATE){
				if(this.posX<(PURPLE_GATE_X_CENTER)){
					this.posX+=this.speed;
				}
				else {
					this.posX-=this.speed;
				}
				
				if(this.posY<(PURPLE_GATE_Y_CENTER)){
					this.posY+=this.speed;
				}
				else {
					this.posY-=this.speed;
				}
			}
			else if(this.findGate()==GOLD_GATE){
				if(this.posX<(GOLD_GATE_X_CENTER)){
					this.posX+=this.speed;
				}
				else {
					this.posX-=this.speed;
				}
				
				if(this.posY<(GOLD_GATE_Y_CENTER)){
					this.posY+=this.speed;
				}
				else {
					this.posY-=this.speed;
				}
			}
			else if(this.findGate()==BLUE_GATE){
				if(this.posX<(BLUE_GATE_X_CENTER)){
					this.posX+=this.speed;
				}
				else {
					this.posX-=this.speed;
				}
				
				if(this.posY<(BLUE_GATE_Y_CENTER)){
					this.posY+=this.speed;
				}
				else {
					this.posY-=this.speed;
				}
			}
			else {
				if(this.posX<(RED_GATE_X_CENTER)){
					this.posX+=this.speed;
				}
				else {
					this.posX-=this.speed;
				}
				
				if(this.posY<(RED_GATE_Y_CENTER)){
					this.posY+=this.speed;
				}
				else {
					this.posY-=this.speed;
				}
			}
		}
	};
	
	//Render
	this.render = function(){
		d.fillRect(this.posX, this.posY,30,30);
	};
	
	this.findGate = function(){
		
		var nextGate = 2;
		distance = Math.sqrt((Math.pow((this.posX - GOLD_GATE_X_CENTER),2) + Math.pow((this.posY - GOLD_GATE_Y_CENTER),2)));
		if (Math.sqrt((Math.pow((this.posX - RED_GATE_X_CENTER),2) + Math.pow((this.posY - RED_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - RED_GATE_X_CENTER),2) + Math.pow((this.posY - RED_GATE_Y_CENTER),2)));
			nextGate = 4;
		}
		if (Math.sqrt((Math.pow((this.posX - PURPLE_GATE_X_CENTER),2) + Math.pow((this.posY - PURPLE_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - PURPLE_GATE_X_CENTER),2) + Math.pow((this.posY - PURPLE_GATE_Y_CENTER),2)));
			nextGate = 1;
		}
		if (Math.sqrt((Math.pow((this.posX - BLUE_GATE_X_CENTER),2) + Math.pow((this.posY - BLUE_GATE_Y_CENTER),2)))<distance){
			distance = Math.sqrt((Math.pow((this.posX - BLUE_GATE_X_CENTER),2) + Math.pow((this.posY - BLUE_GATE_Y_CENTER),2)));
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
//This script contains anything

function xText(){
	d.fillStyle="blue";
	d.fillText("X: "+ Math.cos(player.posMovementStart) + ", Y: " + Math.sin(player.posMovementStart), 20,20);
	d.fillText("X real: " + player.posX +", Y real: "+ player.posY, 20, 50); 
}

function randomize(limite){
	return Math.floor(Math.random()*limite)+1;
}//This script will be the game initializer

var player = new Player(AMPLITUDE_X, AMPLITUDE_Y, CIRCLE_SPEED, MOVEMENT_START_POSITION, PLAYER_STARTING_X, PLAYER_STARTING_Y, PLAYER_RADIUS, playerSprite);
var enemy = new Enemy(ENEMY_STARTING_X,ENEMY_STARTING_Y,15,ENEMY_SPEED);

var gate = new Array();
gate[0] = new Gate(GOLD_GATE_X_POSITION, GOLD_GATE_Y_POSITION, GATE_HEALTH,41, gold_gate);
gate[1] = new Gate(BLUE_GATE_X_POSITION, BLUE_GATE_Y_POSITION, GATE_HEALTH,41, blue_gate);
gate[2] = new Gate(RED_GATE_X_POSITION, RED_GATE_Y_POSITION, GATE_HEALTH,41, red_gate);
gate[3] = new Gate(PURPLE_GATE_X_POSITION, PURPLE_GATE_Y_POSITION, GATE_HEALTH,41, purple_gate);
//Keyboard Class
//This script contains all the keyboard actions
function Keyboard(){


	this.updateKeyInput = function(){
		var isPressing = false;

		//up
		if(pressedKeys[VK_UP] || pressedKeys[VK_W]){
		alert("OAISOIDHIUOAHSDOISA");
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

	keyboard.updateKeyInput();
	player.update();
	enemy.update();
		
	while(enemy.posX<200 || enemy.posX>600){
		enemy.posX = randomize(60)*10;
	}
	
}

function render(){
	d.drawImage(background_grass, 0, 0);
	d.drawImage(city, 149, 48);
	
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