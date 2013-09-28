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
var paused = false;

function updateKeyInput(){

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
