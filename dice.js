let player1=Math.floor(Math.random()*6)+1;
let player2=Math.floor(Math.random()*6)+1;

let images="images/dice"+player1+".png";
let images2="images/dice"+player2+".png";

document.querySelectorAll("img")[0].setAttribute("src",images);
document.querySelectorAll("img")[1].setAttribute("src",images2);

if(player1>player2){
    document.querySelector("h1").innerHTML=("player1 is a winner😎🎉 ");
}
else{
    document.querySelector("h1").innerHTML=("player2 is a winner😎🎉 ");
}

