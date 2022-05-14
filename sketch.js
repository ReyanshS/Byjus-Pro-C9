var box;
function setup() {
  createCanvas(1275,580);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = "yellow";
}

function draw() 
{
  background(30);
  if(keyDown("w") || keyDown("up_arrow")){
    box.y -= 2;
  }
  if(keyDown("s") || keyDown("down_arrow")){
    box.y += 2;
  }
  if(keyDown("a") || keyDown("left_arrow")){
    box.x -= 2;
  }
  if(keyDown("d") || keyDown("right_arrow")){
    box.x += 2;
  }
  drawSprites();
}




