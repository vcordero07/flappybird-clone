  var cvs = document.getElementById("canvas");
  var ctx = cvs.getContext("2d");


  // load images

  var bird = new Image();
  var bg = new Image();
  var fg = new Image();
  var pipeNorth = new Image();
  var pipeSouth = new Image();

  bird.src = "images/bird.png";
  bg.src = "images/bg.png";
  fg.src = "images/fg.png";
  pipeNorth.src = "images/pipeNorth.png";
  pipeSouth.src = "images/pipeSouth.png";

  //variables
  var gap = 85;
  var constant = pipeNorth.height+gap;
  var bX = 10;
  var bY = 150;
  var gravity = 1;



  //draw images
  function draw(){
    ctx.drawImage(bg,0,0);

    ctx.drawImage(pipeNorth,100,0);
    ctx.drawImage(pipeSouth,100,0+constant);

    ctx.drawImage(fg, 0, cvs.height - fg.height);

    ctx.drawImage(bird, bX, bY);

    bY += gravity;

    requestAnimationFrame(draw);
  }

  draw();
