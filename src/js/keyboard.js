window.onkeydown = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = true;

};

window.onkeyup = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = false;

};

var pressedKeys = [];

function keyInput(){

	//left
	if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
		
	}
	else if(!pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
	}
	
	//up
	if(pressedKeys[VK_UP] || pressedKeys[VK_W]){
		
	}
	else if(!pressedKeys[VK_UP] || pressedKeys[VK_W]){
	}
	
	//right
	if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
		
	}
	else if(!pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
	}
	
	//down
	if(pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
		
	}
	else if(!pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
	}
	
}
