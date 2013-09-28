//This script contains all the keyboard actions

window.onkeydown = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = true;

};

window.onkeyup = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = false;

};

var pressedKeys = [];
var moving = false;
var paused = false;

function updateKeyInput(){

	//left
	if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
		playerWalkingInCircle = 2;
		moving = true;
	}
	else if(!pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
	}
	
	//up
	if(pressedKeys[VK_UP] || pressedKeys[VK_W]){
		playerWalkingInCircle = 1;
		moving = true;
	}
	else if(!pressedKeys[VK_UP] || pressedKeys[VK_W]){
	}
	
	//right
	if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
		playerWalkingInCircle = 4;
		moving = true;
	}
	else if(!pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
	}
	
	//down
	if(pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
		playerWalkingInCircle = 3;
		moving = true;
	}
	else if(!pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
	}
	
}

function updatePause(){
	if(pressedKeys[VK_SPACEBAR] && !isPressing){
		isPressing = true;
		if(!paused){
			paused = true;
		}
		else{
			paused = false;
		}
	}
	else if(!pressedKeys[VK_SPACEBAR]){
		isPressing = false;
	}
}
