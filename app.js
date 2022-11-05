const game = document.getElementById('canvas')
const ctx = game.getContext('2d');


game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])


console.log('width', game.width)

console.log('height', game.height)


class Crawler {


   constructor(x, y, color, width, height) {
      this.x = x,
      this.y = y,
      this.color = color,
      this.width = width,
      this.height = height,
      this.alive = true,

      this.render = function () {
         ctx.fillStyle = this.color
         ctx.fillRect(this.x, this.y, this.width, this.height)
      }
   }
}
// let player = new Crawler(10, 10, 'lightsteelblue', 16, 16)
// let catOne = new Crawler(200, 50, '#bada55', 32, 48)
let catOne = new Crawler(200, 50, 'red', 32, 48)
let player = new Crawler(20, 20, '#bada55', 16, 14)

const gameLoop = () => {
   
   if (player.alive) {
      detectHit()
  }
  ctx.clearRect(0, 0, game.width, game.height)
  catOne.render()

   
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
   if (player.x < catOne.x + catOne.width
       && player.x + player.width > catOne.x
       && player.y < catOne.y + catOne.height
       && player.y + player.height > catOne.y) {
           // here we can see if the hit happens at the right time
           // console.log('we have a hit')
           // if a hit occurs, player dies 
           player.alive = false
         //   document.getElementById('status').textContent = 'You Win!'
       }
}

// document.addEventListener('DOMContentLoaded', main)

// function main(){
//     const  canvas = document.getElementById('easel')
//     const ctx = canvas.getContext('2d');
//     canvas.setAttribute('width', '800')
//     canvas.setAttribute('height', '800')
    



//     ctx.width = canvas.width
//     ctx.height= canvas.height


//     ctx.fillStyle = 'black'
//     ctx.strokeStyle = 'red'
//     ctx.lineWidth = 5

//     let x = 100
//     let y = 150
//     let wid = 200
//     let hei = 300

//     ctx.fillRect(x, y, wid, hei)
//     ctx.strokeRect(x, y, wid, hei)
    //ctx.fillRect(50, 50, 80, 80)
//     ctx.strokeRect(10, 10, 80, 80)

//  ctx.beginPath()
//  ctx.arc(400, 300, 90, 0, Math.PI = 2, false);
//  ctx.strokeStyle = 'red'
//  ctx.stroke()
 

//  function drawRec(x, y) {


//     const size1 = 55
//     const size2 = 34
    
//     ctx.fillStyle = 'blue'
//     ctx.strokeStyle = 'green'
//     ctx.lineWidth = 5

//     ctx.fillRect(x, y, size1, size2)
//     ctx.strokeRect(x, y, size1, size2)
//  }

//  canvas.addEventListener('click', function(event) {
//     console.log('mouse clicked. event')
//     console.log(event)
//     drawRec(event.offsetX, event.offsetY)

//  })

//  function clearCanvas() {
//     ctx.clearRect(0, 0, ctx.width, ctx.height)
//  }

//  document.getElementById('clear').addEventListener('click', function() {
//     clearCanvas()
//  })

// }