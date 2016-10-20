class Canvas {
  constructor(){
    this.c = document.getElementById("myCanvas");
    this.ctx = this.c.getContext("2d");

    this.cHidden = document.getElementById("hideCanvas");
    this.ctxHidden = this.cHidden.getContext("2d");


    this.mineralTiles = [];
    this.playerGfx = [];

    this.scale = 35;

    this.loadImages();
    this.image;
    this.alpha = 1;

  }

  clearRect(){
    this.ctx.clearRect(0,0,this.c.width, this.c.height);
  }

  draw(props) {
    this.ctx.drawImage(
      this.playerGfx[1],
      0, 	                // x positie afb
      0,                  // y positie afb
      480,  	            // grote van x breedte
      480, 	              // grote van y in hoogte
      (props.x * this.scale), 		              // x as plaatsing
      (props.y * this.scale), 		              // y as plaatsing
      this.scale,  	      // grote afbeelding
      this.scale,     	  // grote afbeelidng
    );
  }

  drawMap(mapLayout){
    mapLayout.map.forEach( (row, i) => {
      row.forEach((tile, j) => {
          this.drawTile(j,i, tile);
      })
    })
  }

  drawHiddenMap(mapLayout){
    mapLayout.hidden.forEach( (row, i) => {
      row.forEach((tile, j) => {
        if(tile === 1){
          this.drawTileHide(j,i, tile);
        }
      })
    })
  }

  drawTileHide(x, y, tile){
    this.ctx.fillStyle = "black";
    this.ctx.fillRect((x * this.scale), (y * this.scale), this.scale, this.scale);
  }

  drawTile(x, y, tile){
    this.whatImage(tile);
    this.ctx.globalAlpha = this.alpha;
    this.ctx.drawImage(
      this.image,
      0, 	                // x positie afb
      0,                  // y positie afb
      256,  	            // grote van x breedte
      256, 	              // grote van y in hoogte
      (x * this.scale), 		              // x as plaatsing
      (y * this.scale), 		              // y as plaatsing
      this.scale,  	      // grote afbeelding
      this.scale,     	  // grote afbeelidng
    );
  }

  whatImage(tile) {
    this.alpha = 1;

    // borders
    if(tile === 9){
      this.image = this.mineralTiles[7];
    }
    if(tile === 8){
      this.image = this.mineralTiles[6];
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

  get size(){
    return {
      cWidth: this.c.width,
      cHeight: this.c.height,
    }
  }

  loadImages(){
    for(var t = 0; t < 12; t++) {
      this.mineralTiles[t] = new Image();
      this.mineralTiles[t].src = "../img/minerals/" + (t+1) + ".png" ;
    }
    this.playerGfx[1] = new Image();
    this.playerGfx[1].src = "../img/1.png";
  }
}

module.exports = Canvas;
