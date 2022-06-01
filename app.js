const firstButton = document.querySelector(".select-enemy");
const startScreen = document.querySelector(".start-screen");
const selectScreen = document.querySelector(".select-screen");
const gameScreen = document.querySelector(".game-screen");
const enemy1 = document.querySelector(".selector1")
const enemy2 = document.querySelector(".selector2")
const enemy3 = document.querySelector(".selector3")
const enemy = document.querySelector(".enemy");
const score = document.querySelector(".score");
const gameTime  = document.querySelector(".time");
const fish = document.querySelector(".fish");
const fish1 = document.querySelector(".fish1");
const fish2 = document.querySelector(".fish2");
const fish3 = document.querySelector(".fish3");



console.log(fish1);

console.log(enemy);

firstButton.addEventListener("click",()=>{
    startScreen.style="margin-top:-100vh;"
})


fish1.addEventListener("click",()=>{
    selectScreen.style="margin-top:-100vh;"
    fish.removeAttribute("src");
    fish.setAttribute("src","https://pngimg.com/uploads/shark/shark_PNG96515.png")
    console.log(enemy);
    timer();
  
})

fish2.addEventListener("click",()=>{
    selectScreen.style="margin-top:-100vh;"
    fish.removeAttribute("src");
    fish.setAttribute("src","https://pngimg.com/uploads/shark/shark_PNG18825.png")
    console.log(enemy);
    timer();
  
})

fish3.addEventListener("click",()=>{
    selectScreen.style="margin-top:-100vh;"
    fish.removeAttribute("src");
    fish.setAttribute("src","https://pngimg.com/uploads/shark/shark_PNG96512.png")
    console.log(enemy);
    timer();
  
})



let i =  1;
enemy.addEventListener("click",()=>{

    randomNumber1 = Math.ceil(Math.random()*90); 
    randomNumber2 = Math.ceil(Math.random()*90);  
    randomRotate = Math.ceil(Math.random()*45)  
    enemy.style=`left: ${randomNumber1}%; top: ${randomNumber2}%; transform:rotate(${randomRotate}deg);`
    score.innerText = `Score : ${i++}`

})

function timer (){
   var sec = 0
   timer = setInterval(()=>{
       gameTime.innerHTML = `Zaman : ${sec}`;
       sec ++;
   },1000)
}
