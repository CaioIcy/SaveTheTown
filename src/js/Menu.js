

function menu(event){

var menuImage = new Image();
menuImage.src = "res/images/menu.png";

var aboutImage  = new Image();
aboutImage.src = "res/images/about.png";

var creditsImage  = new Image();
creditsImage.src = "res/images/credit.png";

if(state==0)
	menuImage.onload = function(){d.drawImage(menuImage , 0, 0, canvas.width, canvas.height);};

	var clickX = event.clientX;
	var clickY = event.clientY;
	
	if(clickX>0){
		d.clearRect(0, 0, canvas.width, canvas.height);
		state=3;
		window.setInterval("update()",60/1000);
		window.setInterval("render()",1);
	}
	
}

window.onclick= menu;
menu();
