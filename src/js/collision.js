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

function collision(obj1, obj2)
{
	if( (obj2.x > obj1.x  && obj2.x < obj1.x + obj1.radius) || 	
	    (obj2.x < obj1.x && obj2.x+obj2.radius > obj1.x) )		
	{
		//alert(obj2.y < obj1.y);
		if( (obj2.y > obj1.y && obj2.y-obj2.radius < obj1.y) ||				
		    (obj2.y < obj1.y && obj2.y+obj2.radius > obj1.y - obj1.radius) )
		{
			return true;
		}
	}	

	return false;
}
