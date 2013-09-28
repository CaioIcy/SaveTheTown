//This script verify collisions

function ciclesCollision(circle1, circle2){
	
	dx = circle2.x - circle1.x;
	dy = circle2.y - circle1.y;
	distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
	
	if (distance < (circle1.radius + circle2.radius))
		return true;
}