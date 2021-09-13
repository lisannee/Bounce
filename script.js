var ballen = [];


/*
var x = 50;
var y = 50;
var speedx = 10;
var speedy = 10;

bal = new


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
/*
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
/*
function draw() {
  background('blue');
  // stel vulkleur in
  fill(100, 100, 255);
  

  // teken een cirkel
  ellipse(x,y,80,80);
  ellipse(x,y,80,80);
  ellipse(x,y,80,80);
  ellipse(x,y,80,80);
  ellipse(x,y,80,80);
  x = x + speedx;
  y = y + speedy;

  if(y == 680) {
    speedy = speedy * -1;
  }

  if(y == 40) {
    speedy = speedy * -1;
  }

  if(x == 1240) {
    speedx = speedx * -1;
  }

  if(x == 40) {
    speedx = speedx * -1;
  }
} 

// globale variabelen
var bal = new Bal(50, 100);

var ballen = (new Bal(50,100), new Bal(40,200), new Bal(100,30));

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  for(var i = 0; i < 25; i++){
    var randomx = random(50, 1230);
    var randomy = random(50, 670);
    var randmspeedX = random (-5, 5);
    var randmspeedY = random (-5, 5);

     var bal = new Bal(randomx, randomy, randmspeedX, randmspeedY);

     ballen.push(bal);
  }

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  for (var i = 0; i < ballen.length; i++){
    ballen[i].show();
    ballen[i].update();
  }
 
}