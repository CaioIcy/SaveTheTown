
	var allowMenu = 0;
	
function menu(event){

var menuImage = new Image();
menuImage.src = "res/images/menu.png";

var aboutImage  = new Image();
aboutImage.src = "res/images/about.png";

var creditsImage  = new Image();
creditsImage.src = "res/images/credit.png";
	if( allowMenu == 0)
	menuImage.onload = function(){d.drawImage(menuImage , 0, 0, canvas.width, canvas.height);};

	var clickX = event.clientX;
	var clickY = event.clientY;
	//alert("X : " + clickX + " , Y : " + clickY);
	
	if(clickX>558 && clickX<772 && clickY>361 && clickY<456){
		
		d.clearRect(0, 0, canvas.width, canvas.height);
		aboutImage.onload = function(){d.drawImage(aboutImage , 0, 0, canvas.width, canvas.height);};
	}	
	
	if(clickX>543 && clickX<819 && clickY>476 && clickY<563){
		d.clearRect(0, 0, canvas.width, canvas.height);
		creditsImage.onload = function(){d.drawImage(creditsImage , 0, 0, canvas.width, canvas.height);};
	}	
		
	if(clickX>590 && clickX<772 && clickY>256 && clickY<347 && allowMenu == 0){
		d.clearRect(0, 0, canvas.width, canvas.height);

			allowMenu = 1;

			window.setInterval("update()",60/1000);
			window.setInterval("render()",1);

	}
	
}

	window.onclick= menu;

menu();
