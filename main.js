const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function() {
    mousex = event.clientX;
    mousey = event.clientY;
  });

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
 //function for creating the coordinates of the ball
function Ball (x,y,velX,velY, color, size){
    this.x=x;
    this.y=y;
    this.velX=velX;
    this.velY=velY;
    this.color=color;
    this.size=size;
    
    
}
Ball.prototype.draw=function(){
    ctx.beginPath();//begin drawing
    ctx.fillStyle= this.color; //fillthe space with this color
    ctx.arc(this.x,this.y,this.size, 0, 2* Math.PI); //this is the shape to draw
    ctx.fill(); // finish the drawing
}


Ball.prototype.update=function(){
    if((this.x+this.size)>=width){
     this.velX= -(this.velX);
    }
     if((this.x - this.size) <=0){
     this.velX= -(this.velX);
     }
     if((this.y+this.size)>=height){
     this.velY= -(this.velY);
     }
     if((this.y-this.size)<=0){
     this.velY= -(this.velY);
     }

     this.x+=this.velX;
     this.y+=this.velY;
}
//collision detection
// Ball.prototype.collisionDetection= function(){
//     for (j=0; j < balls.length; j++)
//     if (!(this===balls[j])){
//         const dx= this.x-balls[j].x;
//         const dy= this.y-balls[j].y;
//         const distance= Math.sqrt(dx*dx +dy*dy);

//         if (distance < this.size + balls[j].size){
//             balls[j].color = this.color = 'rgb(' + random(0,255)
//         ','+ random(0,225)+ ',' + random(0,225) + ',' + random (0,225)}
        
//     }

// }
let balls = [];
while (balls.length < 25){
let size= random(10,20);
this.startsize=size;
let ball=new Ball( 
random(0+size, width-size), 
random(0+size, height-size),
random(-6, 6),
random(-6, 6),
'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
 size
 );

balls.push(ball);
}

function loop (){
ctx.fillStyle= 'rgba(0,0,0,0.25)';
ctx.fillRect(0,0,width,height);

for (let i=0; i<balls.length; i++){
balls[i].draw();
balls[i].update();
}
requestAnimationFrame(loop);
if(mousex > balls[i].x - 20 && 
    mousex < balls[i].x + 20 &&
    mousey > ballls[i].y -50 &&
    mousey < balls[i].y +50 &&
    balls[i].size < 70){
      //bal[i].x += +1;
      balls[i].size +=5; 
    } else {
      if(balls[i].size > bal[i].startsize){
        balls[i].size += -5;
      }
    }
}

loop();