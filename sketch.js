var car;
var wall;
var speed;
var weight;
var inwall;

function setup() {
  createCanvas(800, 400);
  speed = (55, 90);
  weight = (400, 1500);

  car = createSprite(width - 750, height - 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;

  inwall = createSprite(width - 120, height - 200, 10, height / 2);
  wall = createSprite(width - 100, height - 200, 100, height / 2);


}

function draw() {
  background(0);


  car.collide(inwall);


  if (wall.x - car.x < wall.width / 2 + car.width / 2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    if (car.deformation < 180 && car.deformation > 80) {
      car.shapeColor = color(230, 230, 0);
    }
    if (car.deformation < 80) {
      car.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}


