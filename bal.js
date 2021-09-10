class bal {
    x;
    y;
    speedX;
    speedY;
    kleur;
}

constructor(_x, _y){
    this.x = _x;
    this.y = _y;
    this.speedX = 2;
    this.speedY = -3;
    this.kleur = color(0,0,0);
}

show(){
    Fill(this.kleur);
    ellipse(this.x, this.y, 80, 80);
}

update(){
    if(this.x <= 0){
        thids.speedX = this.speedX * -1;
    }
    if(this.y <= 0){
        thids.speedY = this.speedY * -1;
    }
}