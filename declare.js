let canvas = document.querySelector('#flappy')
  let ctx = canvas.getContext('2d')
  
  //decl
  let board = new Board()
  let flappy = new Flappy()
  let interval, frames = 0;
  let obstacles = []