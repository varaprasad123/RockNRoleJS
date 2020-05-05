/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,isWinner=false;
function newGame() {
  scores = [0,0];
  roundScore = 0;
  activePlayer =0;
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('#score-0').textContent=0;
  document.querySelector('#score-1').textContent=0;
  document.querySelector('#name-0').textContent="Player-1";
  document.querySelector('#name-1').textContent="Player-2";
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
}
newGame();
//document.querySelector('#current-'+activePlayer).textContent=dice;
function roll() {
  if (isWinner==false) {
    var dice= Math.floor(Math.random() * 6)+1;
    var diceImg=document.querySelector('.dice');
    diceImg.src = 'dice-'+dice+'.png';
    if(dice !== 1)
    {
      roundScore += dice;
      document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else {
      nextPlayer();
    }
  }
}
function holding() {
  scores[activePlayer] +=roundScore;
  document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
  if (scores[activePlayer]>=100) {
    document.querySelector('.dice').style.display='none';
    document.getElementById('name-'+activePlayer).textContent="Winner :)";
    document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
    document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
    roundScore=0;
    isWinner=true;
  } else {
    nextPlayer();
  }
}
function nextPlayer() {
  activePlayer===0 ?activePlayer=1 : activePlayer=0;
  roundScore=0;
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  //document.querySelector('.dice').style.display='none';

}

document.querySelector('.btn-roll').addEventListener('click',roll);
document.querySelector('.btn-hold').addEventListener('click',holding);
document.querySelector('.btn-new').addEventListener('click',newGame)
