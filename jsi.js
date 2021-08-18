function preLoad(){

};

function setup(){
can = createCanvas(640,480);
can.position(110,250);
Webcan=createCapture(VIDEO);
};
var simplify = "";
function draw(){
image(Webcan,110,250,1640,480);
circles();
rectangles();
};
function take_snapshot(){
save('null.png');
};


function circles(){
fill(0,255,255);
circle(0,0,50);
fill(0,255,255);
circle(590,0,50);
fill(0,255,255);
circle(0,430,50);
fill(0,255,255);
circle(590,430,50);
};

function rectangles(){
fill(255,0,255);
rectangle(50,50,200,50);
fill(255,0,255);
rectangle(250,250,200,50);
fill(255,0,255);
rectangle(250,250,50,200);
};