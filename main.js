// console.log(document)

const ball = document.getElementById("ball")




///right
const moveRight = function () {
    let left = parseInt(ball.style.left) || 0
    left += 15
    ball.style.left = left + "px"
}
///left
const moveLeft = function () {
    let left = parseInt(ball.style.left) || 0
    left -= 15
    ball.style.left = left + "px"
}





ball.addEventListener("click", moveLeft);


document.getElementById("playing-field").appendChild(ball) // now the box will be on the page, and will react to a click!
