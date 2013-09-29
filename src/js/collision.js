//This script verifies collisions

function circleCollision(circle1, circle2){

	var result = false;
	
	var dx = (circle2.x + circle2.radius) - (circle1.x + circle1.radius);
	var dy = (circle2.y + circle2.radius) - (circle1.y + circle1.radius);
	var distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
		
	if (Math.abs(distance) <= Math.abs(circle1.radius + circle2.radius)){
		result = true;
	}

	return result;
	
}

function circleCollision2(circle1, circle2){

	var result = false;
	
	var dx = Math.abs((circle2.x + circle2.sprite.width/2) - (circle1.x + circle1.radius));
	var dy = Math.abs((circle2.y + circle2.sprite.width/2) - (circle1.y + circle1.radius));
	var distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
		
	d.fillText(distance,circle1.x,300);	
		
	if (Math.abs(distance) <= Math.abs(circle1.radius + circle2.radius)){
		result = true;
	}
	
	d.beginPath();
	d.arc(circle2.x,circle2.y,circle2.radius,0,Math.PI*2);
	d.stroke();
	
	return result;
	
}

function collision(obj1, obj2){

	var dx = Math.abs(obj2.x - obj1.x);
	var dy = Math.abs(obj2.y - obj1.y);
	var len = (obj1.radius + obj2.radius);
	
	if(dx < len && dy < len)
		return true;
	else 
		return false;
}
