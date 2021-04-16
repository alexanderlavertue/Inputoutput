var bleft = document.getElementById('jsleft').addEventListener("click", Movesquareleft);
var bright = document.getElementById('jsright').addEventListener("click", Movesquareight);
var breset = document.getElementById('jsreset').addEventListener("click", reset);
var square = document.getElementById('jssquare');
var move = 0;
var re = '0rem';

function reset(){
    square.style.left = re;
    console.log(square.style.left)
};

function Movesquareleft(){
  move = move - 3;
  square.style.left = move+'rem';
  console.log( square.style.left)
};

function Movesquareight(){
    move = move + 3;
    square.style.left = move+'rem';
    console.log( square.style.left)
  };

  




