function Player(game) {
  this.game = game;
  this.x = this.game.canvas.width * 0.02;
  this.y = this.game.canvas.height * 0;
  this.img = new Image();
  this.img.src = 'images/fat_diver-2.png';
  this.img.frames = 1;
  this.img.frameIndex = 0;
  this.w = 90;
  this.h = 50;
  this.vy = 1;
  this.health = 346;
  this.width = 346;

  this.setListeners();
}

var up = 38;
var down = 40;
var left = 37;
var right = 39;

Player.prototype.draw = function() {

  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );

};

Player.prototype.setListeners = function() {

  document.onkeydown = function(event) {
    if (event.keyCode === up) {
      this.y -= 10;
      this.vy -= 15;
    } else if (event.keyCode === down) {
      this.y +=5;
      this.vy +=10;
    } else if (event.keyCode === left ) {
        this.x -= 5;
        this.vx -= 10;
        this.img.src = 'images/fat_diver-2b.png';
        
    } else if (event.keyCode === right) {
        this.x +=5;
        this.vx += 10;
        this.img.src = 'images/fat_diver-2.png';
    } 

  }.bind(this);
};

Player.prototype.move = function() {

     if (this.y <= 135) {
    this.vy = 1;
    this.y = 135;
  } if (this.y >=680) {
      this.vy = 1;
      this.y = 680;
  } if (this.x <= 0) {
      this.vx = 1;
      this.x = 0;
  } if (this.x >= 1000) {
      this.vx = 1;
      this.x = 1000;
  }
  
};

Player.prototype.playerWin = function() {

  this.player = 'Player 1';
  
  alert (this.player + ' Win!');


}


