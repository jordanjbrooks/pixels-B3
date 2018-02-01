var img;
var gradient = 1.5;

function preload(){
    
    img = loadImage("JOJo.jpg");
}

function setup(){
    createCanvas(img.width,img.height);
}



function draw(){
    image(img, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var index = (col + row * width) * 4;
            
            var r = pixels[index];
            var g = pixels[index + 1];
            var b = pixels[index + 2];
            var a = pixels[index + 3];
            
            if(keyIsPressed){
                if(key=="2"){
                    zania_filter(index,r,g,b,a,row,col);
                }
                if(key=="1"){
                    pink_filter(index,r,g,b,a);
                }
                if(key=="3"){
                jojo_filter(index,r,g,b,a,row,col);
                }
                if(key=="4"){
                nugget_filter(index,r,g,b,a,row,col);
                }
                if(key=="5"){
                    love_filter(index,r,g,b,a);
                }
                if(key=="6"){
                    babygirl_filter(index,r,g,b,a,row,col);
                }
                if(key=="7"){
                loveher_filter(index,r,g,b,a,row,col);
                    
                }
            }
            else{
                pixels[index] = r; 
                pixels[index + 1] = g; 
                pixels[index + 2] = b; 
                pixels[index + 3] = a; 
            }
        }
    }
    
    updatePixels();
}

function pink_filter(index,r,g,b,a){
    pixels[index] = r; 
    pixels[index + 1] =random(15,55);
    pixels[index + 2] = r;
    pixels[index + 3] = r;
}

function zania_filter(index,r,g,b,a,row,col){
    pixels[index] = r + row - 190; 
    pixels[index + 1] = g + col -190; 
    pixels[index + 2] = b; 
    pixels[index + 3] = a; 
}

function jojo_filter(index,r,g,b,a,row,col){
    pixels[index] = r*1.50+col*.1; 
    pixels[index + 1] = g; 
    pixels[index + 2] = b+row*.5-100; 
    pixels[index + 3] = a; 
}

function nugget_filter(index,r,g,b,a,row,col){
    pixels[index] = r+row/8;
    pixels[index + 1] = g+col+21/2;
    pixels[index + 2] = b+col-2; 
    pixels[index + 3] = random(1,225);
}

function love_filter(index,r,g,b,a){
    pixels[index]=r-12;
    pixels[index+1]=g+88;
    pixels[index+2]=b+99;
    pixels[index+3]=a;
}
 
 function babygirl_filter(index,r,g,b,a,row,col){
pixels[index]=r-col;
    pixels[index+1]=55+row;
    pixels[index+2]=b+99;
    pixels[index+3]=a+23;
} 

function loveher_filter(index,r,g,b,a,row,col){
    pixels[index]=r+col;
    pixels[index+1]=34+row;
    pixels[index+2]=180;
    pixels[index+3]=234;
}