function Board() {
  this.y = 0
  this.x = 0
  this.width = canvas.width
  this.height = canvas.height
  this.img = new Image()
  this.img.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/bg.png'

  this.img.onload = function(){
    console.log(this)
    this.draw()
  }.bind(this)
  this.move = function () {
    this.x--
    if(this.x < -canvas.width) this.x = 0;
  }
  this.draw = function(){
    this.move()
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
  }
 }


 function Flappy(){
   this.x = 150;
   this.y = 150;
   this.width = 50; 
   this.height = 50; 
   this.img = new Image()
   this.img.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/flappy.png'
   this.img.onload = function(){
     this.draw()
   }.bind(this)
   this.jump = function(){
     this.y -=  40
   }
   this.draw = function () {
     this.y++
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
   }
   this.isTouching = function (pipe) {
     return (this.x < pipe.x + pipe.width)  &&
            (this.x + this.width > pipe.x)  &&
            (this.y < pipe.y + pipe.height) &&
            (this.y + this.height > pipe.y)
   }
 }

function Pipe( y, height, type){
  this.x = canvas.width
  this.y = y
  this.width = 50
  this.height = height
  this.img = new Image()
  this.img2 = new Image()
  this.img.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/obstacle_top.png' 
  this.img2.src = 'https://raw.githubusercontent.com/Jossdz/lab-canvas-flappybirds/master/starter_code/images/obstacle_bottom.png'

  this.draw = function(){
    this.x--
    if(type){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }else{
      ctx.drawImage(this.img2, this.x, this.y, this.width, this.height)
    }
  }
}