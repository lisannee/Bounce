class numberbal extends Bal {
    
    constructor(_x, _y) {
        super(_x,_y, _speedX, _speedY, _nummer)
        this.number = _nummer;
      } 

    
    show() {
        
        ellipse(this.x, this.y, 50, 50);
      }
    }