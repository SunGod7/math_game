document.addEventListener('DOMContentLoaded', main)

function main(){
    const  canvas = document.getElementById('easel')
    const ctx = canvas.getContext('2d');
    canvas.setAttribute('width', '800')
    canvas.setAttribute('height', '800')
    



    ctx.width = canvas.width
    ctx.height= canvas.height

}