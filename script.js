var images = new Array(4);

    images[0]=new Image(50,50);
    images[0].scr="https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white--Stock-Photo.jpg";
    images[1]=new Image(50,50);
    images[1].src=scr="https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000181/23262905-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background-Stock-Vector.jpg";
    images[2]=new Image(50,50);
    images[2].src=scr="http://moziru.com/images/rock-clipart-rock-paper-scissors-5.jpg";
    images[3]=new Image(50,50);
    images[3].src=scr="https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white--Stock-Photo.jpg";


 image=new Image(50,50);
 image.src=scr="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX8093016.jpg";


var canvasTwo = document.getElementById('myCanvasTwo'),
contextTwo = canvasTwo.getContext('2d');

var canvas = document.getElementById('myCanvas'),
context = canvas.getContext('2d');

contextTwo.drawImage(image, 25, 25, 150, 150);
context.drawImage(image, 25, 25, 150, 150);


function changepicture(){
 var picNum = Math.floor(Math.random() * 3)+1; 
    contextTwo.drawImage(images[picNum], 25, 25, 150, 150);
    console.log(picNum);
    
var Num = Math.floor(Math.random() * 3)+1; 
    context.drawImage(images[Num], 25, 25, 150, 150);
    console.log(Num);
    checkForWinner(picNum, Num);
    
}



var actionBtnTwo= document.getElementById('btn');
actionBtnTwo.addEventListener('click',changepicture,false);

function checkForWinner(num1, num2){
    
    if(num1 === num2){
        document.getElementById("winner").innerHTML = "<h1>It is a tie, Please try again</h1>";
        
    } else if(num1 === 1) {
        if(num2 === 2){
            document.getElementById("winner").innerHTML = "<h1>Rock Wins, Player 2 is the Winner</h1>";
       
        } else if(num2 === 3){
               document.getElementById("winner").innerHTML = "<h1>Scissors Wins, Player 1 is the Winner</h1>";
               
        }
        
                         
     } else if (num1 === 2){
         if (num2 === 1){
             document.getElementById("winner").innerHTML = "<h1>Rock Wins, Player 1 is the Winner</h1>";
         } else if(num2 === 3){
             document.getElementById("winner").innerHTML = "<h1>Paper Wins, Player 2 is the Winner</h1>";
         }
         
     } else if (num1 == 3){
         if(num2 ===1){
             document.getElementById("winner").innerHTML = "<h1>Scissors Wins, Player 2 is the Winner</h1>";
         } else if(num2 === 2){
             document.getElementById("winner").innerHTML = "<h1>Paper Wins, Player 1 is the Winner</h1>";
                   
                   }
     }
    
}
    


