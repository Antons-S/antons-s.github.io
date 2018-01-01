var player1 = true;
var log = [];
var filled = 0;
var filledCells = [];
var last;
var info = document.getElementById("info");
info.innerHTML = '<h3 id="info">Turn: Player   <img src="img/cross.png" width="16px" height="16px" /></h3> ' ;



for(var i =0;i<9;i++){
	log.push("n");
	filledCells.push(i);
}

function turn(position) {	
	if(log[position] === "n"){
		if(player1){
			document.getElementsByClassName("cell")[position].style.backgroundImage = "url('img/cross.png')";
			log[position] = "x";
			info.innerHTML = '<h3 id="info">Turn: Player   <img src="img/circle.gif" width="16px" height="16px" /></h3> ' ;
			filledCells[position] = "x";
			last = "x";
			
		}else{
			document.getElementsByClassName("cell")[position].style.backgroundImage = "url('img/circle.gif')";
			log[position] = "o";
			info.innerHTML = '<h3 id="info">Turn: Player   <img src="img/cross.png" width="16px" height="16px" /></h3> ' ;
			filledCells[position] = "o";
			last = "o";
		}
	player1 = !player1;
	filled++;
	Check(last);
	};
}

function Check(last){
	if(filledCells[0] == filledCells[1] && filledCells[0] == filledCells[2] ||
		filledCells[3] == filledCells[4] && filledCells[3] == filledCells[5] ||
		filledCells[6] == filledCells[7] && filledCells[6] == filledCells[8] ||
		filledCells[0] == filledCells[3] && filledCells[0] == filledCells[6] ||
		filledCells[1] == filledCells[4] && filledCells[1] == filledCells[7] ||
		filledCells[2] == filledCells[5] && filledCells[2] == filledCells[8] ||
		filledCells[0] == filledCells[4] && filledCells[0] == filledCells[8] ||
		filledCells[2] == filledCells[4] && filledCells[2] == filledCells[6] 
		
	){
		if(last == "x") info.innerHTML = '<h3 id="info">Player   <img src="img/cross.png" width="16px" height="16px" /> WIN !</h3> ' ;
		else  info.innerHTML = '<h3 id="info">Player   <img src="img/circle.gif" width="16px" height="16px" /> WIN !</h3> ' ;
		for(i = 0; i<9;i++){
			log[i] = "blocked";
		}
		if(filledCells[0] == filledCells[1] && filledCells[0] == filledCells[2]) mark(0,1,2);
		if(filledCells[3] == filledCells[4] && filledCells[3] == filledCells[5]) mark(3,4,5);
		if(filledCells[6] == filledCells[7] && filledCells[6] == filledCells[8]) mark(6,7,8);
		if(filledCells[0] == filledCells[3] && filledCells[0] == filledCells[6]) mark(0,3,6);
		if(filledCells[1] == filledCells[4] && filledCells[1] == filledCells[7]) mark(1,4,7);
		if(filledCells[2] == filledCells[5] && filledCells[2] == filledCells[8]) mark(2,5,8);
		if(filledCells[0] == filledCells[4] && filledCells[0] == filledCells[8]) mark(0,4,8);
		if(filledCells[2] == filledCells[4] && filledCells[2] == filledCells[6]) mark(2,4,6);

	}else{
		if(filled == 9){
			info.innerHTML = '<h3 id="info"><img src="img/cross.png" width="16px" height="16px" />  DRAW   <img src="img/circle.gif" width="16px" height="16px" /> </h3> ' ;
		}
	}
}

function mark(a,b,c){
			document.getElementsByClassName("cell")[a].style.backgroundColor = "lightgreen";
			document.getElementsByClassName("cell")[b].style.backgroundColor = "lightgreen";
			document.getElementsByClassName("cell")[c].style.backgroundColor = "lightgreen";
}


function newRound(){
	player1 = true;
	filled = 0;
	info.innerHTML = '<h3 id="info">Turn: Player   <img src="img/cross.png" width="16px" height="16px" /></h3> ' ;
	log = [];
	filledCells = [];
	for(var i =0;i<9;i++){
		log.push("n");
		filledCells.push(i);
		document.getElementsByClassName("cell")[i].style.backgroundImage = "";
		document.getElementsByClassName("cell")[i].style.backgroundColor = "";
	}
}


