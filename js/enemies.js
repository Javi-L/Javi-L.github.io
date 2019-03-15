function Shark(game) {
    this.game = game;
    this.x = 0;/* Math.floor((Math.random() * 950) + 0) */
    this.y = Math.floor((Math.random() * 450) + 200);/* this.game.canvas.height * 0.6; */
    this.img = new Image();
    this.img.src = 'images/shark-1.png';
    this.img.frames = 1;


this.randomX = Math.floor((Math.random() * 650) + 170);
this.randomY = 250;
this.maxX = this.game.canvas.width - this.randomX;
this.maxY = this.game.canvas.height - this.randomY;
this.w = 150;
this.h = 75;
this.vx = 2.5;
this.vy = 2.5;
  }
  
   Shark.prototype.draw = function() {
     this.game.ctx.drawImage(
       this.img,
       this.x,
       this.y,
       this.w,
       this.h
     )

   }

   Shark.prototype.move = function() {

     this.x += this.vx;
     this.y += this.vy;

    if (this.y + this.vy > this.maxY || this.y + this.vy < 135) {
      this.vy *= -1;
    }

   if (this.x + this.vx > this.maxX) {
       this.vx *= -1;
       this.img = new Image();
       this.img.src = 'images/shark-4.png';
       this.img.frames = 1;
    }
    
     else if (this.x + this.vx < 0) {
      this.vx *= -1;
      this.img = new Image();
      this.img.src = 'images/shark-1.png';
      this.img.frames = 1;
      }

 };

  function Squid(game) {
    this.game = game;
    this.x = this.game.canvas.width * 0.1;
    this.y =  Math.floor((Math.random() * 450) + 200); /* this.game.canvas.height * 0.6; */
    this.img = new Image();
    this.img.src = 'images/squid.png';
    this.img.frames = 1;
    this.randomX = Math.floor((Math.random() * 650) + 150);
    this.maxX = this.game.canvas.width - this.randomX;
    this.maxY = this.game.canvas.height - 100;  
    this.w = 150;
    this.h = 75;
    this.vx = 2;
    this.vy = 2;
  }
  
   Squid.prototype.draw = function() {
     this.game.ctx.drawImage(
       this.img,
       this.x,
       this.y,
       this.w,
       this.h
     )

   }

   Squid.prototype.move = function() {

     this.x += this.vx;
     this.y += this.vy;

    if (this.y + this.vy > this.maxY || this.y + this.vy) {
      this.vy *= -1;
    }
    if (this.x + this.vx > this.maxX) {
      this.vx *= -1;
      this.img = new Image();
      this.img.src = 'images/squid-b.png';
      this.img.frames = 1;

    } else if (this.x + this.vx < 0) {
      this.vx *= -1;
      this.img = new Image();
      this.img.src = 'images/squid.png';
      this.img.frames = 1;
    }
  };

  function Shark2(game) {
    this.game = game;
    this.x = 300; /* Math.floor((Math.random() * 950) + 100); */
    this.y = Math.floor((Math.random() * 350) + 200); /* this.game.canvas.height * 0.6; */
    this.img = new Image();
    this.img.src = 'images/shark-1.png';
    this.img.frames = 1;
    this.maxX = this.game.canvas.width - 250;
    this.maxY = this.game.canvas.height - 200;  
    this.w = 150;
    this.h = 75;
    this.vx = 2.5;
    this.vy = 2.5;
  }
  
   Shark2.prototype.draw = function() {
     this.game.ctx.drawImage(
       this.img,
       this.x,
       this.y,
       this.w,
       this.h
     )

   }

   Shark2.prototype.move = function() {

     this.x += this.vx;
     this.y += this.vy;

    if (this.y + this.vy > this.maxY - 200 || this.y + this.vy < 400) {
      this.vy *= -1;
    }

   if (this.x + this.vx > this.maxX - 300) {
       this.vx *= -1;
       this.img = new Image();
       this.img.src = 'images/shark-5.png';
       this.img.frames = 1;
    }
    
     else if (this.x + this.vx < 100) {
      this.vx *= -1;
      this.img = new Image();
      this.img.src = 'images/shark-1.png';
      this.img.frames = 1;
      }
  };


  function Squid2 (game) {
    this.game = game;
    this.x = this.game.canvas.width * 0.3;
    this.y = this.game.canvas.height * 0.8;
    this.img = new Image();
    this.img.src = 'images/squid-2.png';
    this.img.frames = 1;
    this.maxX = this.game.canvas.width - 200;
    this.maxY = this.game.canvas.height - 100;  
    this.w = 200;
    this.h = 100;
    this.vx = 2;
    this.vy = 2;
  }
  
  Squid2.prototype.draw = function() {
     this.game.ctx.drawImage(
       this.img,
       this.x,
       this.y,
       this.w,
       this.h
     )

   }

   Squid2.prototype.move = function() {

     this.x += this.vx;
     this.y += this.vy;

    if (this.y + this.vy > this.maxY || this.y + this.vy < 600) {
      this.vy *= -1;
    }

   if (this.x + this.vx > this.maxX - 300) {
       this.vx *= -1;
       this.img = new Image();
       this.img.src = 'images/squid-2b.png';
       this.img.frames = 1;
    }
    
     else if (this.x + this.vx < 300) {
      this.vx *= -1;
      this.img = new Image();
      this.img.src = 'images/squid-2.png';
      this.img.frames = 1;
      }
  };
