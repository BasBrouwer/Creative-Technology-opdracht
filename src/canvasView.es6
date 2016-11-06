class Canvas {
  constructor(){
    // het speelveld
    this.c = document.getElementById("myCanvas");
    this.ctx = this.c.getContext("2d");

    //canvas for the game data
    this.cData = document.getElementById("levelData");
    this.ctxData = this.cData.getContext("2d");

    //array for the sprites
    this.mineralTiles = [];
    this.playerGfx = [];


    //scale of the game, the scale of the tiles etc.
    this.scale = 35;

    //load the sprite and set a default image
    this.loadImages();
    this.image;
    this.playerImg = {
      img: this.playerGfx[0],
      xPos: 0,
      yPos: 0,
      w: 0,
      h: 0,
      xS: 0,
      yS: 0
    };
    this.alpha = 1;

  }

  clearRect(){
    //clear canvas
    this.ctx.clearRect(0,0,this.c.width, this.c.height);
    this.ctxData.clearRect(0,0,this.c.width, this.c.height);
  }

  // Load all images of the game
  // =============================================================================
  loadImages(){
    for(var t = 0; t < 12; t++) {
      this.mineralTiles[t] = new Image();
      this.mineralTiles[t].src = "./img/Minerals/" + (t+1) + ".png" ;
    }
    this.playerGfx[0] = new Image();
    this.playerGfx[0].src = "./img/side.png";
    this.playerGfx[1] = new Image();
    this.playerGfx[1].src = "./img/top.png";
  }

  // Player draw
  // =============================================================================
  draw(props) {
    this.playerImage(props);

    this.ctx.drawImage(
      this.playerImg.img,
      this.playerImg.xPos, 	                             // x positie afb
      this.playerImg.yPos,                               // y positie afb
      35,  	                         // grote van x breedte
      35, 	                          // grote van y in hoogte
      (props.x * this.scale), 		     // x as plaatsing
      (props.y * this.scale), 		              // y as plaatsing
      this.scale,  	                            // grote afbeelding
      this.scale,     	                      // grote afbeelidng
    );
  }
  // welke afb voor speler
  playerImage(pProps){
    if(pProps.richting === 1){
      this.playerImg = {
        img: this.playerGfx[0],
        xPos: 0,
        yPos: 35,
      };
    }
    if(pProps.richting === 2){
      this.playerImg = {
        img: this.playerGfx[1],
        xPos: 0,
        yPos: 37,
      };
    }
    if(pProps.richting === 3){
      this.playerImg = {
        img: this.playerGfx[0],
        xPos: 0,
        yPos: 0,
      };
    }
    if(pProps.richting === 4){
      this.playerImg = {
        img: this.playerGfx[1],
        xPos: 0,
        yPos: 0,
      };
    }
  }

  // Draw the "fog"
  // =============================================================================
  /* tutorial gevolgd om de tiles te tekenen

    heb wel veel van de code gewijzigd aangezien het in een oudere taal staat en beetje onhandig voor mij zelf
    heb

    http://www.creativebloq.com/html5/build-tile-based-html5-game-31410992

    orginele code

      MapRenderer.draw and MapRenderer.drawTile
      draw: function(){
      var self = this;
      this.context.clearRect(0, 0, this.w, this.h);
      this.context.fillStyle = "rgba(255,0,0,0.6)";
      _(this.map).each(function(row,i){
        _(row).each(function(tile,j){
          if(tile !== 0){ //if tile is not walkable
            self.drawTile(j,i); //draw a rectangle at j,i
          }
        });
      });

        drawTile: function(x,y){
        this.context.fillRect(
          x * this.tileSize, y * this.tileSize,
          this.tileSize, this.tileSize
        );
      }
   */ // tutorial gevolgd voor de tiles te tekenen
  drawHiddenMap(mapLayout){
    mapLayout.hidden.forEach( (row, i) => {
      row.forEach((tile, j) => {
        if(tile === 1){
          this.drawTileHide(j,i);
        }
      })
    })
  }

  drawTileHide(x, y){
    this.ctx.fillStyle = "black";
    this.ctx.fillRect((x * this.scale), (y * this.scale), this.scale, this.scale);
  }

  // Draw the tiles of the map
  // =============================================================================

  /* tutorial gevolgd om de tiles te tekenen

   heb wel veel van de code gewijzigd aangezien het in een oudere taal staat en beetje onhandig voor mij zelf
   heb

   http://www.creativebloq.com/html5/build-tile-based-html5-game-31410992

   orginele code

   MapRenderer.draw and MapRenderer.drawTile
   draw: function(){
   var self = this;
   this.context.clearRect(0, 0, this.w, this.h);
   this.context.fillStyle = "rgba(255,0,0,0.6)";
   _(this.map).each(function(row,i){
   _(row).each(function(tile,j){
   if(tile !== 0){ //if tile is not walkable
   self.drawTile(j,i); //draw a rectangle at j,i
   }
   });
   });

   drawTile: function(x,y){
   this.context.fillRect(
   x * this.tileSize, y * this.tileSize,
   this.tileSize, this.tileSize
   );
   }
   */ // tutorial gevolgd voor de tiles te tekenen
  drawMap(mapLayout){
    mapLayout.map.forEach( (row, i) => {
      row.forEach((tile, j) => {
        this.drawTile(j,i, tile);
      })
    })
  }

  drawTile(x, y, tile){
    this.whatImage(tile); // bepaald welke afbeelding gebruikt gaat worden
    this.ctx.globalAlpha = this.alpha;
    this.ctx.drawImage(
      this.image,
      0, 	                // x positie afb
      0,                  // y positie afb
      256,  	            // grote van x breedte
      256, 	              // grote van y in hoogte
      (x * this.scale), 	// x as plaatsing
      (y * this.scale), 	// y as plaatsing
      this.scale,  	      // grote afbeelding
      this.scale,     	  // grote afbeelidng
    );
  }

  whatImage(tile) {
    //aan de hand van welk nummer de tile heeft krijgt het een bepaalde sprite om deze te bepalen.
    // staan ze hier beschreven

    this.alpha = 1;

    // borders
    if(tile === 9){
      this.image = this.mineralTiles[7];
    }
    // dirt
    if(tile === 1) {
      this.image = this.mineralTiles[8];
    }

    // minerals
    if(tile === 2){
      this.image = this.mineralTiles[0];
    }
    if(tile === 3){
      this.image = this.mineralTiles[1];
    }
    if(tile === 4){
      this.image = this.mineralTiles[2];
    }
    if(tile === 4){
      this.image = this.mineralTiles[3];
    }
    if(tile === 5){
      this.image = this.mineralTiles[4];
    }
    if(tile === 6){
      this.image = this.mineralTiles[5];
    }

    if(tile === 0){
      this.image = this.mineralTiles[8];
      this.alpha = 0.5;
    }
  }

  // level data canvas
  // =============================================================================
  playerScore(props){
    this.drawText("15px helvetica", ("Blocks: " + props.blocks), 0, 65);
    this.drawText("20px helvetica", props.name, 0, 50);
  }

  // zet de opdracht op het scherm. welke mineralen nodig zijn om te halen
  assignment(playerScore, opdrScore){
   if(opdrScore.level < opdrScore.maxLevel){
    this.drawAssignment(playerScore, opdrScore);
   }
   if(opdrScore.level === opdrScore.maxLevel && opdrScore.highsLoad){
     console.log(opdrScore.highscore);
    this.complete(opdrScore);
   }
  }

  complete(data){
    this.drawText("17px helvetica", "Completed the game", (this.scale + 5), 195);
    let yPos = 210;
    for(var i = 0; i < 5; i++){
      this.drawText("17px helvetica", (data.highscore[i].name + " / " + data.highscore[i].blocks), 0, yPos);
      yPos += 15;
    }
  }

  //stuurd de benodigde data door naar de functie om de odpracht uit te tekennen/schrijven
  drawAssignment(playerScore, opdrScore){
    this.drawText("20px helvetica", "Opdracht", 0, 150);
    this.drawText("17px helvetica", (playerScore.coal + " / " + opdrScore.levelData.coal), (this.scale + 5), 195);
    this.tileOpdracht(0, 170, 2);
    this.drawText("17px helvetica", (playerScore.bronze + " / " + opdrScore.levelData.bronze), (this.scale + 5), 230);
    this.tileOpdracht(0, 205, 3);
    this.drawText("17px helvetica", (playerScore.zilver + " / " + opdrScore.levelData.zilver), (this.scale + 5), 265);
    this.tileOpdracht(0, 240, 4);
    this.drawText("17px helvetica", (playerScore.goud + " / " + opdrScore.levelData.goud), (this.scale + 5), 300);
    this.tileOpdracht(0, 275, 5);
  }

  //tekend de text
  drawText(size, text, xPos, yPos){
    this.ctxData.font = size;
    this.ctxData.fillText(text,xPos,yPos);
  }

  //tekend de mineralen op de opdrachten veld.
  tileOpdracht(x, y, tile){
    this.whatImage(tile); // bepaald welke afbeelding gebruikt gaat worden
    this.ctxData.drawImage(
      this.image,
      0, 	                // x positie afb
      0,                  // y positie afb
      256,  	            // grote van x breedte
      256, 	              // grote van y in hoogte
      x, 	// x as plaatsing
      y, 	// y as plaatsing
      this.scale,  	      // grote afbeelding
      this.scale,     	  // grote afbeelidng
    );
  }

}

module.exports = Canvas;
