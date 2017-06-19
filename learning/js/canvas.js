// window.onload = function(){
//     //canvas init
//     var canvas = document.querySelector(".stars");
//     var ctx = canvas.getContext("2d");
//     //canvas dimensions
//     var W = window.innerWidth;
//     var H = window.innerHeight;
//     canvas.width = W;
//     canvas.height = H;
//
//     //snowflake particles
//     var mp = 900; //max particles
//     var particles = [];
//     for(var i = 0; i < mp; i++)
//     {
//         particles.push({
//             x: Math.random()*W, //x-coordinate
//             y: Math.random()*H, //y-coordinate   ZMINA H -> -H
//             r: Math.random()*1.5+1, //radius
//             d: Math.random()*mp //density
//         })
//
//     }
//     console.log('6');
//     //Lets draw the flakes
//     function draw()
//     {
//         ctx.clearRect(0, 0, W, H);
//
//         ctx.fillStyle = "rgba(194, 212, 255, 0.8)";
//         ctx.beginPath();
//         for(var i = 0; i < mp; i++)
//         {
//             var p = particles[i];
//             ctx.moveTo(p.y, p.x);
//             ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true) // ZMINA p.y -> -p.y
//         }
//         ctx.fill();
//         update();
//     }
//
//     //Function to move the snowflakes
//     //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
//     var angle = 0;
//     function update()
//     {
//         angle += 0;
//         for(var i = 0; i < mp; i++)
//         {
//             var p = particles[i];
//             //Updating X and Y coordinates
//             //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
//             //Every particle has its own density which can be used to make the downward movement different for each flake
//             //Lets make it more random by adding in the radius
//             var speed = 0.1;
//             p.y += Math.cos(angle+p.d) + speed + p.r/2;
//             p.x += Math.sin(angle) * 2;
//
//             //Sending flakes back from the top when it exits
//             //Lets make it a bit more organic and let flakes enter from the left and right also.
//             if(p.x > W+5 || p.x < -5 || p.y > H)   //  ZMINA p.y'>' -> -p.y '<' , H -> 0
//             {
//
//                 if(i%3 > 0) //66.67% of the flakes
//                 {
//                     particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};   // ZMINA -10 -> -H
//                 }
//                 else
//                 {
//                     //If the flake is exitting from the right
//                     if(Math.sin(angle) > 0)
//                     {
//                         //Enter from the left
//                         particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
//                     }
//                     else
//                     {
//                         //Enter from the right
//                         particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
//                     }
//                 }
//             }
//         }
//     }
//
//     //animation loop
//     setInterval(draw, 33);
// }
window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();
var canvas = document.querySelector(".stars");
var c = canvas.getContext("2d");
var numStars = 1900;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;
var correction = 2;    //MINE!
if (window.innerWidth < 1280) correction = 4;
var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame(){

    if(animate)
        requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
}

function initializeStars(){
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    stars = [];
    for(i = 0; i < numStars; i++){
        star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.'+Math.floor(Math.random() * 99) +1
        };
        stars.push(star);
    }
}

function moveStars(){
    for(i = 0; i < numStars; i++){
        star = stars[i];
        star.z--;  // - SPEED

        if(star.z <= 0){
            star.z = Math.random() * canvas.width;
        }
    }
}

function drawStars(){
    var pixelX, pixelY, pixelRadius;

    // Resize to the screen
    if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
        if(window.innerWidth < 1280) correction = 4;
        if(window.innerWidth > 1280) correction = 2
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
    }
    if(warp==0)
    {c.fillStyle = "rgba(30,30,30,1)";
        c.fillRect(0,0, canvas.width, canvas.height);}
    c.fillStyle = "rgba(255, 255, 255, "+radius+")";
    for(i = 0; i < numStars; i++){
        star = stars[i];

        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 1 * (focalLength / star.z/correction);

        //c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        c.beginPath();
        c.arc(pixelX, pixelY, pixelRadius, 0, Math.PI*2, true)// STARS!
        c.fillStyle = "rgba(255, 255, 255, "+star.o+")";
        c.fill();
    }

}

// document.getElementById('warp').addEventListener("click",function(e){
//     window.warp = window.warp==1 ? 0 : 1;
//     window.c.clearRect(0, 0, window.canvas.width, window.canvas.height);
//     executeFrame();
// });

executeFrame();