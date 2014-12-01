var randomAssign= function(){
	var boardVals= ['O', 'O', 'X', 'X', '!', '!', '@', '@', '#', '#', '$$', '$$', '&', '&', '~', '~'];
	for(var i=0; i<16; i++){
		var square= document.querySelectorAll('.box')[i];		
		var randomPlacement= function(){
			var value= Math.floor(Math.random()*(boardVals.length));
			square.innerText= boardVals[value];
			boardVals.splice(value, 1);
		}
		randomPlacement();
	}
};

var coverAll= function(){
	for(var i=0; i<16; i++){
		var square= document.querySelectorAll('.box')[i];
		square.style.backgroundColor= 'hsl(0,0%,15%)';
	}
};

document.getElementById('reset').addEventListener("click", function(){
	randomAssign();
	coverAll();
	var pickArr= [];
	var placeHolderOne= '';
	var placeHolderTwo= '';
	var matches= 0;
	document.getElementById('reset').innerText= "Reset";
});

var boxes= document.querySelectorAll('.box')
var pickArr= [];
var placeHolderOne= '';
var placeHolderTwo= '';
var matches= 0;

for(i=0; i<16; i++){		
		boxes[i].addEventListener("click", function(){
			this.style.backgroundColor= 'hsl(0,0%,85%)';
			if(pickArr.length === 0){
					pickArr.push(this.innerText)
					placeHolderOne = this.id; 
				}
			else if(pickArr.length === 1){
					pickArr.push(this.innerText);
					placeHolderTwo= this.id;
					if(pickArr[0] !== pickArr[1]){
						setTimeout(function(){document.getElementById(placeHolderOne).style.backgroundColor='hsl(0,0%,15%)'}, 500);
						setTimeout(function(){document.getElementById(placeHolderTwo).style.backgroundColor= 'hsl(0,0%,15%)'}, 500);
					}
					else if(pickArr[0] === pickArr[1]){
						matches++;
						if(matches === 8){
							document.getElementById('reset').innerText= "WINNER!!! Click to play again!";
							};
						}
					pickArr= [];
			}
	});
}

randomAssign();
coverAll();
