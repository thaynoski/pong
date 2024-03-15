
let x = 300;
let y = 200;
tamanhodabolinha = 40;
let v = 1;

let raio = tamanhodabolinha / 2;

function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);

    circle(x,y,tamanhodabolinha);

  x += v;

  if(x + raio > width || x - raio < 0 ){
       
     v *= -1;

    

     }
  

 }
     