//Keyboard Class
//This script contains all the keyboard actions
function Keyboard(){


	this.updateKeyInput = function(){
		var isPressing = false;

		//up
<<<<<<< HEAD
		if(pressedKeys[VK_UP] || pressedKeys[VK_W]){
			player.movingToGate = PURPLE_GATE;
=======
		if((pressedKeys[VK_UP] || pressedKeys[VK_W]) && player.isMoving == false){
		alert("up :D");
			player.movingToGate = 1;
>>>>>>> Moviment of the Player
		}
		else if(!pressedKeys[VK_UP] || pressedKeys[VK_W]){
		}
			
		//left
<<<<<<< HEAD
		if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
			player.movingToGate = GOLD_GATE;
=======
		if((pressedKeys[VK_LEFT] || pressedKeys[VK_A]) && player.isMoving == false){
			player.movingToGate = 2;
>>>>>>> Moviment of the Player
		}
		else if(!pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
		}
		
		//down
<<<<<<< HEAD
		if(pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
			player.movingToGate = BLUE_GATE;
=======
		if((pressedKeys[VK_DOWN] || pressedKeys[VK_S]) && player.isMoving == false){
			player.movingToGate = 3;
>>>>>>> Moviment of the Player
		}
		else if(!pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
		}
		
		//right
<<<<<<< HEAD
		if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
			player.movingToGate = RED_GATE;
=======
		if((pressedKeys[VK_RIGHT] || pressedKeys[VK_D]) && player.isMoving == false){
			player.movingToGate = 4;
>>>>>>> Moviment of the Player
		}
		else if(!pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
		}
		
	};
	
}
