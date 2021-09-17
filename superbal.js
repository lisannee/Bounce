class Superbal extends Bal{
 
  
    // toont de bal
    show() {
      fill(random(0, 255), random(0, 255), random(0, 255));
      ellipse(this.x, this.y, 50, 50);
    }
}