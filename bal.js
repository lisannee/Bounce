class Bal {
    x;
    y;
    speedX;
    speedY;
  
    constructor(_x, _y) {
      this.x = _x;
      this.y = _y;
      this.speedX = 3;
      this.speedY = -4;
    }
  
    // update de positie van de bal en klapt bij
    // de kant de snelheid om
    update() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
  
      if (this.x <=40 || this.x >= 1240) {
        this.speedX = this.speedX * -1;
      }
      if (this.y <=40 || this.y >= 680) {
        this.speedY = this.speedY * -1;
      }
    }
  
    // toont de bal
    show() {
      fill(0, 0, 0);
      ellipse(this.x, this.y, 50, 50);
    }
}