document.addEventListener('DOMContentLoaded', main)

function main(){
    const  canvas = document.getElementById('easel')
    const ctx = canvas.getContext('2d');
    canvas.setAttribute('width', '800')
    canvas.setAttribute('height', '800')
    



    ctx.width = canvas.width
    ctx.height= canvas.height


    ctx.fillStyle = 'black'
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5

    let x = 100
    let y = 150
    let wid = 200
    let hei = 300

    ctx.fillRect(x, y, wid, hei)
    ctx.strokeRect(x, y, wid, hei)
    //ctx.fillRect(50, 50, 80, 80)
//     ctx.strokeRect(10, 10, 80, 80)

//  ctx.beginPath()
//  ctx.arc(400, 300, 90, 0, Math.PI = 2, false);
//  ctx.strokeStyle = 'red'
//  ctx.stroke()
 }