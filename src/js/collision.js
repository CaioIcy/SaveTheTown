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
	
}