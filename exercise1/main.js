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
//up
const moveUp = function () {
    let top = parseInt(ball.style.top) || 0
    top -= 15
    ball.style.top = top + "px"
}

//down
const moveDown = function () {
    let top = parseInt(ball.style.top) || 0
    top += 15
    ball.style.top = top + "px"
}


document.getElementById("right").addEventListener("click", moveRight)
document.getElementById("left").addEventListener("click", moveLeft)
document.getElementById("up").addEventListener("click", moveUp)
document.getElementById("down").addEventListener("click", moveDown)