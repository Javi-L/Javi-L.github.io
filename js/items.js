function Pearl(game) {
    this.game = game;
    this.x = Math.floor((Math.random() * 1000) + 10);
    this.y = this.game.canvas.height - 40; /* Math.floor((Math.random() * (this.game.canvas.height - 130)) + (this.game.canvas.height - 140)); */
    this.img = new Image(); 
    this.img.src = 'images/Items/pearl1.png';
    this.img.frames = 1;
    this.w = 45;
    this.h = 35;
  }
  
   Pearl.prototype.draw = function() {
     this.game.ctx.drawImage(
       this.img,
       this.x,
       this.y,
       this.w,
       this.h
     )

   }

   function Treasure(game) {
    this.game = game;
    this.x = Math.floor((Math.random() * 1000) + 10);
    this.y = this.game.canvas.height - 140; /* Math.floor((Math.random() * (this.game.canvas.height - 130)) + (this.game.canvas.height - 140)); */
    this.img = new Image(); 
    this.img.src = 'images/Items/treasure.png';
    this.img.frames = 1;
    this.w = 100;
    this.h = 70;
  }
  
   Treasure.prototype.draw = function() {
     this.game.ctx.drawImage(
       this.img,
       this.x,
       this.y,
       this.w,
       this.h
     )

   }

   function OxigenBottle(game) {

    this.game = game;
    this.x = Math.floor((Math.random() * 1000) + 10);
    this.y = this.game.canvas.height - 250 /* Math.floor((Math.random() * (this.game.canvas.height - 400)) + (this.game.canvas.height - 140));*/
    this.img = new Image(); 
    this.img.src = 'images/Items/oxigen.png';
    this.img.frames = 1;
    this.w = 50;
    this.h = 85;

   }

   OxigenBottle.prototype.draw = function() {
    this.game.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

  }

  function LifeUp(game) {

    this.game = game;
    this.x = Math.floor((Math.random() * 1000) + 10);
    this.y = this.game.canvas.height - 200 /* Math.floor((Math.random() * (this.game.canvas.height - 400)) + (this.game.canvas.height - 140));*/
    this.img = new Image(); 
    this.img.src = 'images/Items/life_up.png';
    this.img.frames = 1;
    this.w = 50;
    this.h = 85;

   }

   LifeUp.prototype.draw = function() {
    this.game.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

  }