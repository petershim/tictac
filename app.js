var clickSquare = document.querySelectorAll(".square");
var turn = 0;
var sq1 = document.querySelector("#sq1");
var sq2 = document.querySelector("#sq2");
var sq3 = document.querySelector("#sq3");
var sq4 = document.querySelector("#sq4");
var sq5 = document.querySelector("#sq5");
var sq6 = document.querySelector("#sq6");
var sq7 = document.querySelector("#sq7");
var sq8 = document.querySelector("#sq8");
var sq9 = document.querySelector("#sq9");
var xMove = [];
var oMove = [];
var button = document.querySelector("#reset");

for(i=0; i<clickSquare.length; i++) {
	clickSquare[i].addEventListener('click', function(){
      if (turn % 2 == 0) {
        this.innerText="X";
        console.log('X');
        turn++;
        xMove.push(this);
				this.style.background = 'url(http://vignette1.wikia.nocookie.net/supermarioitalia/images/a/a7/Super_Stella.gif/revision/latest?cb=20130905202503&path-prefix=it)';
        console.log(xMove);
      }else if (turn >= 9){
				turn === null;
			}else {
        this.innerText="O";
        console.log("O");
        oMove.push(this);
				this.style.background = 'url(http://wirlescomunity.informe.com/forum/images/icons/shop_icons/mario_block.gif)';
        console.log(oMove);
        turn++;
      }
			winner();
    });
}


function winner(){
               if(sq1.innerText === "X" && sq2.innerText === "X" && sq3.innerText === "X") {
                   xWinner();
               }
               else if(sq1.innerText === "X" && sq5.innerText === "X" && sq9.innerText === "X") {
                   xWinner();
               }
               else if(sq3.innerText === "X" && sq5.innerText === "X" && sq7.innerText === "X") {
                   xWinner();
               }
               else if(sq4.innerText === "X" && sq5.innerText === "X" && sq6.innerText === "X") {
                   xWinner();
               }
               else if(sq7.innerText === "X" && sq8.innerText === "X" && sq9.innerText === "X") {
                   xWinner();
               }
               else if(sq1.innerText === "X" && sq4.innerText === "X" && sq7.innerText === "X") {
                   xWinner();
               }
               else if(sq2.innerText === "X" && sq5.innerText === "X" && sq8.innerText === "X") {
                   xWinner();
               }
               else if(sq3.innerText === "X" && sq6.innerText === "X" && sq9.innerText === "X") {
                   xWinner();
               }
               else if(sq1.innerText == "O" && sq2.innerText == "O" && sq3.innerText == "O") {
                   oWinner();
               }
               else if(sq1.innerText == "O" && sq5.innerText == "O" && sq9.innerText == "O") {
                   oWinner();
               }
               else if(sq3.innerText == "O" && sq5.innerText == "O" && sq7.innerText == "O") {
                   oWinner();
               }
               else if(sq4.innerText == "O" && sq5.innerText == "O" && sq6.innerText == "O") {
                   oWinner();
               }
               else if(sq7.innerText == "O" && sq8.innerText == "O" && sq9.innerText == "O") {
                   oWinner();
               }
               else if(sq1.innerText == "O" && sq4.innerText == "O" && sq7.innerText == "O") {
                   oWinner();
               }
               else if(sq2.innerText == "O" && sq5.innerText == "O" && sq8.innerText == "O") {
                   oWinner();
               }
               else if(sq3.innerText == "O" && sq6.innerText == "O" && sq9.innerText == "O") {
                   oWinner();
              }
							else if(xMove.length + oMove.length >= 9){
								alert('Its a Draw!');
							}

}
function xWinner(){
 console.log("Player X is the Winner!");
 document.querySelector("#winner").innerText="Player X is the Winner!";
}
function oWinner(){
 console.log("Player O is the Winner!");
 document.querySelector("#winner").innerText="Player O is the Winner!";
}
function reset() {
	sq1.innerText = '';
	sq2.innerText = '';
	sq3.innerText = '';
	sq4.innerText = '';
	sq5.innerText = '';
	sq6.innerText = '';
	sq7.innerText = '';
	sq8.innerText = '';
	sq9.innerText = '';
	turn = 0;
	xMove.length = 0;
	oMove.length = 0;
	sq1.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	sq2.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	sq3.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	sq4.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	sq5.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	sq6.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	sq7.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	sq8.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	sq9.style.background = 'url(http://www.nindb.net/nes/super-mario-bros/img/guide/brickblock.png)';
	document.querySelector("#winner").innerText=" ";
	document.querySelector("#winner").innerText=" ";
	console.log('reset');
}

button.addEventListener('click', function(){
	reset();
});
