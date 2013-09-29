//Keyboard Class
//This script contains all the keyboard actions
function Keyboard(){


	this.updateKeyInput = function(){
		var isPressing = false;

		//up
		
		if((pressedKeys[VK_UP] || pressedKeys[VK_W]) && player.isMoving == false){
		alert("up :D");
					player.movingToGate = PURPLE_GATE;

		}
		else if(!pressedKeys[VK_UP] || pressedKeys[VK_W]){
		}
			
		//left
			
		if((pressedKeys[VK_LEFT] || pressedKeys[VK_A]) && player.isMoving == false){
			player.movingToGate = GOLD_GATE;

		}
		else if(!pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
		}
		
		//down

		if((pressedKeys[VK_DOWN] || pressedKeys[VK_S]) && player.isMoving == false){
			player.movingToGate = BLUE_GATE;

		}
		else if(!pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
		}
		
		//right
		
		if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D]) && player.isMoving == false){
			player.movingToGate = RED_GATE;
		}
		else if(!pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
		}
		
	};
	
}
