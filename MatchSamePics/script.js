const cards = document.querySelectorAll('.memory-card');
const sagat = document.querySelector('.memory-game')

let cardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;


var timer;
var ele = document.getElementById('timer');
var title = document.getElementById('title');
var seconds = 0;
var myInterval = -1;
var check = 0;

// function timer(){
  
//   if(myInterval == -1){
//     myInterval = setInterval(function(){
//       seconds++;
//       // if (seconds >= 60) {
//       //   minutes += 1;
//       //   time = 0;
//       // }  
//       title.innerHTML = seconds;
//     }, 1000);
//   // }else{
//   //   clearInterval(myInterval);
//   //   // myInterval=-1;
//   }else if(check==10){
//     clearInterval(myInterval);
//     myInterval=-1;
//   }
    
// }

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  

  if (!cardFlipped) {
    cardFlipped = true;
    firstCard = this;
  }else{
    secondCard = this;
    checkMatch();
    // timer();
  }
  
}

function checkMatch() {
  if(firstCard.dataset.name === secondCard.dataset.name){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    check++;

    resetBoard();
  }else{
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  cardFlipped = lockBoard = false;
  firstCard = secondCard = null;
}


(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 20);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));