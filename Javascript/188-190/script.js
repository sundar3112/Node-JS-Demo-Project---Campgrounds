var inp=document.querySelector("input");
var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var reset=document.querySelector("#reset")
var p1score=0;
var p2score=0;
var winningScore=5;
var gameOver=false;
var player1=document.querySelector("#player1");
var player2=document.querySelector("#player2");
var numinp=document.querySelector("input");
var winningDisp=document.querySelector("p span");
p1.addEventListener("click",function(){
	if(!gameOver)
	{
		p1score++;
		if(p1score===winningScore)
		{
			player1.classList.add("winner");	
			gameOver=true;
		}
		player1.textContent=p1score;
	}
});
p2.addEventListener("click",function(){
	if(!gameOver)
	{
		p2score++;
		if(p2score===winningScore)
		{
			player2.classList.add("winner");
			gameOver=true;
		}
		player2.textContent=p2score;
	}
});
reset.addEventListener("click",function(){
	player1.textContent=0;
	player2.textContent=0;
	p1score=p2score=0;
	gameOver=false;
	player1.classList.remove("winner");
	player2.classList.remove("winner");
});
numinp.addEventListener("change",function(){
	winningDisp.textContent=numinp.value;
	winningScore=Number(numinp.value);
});
