window.onload = function () {
  function update(){
    frames++
    
    generatePipes()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    board.draw()
    flappy.draw()
    drawPipes()
    gameOver()

  }

  function startGame(){
    interval = setInterval(update, 1000/60)
  }

  function gameOver() {
    if(flappy.y < 0 || flappy.y > canvas.height - flappy.height || checkColition() ){
      console.log('perdistes wei')
      clearInterval(interval)
      interval = 0
      ctx.font = "30px Arial";
      ctx.fillText("Game Over",10,50);
    } 
  }

  startGame()
}