function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.time = 0;
  this.counter = 0;
  this.countDown = 1800;
  this.sumCountDown = 0;
  // this.actualCountDown = this.countDown + this.sumCountDown;
  this.reset();
  }

Game.prototype.start = function() {
  this.interval = setInterval(function() {

    this.clear();
    this.time++;
    this.counter++;
    this.countDown--;
    console.log(this.counter);

    if (this.time > 2500 && this.counter < 10000) {
      this.time = 0;
    }

    switch (this.time) {

      case 10:
      
      this.createNewPearls();
      this.createNewTreasure();
      break;
      
      case 500: 

        this.createNewShark();      
        break;

      case 1000:

        this.createNewSquid();
        
        break;

        case 1500:

        this.createNewPearls();
        break;

      case 2000: 

        this.createNewShark2();
        this.createNewOxigenBottle();
        break;

      case 2500:

      this.createNewSquid2();
      break;

      case 8000:

      this.createNewOxigenBottle();
      break;
      
      case 10000:

      this.createNewTreasure();
      break;

      default:

        break;
      }

    this.move();
    this.draw();
    this.oxigenLevel();
    this.playerWin();

    if (this.player.health <= 0 /* || this.pearls.length > 20 */) {

      this.gameOver();
    }

  }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.sharks = [];
  this.squids = [];
  this.sharks2 = [];
  this.squids2 = [];
  this.pearls = [];
  this.treasures = [];
  this.oxigenBottles = [];
  this.createNewShark();
  this.createNewSquid();
  this.createNewShark2();
  this.createNewSquid2();
  this.createNewPearls();
  this.createNewTreasure();
  // this.createNewOxigenBottle();
  this.score = 0;

};

Game.prototype.createNewShark = function() {
 
  this.sharks.push (new Shark(this));
  
};

Game.prototype.createNewSquid = function() {
 
  this.squids.push (new Squid(this));

};

Game.prototype.createNewShark2 = function() {
 
  this.sharks2.push (new Shark2(this));

};

Game.prototype.createNewSquid2 = function() {
 
  this.squids2.push (new Squid2(this));

};

Game.prototype.createNewPearls = function() {

  for (var i = 0; i < 4; i++) {
  this.pearls.push (new Pearl(this));
  }

Game.prototype.createNewTreasure = function() {

  this.treasures.push (new Treasure(this));
}

Game.prototype.createNewOxigenBottle = function() {

  this.oxigenBottles.push(new OxigenBottle(this));
};

};

Game.prototype.clear = function() {
  
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.healthPlayer();
  this.drawScore();
  this.drawOxigenLevel();
  this.sharks.forEach(function(sharks) { sharks.draw(); });
  this.squids.forEach(function(squids) { squids.draw(); });
  this.sharks2.forEach(function(sharks2) { sharks2.draw(); });
  this.squids2.forEach(function(squids2) { squids2.draw(); });
  this.pearls.forEach(function(pearls) { pearls.draw(); });
  this.treasures.forEach(function(treasures) { treasures.draw(); });
  this.oxigenBottles.forEach(function(oxigenBottles) { oxigenBottles.draw(); });
};

Game.prototype.move = function() {
  this.player.move();
  this.sharks.forEach(function(sharks) { sharks.move(); });
  this.squids.forEach(function(squids) { squids.move(); });
  this.sharks2.forEach(function(sharks2) { sharks2.move(); });
  this.squids2.forEach(function(squids2) { squids2.move(); });
  
  this.sharks.forEach(function(shark) {

    if (this.bites(shark) === true) {

      this.player.health -= 1;
      this.player.width = this.player.health;
      this.ctx.clearRect (12, 12, 346, 21);
      this.ctx.fillStyle = '#1DC8B8'; 
      this.ctx.fillRect (this.x, this.y, this.width, this.height);
      this.ctx.restore();
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      // console.log(this.player.health);
     
    }
      
  }.bind(this));

  this.squids.forEach(function(squid) {

    if (this.bites(squid) === true) {

      this.player.health -= 1;
      this.player.width = this.player.health;
      this.ctx.clearRect (12, 12, 346, 21);
      this.ctx.fillStyle = '#1DC8B8'; 
      this.ctx.fillRect (this.x, this.y, this.width, this.height);
      this.ctx.restore();
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      // console.log(this.player.health);
      
    } 
      
  }.bind(this));

  this.sharks2.forEach(function(shark2) {

    if (this.bites(shark2) === true) {

      this.player.health -= 1;
      this.player.width = this.player.health;
      this.ctx.clearRect (12, 12, 346, 21);
      this.ctx.fillStyle = '#1DC8B8'; 
      this.ctx.fillRect (this.x, this.y, this.width, this.height);
      this.ctx.restore();
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      // console.log(this.player.health);
      
    } 
      
  }.bind(this));

  this.squids2.forEach(function(squid2) {

    if (this.bites(squid2) === true) {

      this.player.health -= 1;
      this.player.width = this.player.health;
      this.ctx.clearRect (12, 12, 346, 21);
      this.ctx.fillStyle = '#1DC8B8'; 
      this.ctx.fillRect (this.x, this.y, this.width, this.height);
      this.ctx.restore();
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      // console.log(this.player.health);
      
    }
      
  }.bind(this));

  this.pearls.forEach(function(pearl) {

    this.pearlIndex = this.pearls.indexOf(pearl, 0);

    if (this.collectItems(pearl) === true) {

      this.score += 10;
      this.pearls.splice(this.pearlIndex, 1);
      
    } 
      
  }.bind(this));

  this.treasures.forEach(function(treasure) {

    this.treasureIndex = this.treasures.indexOf(treasure, 0);

    if (this.collectItems(treasure) === true) {

      this.score += 50;
      this.treasures.splice(this.treasureIndex, 1);
      
    } 
      
  }.bind(this));

  this.oxigenBottles.forEach(function(oxigenBottle) {

    this.oxigenBottleIndex = this.oxigenBottles.indexOf(oxigenBottle, 0);

    if (this.collectItems(oxigenBottle) === true) {

      this.sumCountDown += 1800;
      this.oxigenBottles.splice(this.oxigenBottleIndex, 1);
      
    } 
      
  }.bind(this));
 
};

Game.prototype.bites = function(e) {

   if  (

    this.player.x < e.x + e.w &&
    this.player.x + this.player.w > e.x &&
    this.player.y < e.y + e.h &&
    this.player.y + this.player.h > e.y

  ) {

    return true;
  } 

};


Game.prototype.collectItems = function (e) {

  if  (

    this.player.x < e.x + e.w &&
    this.player.x + this.player.w > e.x &&
    this.player.y < e.y + e.h &&
    this.player.y + this.player.h > e.y

  ) {    
    
    return true;

  } else {
    return false;
  }

};

 Game.prototype.healthPlayer = function() {

   this.ctx.fillStyle = '#1C6177';
   this.ctx.fillRect (10, 10, 350, 25);
   this.ctx.fillStyle = '#1DC8B8'; 
   this.x = 12;
   this.y = 12;
   this.width = this.player.width;
   this.height = 21;
   this.ctx.fillRect (this.x, this.y, this.width, this.height)

  };

  Game.prototype.oxigenLevel = function() {

    if (this.actualCountDown < 0) {
      this.gameOver();
    } 
  }

  Game.prototype.drawOxigenLevel = function() {
    this.actualCountDown = this.countDown + this.sumCountDown;
    this.minutes = this.actualCountDown / 60;


    this.ctx.arc(50,70,25,0,(Math.PI/180)*360,true);
    this.ctx.fillStyle= '#1DC8B8';
    this.ctx.fill();
    this.ctx.strokeStyle = "#1C6177";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    this.ctx.font = "bold 30px Orbitron";
    this.ctx.textAlign = "start";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(Math.floor(this.minutes), 36, 80);

    if (this.player.y < 145) {
      this.countDown = 1860;
    }
  };

  Game.prototype.drawScore = function() {
    this.ctx.fillStyle = '#1C6177';
    if (this.score < 10) {    
    this.ctx.fillRect (1000, 10, 50, 50);
    this.ctx.clearRect (1004, 15, 41, 41)
    } else if (this.score >= 10 && this.score < 100) {
      this.ctx.fillRect (1000, 10, 64, 50);
      this.ctx.clearRect (1004, 15, 55, 41)
    } else if (this.score >= 100) {
      this.ctx.fillRect (1000, 10, 78, 50);
      this.ctx.clearRect (1004, 15, 70, 41)
    }
    
    this.ctx.font = "bold 30px Orbitron";
    this.ctx.textAlign = "start";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(Math.floor(this.score), 1017, 45);
    
}
  Game.prototype.playerWin = function() {

    if (this.score > 999) {
      this.player.playerWin();
      return
      
    }
    
}

  Game.prototype.gameOver = function() {
    alert ('Game Over');
  }

 
