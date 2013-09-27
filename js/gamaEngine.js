/*
	Engine desenvolvida por alunos do Grupo de Programação de Jogos
	UNB - Gama
	Engenharia de Software
*/

//constantes de direcao
const DIREITA = 39;
const ACIMA = 38;
const ESQUERDA = 37;
const ABAIXO = 40;

const CHAO = 480;

function colisao(obj1, obj2)
{	
	if( (obj2.x > obj1.x  && obj2.x < obj1.x + obj1.width) || 		//frente
	    (obj2.x < obj1.x && obj2.x+obj2.width > obj1.x) )			//tras
	{
		if(obj2.y == CHAO)	//comparando com a altura de um obstaculo definido
		{
			//alert(parseInt(obj1.y) - obj1.height);
		}
		//alert(obj2.y < obj1.y);
		if( (obj2.y > obj1.y && obj2.y-obj2.height < obj1.y) ||				//por cima
		    (obj2.y < obj1.y && obj2.y+obj2.height > obj1.y - obj1.height) )		//por baixo
		{
			//alert('colidiu');
			return 1;
		}
	}	

	return 0;
}

function colisaoObj(char, obj, init)
{
	obj1 = new Objeto(char.x - init,char.y,char.width,char.height);
	obj2 = new Objeto(obj.x,obj.y,obj.width,obj.height);
	
	return colisao(obj1, obj2);
}

function colisaoObjPerto(char, obj, init, prox)	//prox 'e pixels de aproximacao
{
	obj1 = new Objeto(char.x - init + prox, char.y + prox, char.width + prox, char.height + prox);	//somando prox em cada componente de medida
	obj2 = new Objeto(obj.x, obj.y, obj.width + prox, obj.height + prox);	//nao sei se precisava aki tbm, testar
	
	return colisao(obj1, obj2);
}


function Pixel(r,g,b,a)
{
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;

	this.toString = function()
	{
		return 'Pixel: ('+this.r+','+this.g+','+this.b+','+this.a+")\n";
	};
}

function equalPixels(pixelA, pixelB)
{
	if(pixelA==undefined || pixelB==undefined)
	return false;

	return  pixelA.r==pixelB.r &&
			pixelA.g==pixelB.g && 						
			pixelA.b==pixelB.b &&
			pixelA.a==pixelB.a;
}

function similarPixels(pixelA, pixelB, diff)
{
	if(diff==undefined)
	diff = 100;
	
	if(pixelA==undefined || pixelB==undefined)
	return false;

	if( Math.abs(pixelA.r-pixelB.r) <= diff &&
		Math.abs(pixelA.g-pixelB.g) <= diff &&
		Math.abs(pixelA.b-pixelB.b) <= diff &&
		Math.abs(pixelA.a-pixelB.a) <= diff
	)
	return true;
	else
	return false;
}

function transparecerFundo(imageData,diff)
{
	for(j=0; j<imageData.height; j++){
	for(i=0; i<imageData.width*4; i+=4){
		
		//para testar e saber os dados do 1º pixel de fundo
		if(i==0 && j==0)	
		{
			pixelFundo = new Pixel( imageData.data[0],
									imageData.data[1],
									imageData.data[2],
									imageData.data[3]);
			//alert(pixelFundo);		
		}

		//sendo similar coloca fundo preto
		pixelAtual = new Pixel( imageData.data[i+0 + j*imageData.width*4],
								imageData.data[i+1 + j*imageData.width*4],
								imageData.data[i+2 + j*imageData.width*4],
								imageData.data[i+3 + j*imageData.width*4]);
								
		if(similarPixels(pixelFundo,pixelAtual,diff))			
		{
			//imageData.data[i+0 + j*imageData.width*4] = 0;
			//imageData.data[i+1 + j*imageData.width*4] = 0;
			//imageData.data[i+2 + j*imageData.width*4] = 0;
			imageData.data[i+3 + j*imageData.width*4] = 0;	//esse canal é transparência só mexi nele
		}
	}}
	return imageData;
}

function desenhaSemTransparencia(imageData, x, y)
{
	//guardando o que tem na tela
	imageData2 = d.getImageData(x, y, imageData.width, imageData.height);
	var imageDataShow = d.createImageData(imageData.width, imageData.height);
	for(j=0; j<imageData.height; j++){
	for(i=0; i<imageData.width*4; i+=4){	
		//se for transparente pegar pixel da tela e por no lugar do transparente da imagem		
		if(imageData.data[i+3 + j*imageData.width*4] == 0)
		{
			imageDataShow.data[i+0 + j*imageData.width*4] = imageData2.data[i+0 + j*imageData.width*4];
			imageDataShow.data[i+1 + j*imageData.width*4] = imageData2.data[i+1 + j*imageData.width*4];
			imageDataShow.data[i+2 + j*imageData.width*4] = imageData2.data[i+2 + j*imageData.width*4];
			imageDataShow.data[i+3 + j*imageData.width*4] = imageData2.data[i+3 + j*imageData.width*4];
		}
	}}

	d.putImageData(imageDataShow, x, y);
}

function extremidades(imageData)
{
	var x1=-1, x2=-1, y1=-1, y2=-1;
	for(j=0; j<imageData.height; j++){
	for(i=0; i<imageData.width*4; i+=4){
		pixelAtual = new Pixel(imageData.data[i+0 + j*imageData.width*4],imageData.data[i+1 + j*imageData.width*4],imageData.data[i+2 + j*imageData.width*4],imageData.data[i+3 + j*imageData.width*4]);

		//sendo um pixel não transparente
		if(pixelAtual.a != 0)
		{
			if(x1==-1 || i/4<x1)	//caso descendo as linhas ele encontre um x menor
			x1=i/4;
			if(x2==-1 || i/4>x2)
			x2=i/4;

			if(y1==-1)
			y1=j;
			else
			y2=j;
		}

	}}

	return {    'x1' : x1,
				'y1' : y1,
				'x2' : x2+1,
				'y2' : y2+1,
			};
	//return [x1, y1, x2, y2];
}

function cortarImagem(imageData)
{
	var corte = extremidades(imageData);
	var imageData2 = d.createImageData(corte.x2-corte.x1, corte.y2-corte.y1);
	for(j=0; j<imageData2.height; j++){
	for(i=0; i<imageData2.width*4; i+=4){
		//pegando os pixels dentro do corte de imageData e passando para o novo imageData na posição correspondente
		imageData2.data[i+0 + j*(imageData2.width)*4] = imageData.data[i+(corte.x1*4)+0 + (j+corte.y1)*imageData.width*4];
		imageData2.data[i+1 + j*(imageData2.width)*4] = imageData.data[i+(corte.x1*4)+1 + (j+corte.y1)*imageData.width*4];
		imageData2.data[i+2 + j*(imageData2.width)*4] = imageData.data[i+(corte.x1*4)+2 + (j+corte.y1)*imageData.width*4];
		imageData2.data[i+3 + j*(imageData2.width)*4] = imageData.data[i+(corte.x1*4)+3 + (j+corte.y1)*imageData.width*4];
	}}
	
	return imageData2;
}

function extremidadesLinha(imageData,linha)
{
	if(linha==undefined)
	linha = 1;
	
	var contadorLinha = 0;
	var y1=-1, y2=-1;
	for(j=0; j<imageData.height && contadorLinha!=linha; j++){
	for(i=0, vazia=true; i<imageData.width*4; i+=4){
		
		pixelAtual = new Pixel(imageData.data[i+0 + j*imageData.width*4],imageData.data[i+1 + j*imageData.width*4],imageData.data[i+2 + j*imageData.width*4],imageData.data[i+3 + j*imageData.width*4]);

		//sendo um pixel não transparente
		if(pixelAtual.a != 0)
		vazia = false;
		
		if(!vazia && y1==-1)							//primeira não vazia
		{
			if(y1==-1)
			y1=j;
			
			break;
		}
		
		if(vazia && y1!=-1 && y2==-1 && i==(imageData.width-1)*4)	//última antes de aparecer uma nova vazia (permaneceu vazia até a última coluna)
		{			
			y2=j;
		}
		
		if(y2!=-1 && ++contadorLinha!=linha)
		{		
			y1=-1;
			y2=-1;
			
			break;
		}		
	}}

	return {	'y1' : y1,
				'y2' : y2
			};
}


function cortarLinhaImagem(imageData,linha)
{	
	var corte = extremidadesLinha(imageData, linha);
	if(corte.y2 == -1)
	return -1;
	
	var imageData2 = d.createImageData(imageData.width, corte.y2-corte.y1);
	for(j=0; j<imageData2.height; j++){
	for(i=0; i<imageData2.width*4; i+=4){
		//pegando os pixels dentro do corte de imageData e passando para o novo imageData na posição correspondente
		imageData2.data[i+0 + j*(imageData2.width)*4] = imageData.data[i+0 + (j+corte.y1)*imageData.width*4];
		imageData2.data[i+1 + j*(imageData2.width)*4] = imageData.data[i+1 + (j+corte.y1)*imageData.width*4];
		imageData2.data[i+2 + j*(imageData2.width)*4] = imageData.data[i+2 + (j+corte.y1)*imageData.width*4];
		imageData2.data[i+3 + j*(imageData2.width)*4] = imageData.data[i+3 + (j+corte.y1)*imageData.width*4];
	}}
	
	return imageData2;
}

function extremidadesColuna(imageData,coluna)
{
	if(coluna==undefined)
	coluna = 1;
	
	var contadorColuna = 0;
	var x1=-1, x2=-1;
	for(i=0; i<imageData.width*4 && contadorColuna!=coluna; i+=4){
	for(j=0, vazia=true; j<imageData.height; j++){
		
		pixelAtual = new Pixel(imageData.data[i+0 + j*imageData.width*4],imageData.data[i+1 + j*imageData.width*4],imageData.data[i+2 + j*imageData.width*4],imageData.data[i+3 + j*imageData.width*4]);

		//sendo um pixel não transparente
		if(pixelAtual.a != 0)
		vazia = false;
		
		if(!vazia && x1==-1)	//primeira não vazia
		{
			if(x1==-1)
			x1=i/4;
			
			break;
		}
		
		if(vazia && x1!=-1 && x2==-1 && j==imageData.height-1)	//última antes de aparecer uma nova vazia (permaneceu vazia até a última coluna)
		{			
			x2=i/4;
		}
		
		if(x2!=-1 && ++contadorColuna!=coluna)
		{		
			x1=-1;
			x2=-1;
			
			break;
		}		
	}}

	return {	'x1' : x1,
				'x2' : x2
			};
	//return [x1,x2];
}


function cortarColunaImagem(imageData,coluna)
{	
	var corte = extremidadesColuna(imageData, coluna);
	if(corte.x2 == -1)
	return -1;

	var imageData2 = d.createImageData(corte.x2-corte.x1, imageData.height);
	for(j=0; j<imageData2.height; j++){
	for(i=0; i<imageData2.width*4; i+=4){
		//pegando os pixels dentro do corte de imageData e passando para o novo imageData na posição correspondente
		imageData2.data[i+0 + j*(imageData2.width)*4] = imageData.data[i+corte.x1*4+0 + j*imageData.width*4];
		imageData2.data[i+1 + j*(imageData2.width)*4] = imageData.data[i+corte.x1*4+1 + j*imageData.width*4];
		imageData2.data[i+2 + j*(imageData2.width)*4] = imageData.data[i+corte.x1*4+2 + j*imageData.width*4];
		imageData2.data[i+3 + j*(imageData2.width)*4] = imageData.data[i+corte.x1*4+3 + j*imageData.width*4];
	}}
	
	return imageData2;
}

function cortarImagemPos(imageData, linha, coluna, cortar)
{
	imageData = cortarLinhaImagem(imageData, linha);
	if(coluna != undefined)
	imageData = cortarColunaImagem(imageData, coluna);
	if(cortar)
	imageData = cortarImagem(imageData)
	
	if(imageData==-1)
	alert("Erro ao carregar imagem, verifique se o número de linha e coluna realmente existe na imagem.");

	return imageData;
}


//util
function carregarImagens(csv_nomes,csv_arquivos,callback)
{
	var nomes = csv_nomes.split(',');
	var arquivos = csv_arquivos.split(',');
	var carregadas = 0;
	
	for(i=0; i<nomes.length; i++)
	{
		images[nomes[i]] = new Image();
		images[nomes[i]].onload = function()
		{	
			if (++carregadas == nomes.length) {
	            	callback();
	        }
		};
		images[nomes[i]].src = arquivos[i];
	}
}

function desenhaBarra(posx,posy,tamanho,estado,sentido,cordentro)//sentido -> 1 = vertical, 0 = horizontal  
{
	d.fillStyle="black";
	if(sentido==1)
	{
		d.fillRect(posx,posy,20,tamanho);
		d.fillStyle=cordentro;
		d.fillRect(posx+1,posy+(tamanho-estado)-1,18,estado);
	}
	else
	{
		d.fillRect(posx,posy,tamanho,20);
		d.fillStyle=cordentro;
		d.fillRect(posx+1,posy+1,estado,18);
	}
	d.fillStyle="black";
}


//física
function aplicarGravidade(char)
{
	if(char.saltando == 1)
	char.velocidadeY += 3;

	if(char.y > CHAO)
	{
		char.velocidadeY = 0;
		char.y=CHAO;
		char.saltando = 0;
	}
	return char;
}

