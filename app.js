const game = document.getElementById('canvas')
const ctx = game.getContext('2d');
//------------------------------------------------//
const ansOne = document.getElementById('ansBtn1')
const ansTwo = document.getElementById('ansBtn2')
const ansThree = document.getElementById('ansBtn3')
const ansFour = document.getElementById('ansBtn4')
const reSetBtn = document.getElementById('resetButton')
//------------------------------------------------//
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])


console.log('width', game.width)
console.log('height', game.height)


// class Crawler {


//    constructor(x, y, color, width, height) {
//       this.x = x,
//       this.y = y,
//       this.color = color,
//       this.width = width,
//       this.height = height,
//       this.alive = true,

//       this.render = function () {
//          ctx.fillStyle = this.color
//          ctx.fillRect(this.x, this.y, this.width, this.height)
//       }
//    }
// }


//------------------------------------------------//
class KatCrawler {


   constructor(x, y, color, width, height) {
      this.x = x,
         this.y = y,
         this.color = color,
         this.width = width,
         this.height = height,
         // this.type = type,
         this.alive = true,

         this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
         }
   }
}

//------------------------------------------------//
class DoggyCrawler {


   constructor(x, y, color, width, height) {
      this.x = x,
         this.y = y,
         this.color = color,
         this.width = width,
         this.height = height,
         this.alive = true,

         this.speed = 15,
         this.direction = {
            up: false,
            down: false,
            left: false,
            right: false
         }
      // this.render = function () {
      //    ctx.fillStyle = this.color
      //    ctx.fillRect(this.x, this.y, this.width, this.height)
      // }
   }
   setDirection = function (key) {// IM HERE*******
      console.log('this is the key thaty was pressed', key)
      if (key.toLowerCase() == 'w') { this.direction.up = true }
      if (key.toLowerCase() == 'w') { this.direction.up = true }
      if (key.toLowerCase() == 'w') { this.direction.up = true }
      if (key.toLowerCase() == 'w') { this.direction.up = true }
   }
}

let kat = new KatCrawler(200, 50, 'red', 32, 48, kat)
let player = new DoggyCrawler(20, 20, '#bada55', 16, 14)

const gameLoop = () => {

   if (player.alive) {
      detectHit()
   }
   ctx.clearRect(0, 0, game.width, game.height)
   kat.render()


   if (player.alive) {
      player.render()
   }
}

document.addEventListener('DOMContentLoaded', function () {
   document.addEventListener('keydown', movementHandler)
   setInterval(gameLoop, 60)
})


const movementHandler = (e) => {

   switch (e.keyCode) {

      case (38):
         // this moves player up
         player.y -= 10
         // we also need to break the case
         break

      case (37):
         // this moves the player left
         player.x -= 10
         break

      case (40):
         // this will move the player down
         player.y += 10
         break

      case (39):
         // this moves the player to the right
         player.x += 10
         break
   }

}


const detectHit = () => {
   // we'll use one big if statement that clearly defines any moment of collision.
   // that means utilizing, x, y, width and height of our objects
   if (player.x < kat.x + kat.width
      && player.x + player.width > kat.x
      && player.y < kat.y + kat.height
      && player.y + player.height > kat.y) {
      // here we can see if the hit happens at the right time
      // console.log('we have a hit')
      // if a hit occurs, player dies 
      player.alive = false
      document.getElementById("btm-left-gameOver").textContent = 'You lose!!!!'
      //   document.getElementById('status').textContent = 'You Win!'

   }

}

console.log(game)


document.getElementById("ansBtn1").style.padding = "15px";
ansBtn1.style.backgroundColor = "red";

document.getElementById("ansBtn2").style.padding = "15px";
ansBtn2.style.backgroundColor = "lightblue";

document.getElementById("ansBtn3").style.padding = "15px";
ansBtn3.style.backgroundColor = "green";

document.getElementById("ansBtn4").style.padding = "15px";
ansBtn4.style.backgroundColor = "pink";

// document.getElementById("btm-right-gameWon").style.backgroundColor = "white";
// document.getElementById("top-left-opperations").style.backgroundColor = "white";
// document.getElementById("btm-left-gameOver").style.backgroundColor = "white";
//global variables
let timeLeft = 25;
let timerInterval;
let correctAnswer = 0;
let score = 0;
let gameWon = 35;
let gameOver = score < 35;
let gameOn = false;

function startGame() {


   document.getElementById("startBtn").disabled = true;

   nextQuestion()
   //sets timer
   let timeDisplay = document.getElementById("timeDisplay");
   timeDisplay.hidden = false

   timerInterval = setInterval(function () {
      timeLeft -= 1;
      timeDisplay.innerHTML = "Time left: " + timeLeft;



      // stops timer
      if (timeLeft == 0 || score == gameWon) {
         clearInterval(timerInterval);


      }




      if (timeLeft == 0) {
         let YouLose = document.getElementById("btm-left-gameOver").textContent = 'You lose!!!!'
         console.log(YouLose)
      }

   }, 1000)
}

//creates random #'s for questions 
function nextQuestion() {
   let opperationsDiv = document.getElementById("top-left-opperations");
   let numOne = Math.floor(Math.random() * 12);
   let numTwo = Math.floor(Math.random() * 12);
   correctAnswer = numOne * numTwo;
   opperationsDiv.innerHTML = numOne + "*" + numTwo;


   let wrongAnswer1 = Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
   let wrongAnswer2 = Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
   let wrongAnswer3 = Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
   let wrongAnswer4 = Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);

   document.getElementById("ansBtn1").innerHTML = wrongAnswer1
   document.getElementById("ansBtn2").innerHTML = wrongAnswer2
   document.getElementById("ansBtn3").innerHTML = wrongAnswer3
   document.getElementById("ansBtn4").innerHTML = wrongAnswer4

   let correctAnswerIndex = Math.floor(Math.random() * 4) + 1;
   let correctAnswerID = "ansBtn" + correctAnswerIndex;
   document.getElementById(correctAnswerID).innerHTML = correctAnswer;

}
//make right answer appear on button
function checkAnswer(btnIndex) {

   let answer = document.getElementById("ansBtn" + btnIndex).innerHTML;
   if (answer == correctAnswer) score += 5;

   document.getElementById("scoreBrd").innerHTML = "current score: " + score;
   nextQuestion()

   if (score == gameWon) {

      console.log("btm-right-gameWon")
      document.getElementById("btm-right-gameWon").textContent = 'Your Free!!!!'

   }
}


const reStart = () => {
   startBtn.disabled = false;
   clearInterval(timerInterval);
   timeLeft = 26;
   player.alive = true
   //startGame()
   gameOn = true;
   score = 0;
   document.getElementById("scoreBrd").innerText = ''
   document.getElementById("btm-right-gameWon").innerText = ''
   document.getElementById("btm-left-gameOver").innerText = ''
   document.getElementById("ansBtn1").innerText = ''
   document.getElementById("ansBtn2").innerText = ''
   document.getElementById("ansBtn3").innerText = ''
   document.getElementById("ansBtn4").innerText = ''
   document.getElementById("top-left-opperations").innerText = ''
   document.getElementById("timeDisplay").innerText = ''
}