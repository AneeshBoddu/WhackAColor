let sqs = [".square1", ".square2", ".square3",".square4",".square5",".square6",".square7", ".square8"];
let colors = ["blue","red","yellow","green","purple","pink", "orange", "magenta"];
let rand = 0;
let dec = 0.02;
let bool = true;
let startBool = true;
let time = 0;
let arr = [];

//Event Listener Code inspired by Scott DeRuiter
//Used for receiving click input from squares
var square1 = document.querySelector(".square1");
square1.addEventListener("click", check1);
var square2 = document.querySelector(".square2");
square2.addEventListener("click", check2);
var square3 = document.querySelector(".square3");
square3.addEventListener("click", check3);
var square4 = document.querySelector(".square4");
square4.addEventListener("click", check4);
var square5 = document.querySelector(".square5");
square5.addEventListener("click", check5);
var square6 = document.querySelector(".square6");
square6.addEventListener("click", check6);
var square7 = document.querySelector(".square7");
square7.addEventListener("click", check7);
var square8 = document.querySelector(".square8");
square8.addEventListener("click", check8);

window.localStorage.setItem("number",0); 
function start()
{
  if(startBool==true)
  {
    setInterval(countDown, 85);
    clickSquare();
    window.localStorage.setItem("number",0); 
    var button = document.querySelector(".change");
    button.style.backgroundColor = "purple";
    button.style.color = "purple";
    button.style.border = "purple";
    startBool = false;
  }
}

function countDown()
{
  bool = true;
  let phr = "";
  dec-=0.001;
  time = dec*100;
  time = time.toFixed(1);
  phr = time;
  if(dec <= 0){  
    bool = false;
    phr = "0";  
    time-=0.1;
    scoreInc();
    change("end.html");
  }
  let countDownTimer = "Time Left: "+(phr);
  document.getElementById("counters").innerHTML = countDownTimer;
}

function clickSquare()
{
  rand = Math.floor(Math.random()*8);
  let num = rand;
  let squares;
  for(let i=0;i < colors.length; i++)
  {
    squares = document.querySelector(sqs[i]);
    squares.style.backgroundColor = colors[rand];
  }
  rand = Math.floor(Math.random()*8);
  if(num==rand)
  {
    while(num==rand)
    {
      rand = Math.floor(Math.random()*8);
    }
  }
  squares = document.querySelector(sqs[rand]);
  squares.style.backgroundColor = colors[rand];
}

function check1()
{
  var square = document.querySelector(".square1");
  if(rand==0 && startBool==false)
  {
    scoreInc();
    setTimeout(clickSquare(),2000);
    window.localStorage.setItem("backT",time);
    let x1 = (2-window.localStorage.getItem("backT")).toFixed(1);
    arr.push(x1); 
   
    let min = arr[0];
    for(let i=0;i<arr.length;i++)
      min = Math.min(min,arr[i]);
    window.localStorage.setItem("backT",min); 
  }
  else
    square.style.backgroundColor = "black";
}
function check2()
{
  var square = document.querySelector(".square2");
  if(rand==1 && startBool==false)
  {
    scoreInc();
    setTimeout(clickSquare(),2000);
    window.localStorage.setItem("backT",time);
    let x1 = (2-window.localStorage.getItem("backT")).toFixed(1);
    arr.push(x1);
    let min = arr[0];
    for(let i=0;i<arr.length;i++)
      min = Math.min(min,arr[i]);
    window.localStorage.setItem("backT",min); 
  }
  else
    square.style.backgroundColor = "black";
}
function check3()
{
  var square = document.querySelector(".square3");
  if(rand==2 && startBool==false)
  {
    scoreInc();
    setTimeout(clickSquare(),2000);
    window.localStorage.setItem("backT",time);
    let x1 = (2-window.localStorage.getItem("backT")).toFixed(1);
    arr.push(x1);
    
    let min = arr[0];
    for(let i=0;i<arr.length;i++)
      min = Math.min(min,arr[i]);
    window.localStorage.setItem("backT",min); 
  }
  else
    square.style.backgroundColor = "black";
}
function check4()
{
  var square = document.querySelector(".square4");
  if(rand==3 && startBool==false)
  {
    scoreInc();
    setTimeout(clickSquare(),2000);
    window.localStorage.setItem("backT",time);
    let x1 = (2-window.localStorage.getItem("backT")).toFixed(1);
    arr.push(x1);
    
    let min = arr[0];
    for(let i=0;i<arr.length;i++)
      min = Math.min(min,arr[i]);
    window.localStorage.setItem("backT",min); 
  }
  else
    square.style.backgroundColor = "black";
}
function check5()
{
  var square = document.querySelector(".square5");
  if(rand==4 && startBool==false)
  {
    scoreInc();
    setTimeout(clickSquare(),2000);
    window.localStorage.setItem("backT",time);
    let x1 = (2-window.localStorage.getItem("backT")).toFixed(1);
    arr.push(x1);
    
    let min = arr[0];
    for(let i=0;i<arr.length;i++)
      min = Math.min(min,arr[i]);
    window.localStorage.setItem("backT",min); 
  }
  else
    square.style.backgroundColor = "black";
}
function check6()
{
  var square = document.querySelector(".square6");
  if(rand==5 && startBool==false)
  {
    scoreInc();
    setTimeout(clickSquare(),2000);
    window.localStorage.setItem("backT",time);
    let x1 = (2-window.localStorage.getItem("backT")).toFixed(1);
    arr.push(x1);
    
    let min = arr[0];
    for(let i=0;i<arr.length;i++)
      min = Math.min(min,arr[i]);
    window.localStorage.setItem("backT",min); 
  }
  else
    square.style.backgroundColor = "black";
}
function check7()
{
  var square = document.querySelector(".square7");
  if(rand==6 && startBool==false)
  {
    scoreInc();
    setTimeout(clickSquare(),2000);
    window.localStorage.setItem("backT",time);
    let x1 = (2-window.localStorage.getItem("backT")).toFixed(1);
    window.localStorage.setItem("backT",x1);
    arr.push(x1);
    
    let min = arr[0];
    for(let i=0;i<arr.length;i++)
      min = Math.min(min,arr[i]);
    window.localStorage.setItem("backT",min); 
  }
  else
    square.style.backgroundColor = "black";
}
function check8()
{
  var square = document.querySelector(".square8");
  if(rand==7 && startBool==false)
  {
    scoreInc();
    setTimeout(clickSquare(),2000);
    window.localStorage.setItem("backT",time);
    let x1 = (2-window.localStorage.getItem("backT")).toFixed(1);
    arr.push(x1);
    
    let min = arr[0];
    for(let i=0;i<arr.length;i++)
      min = Math.min(min,arr[i]);
    window.localStorage.setItem("backT",min); 
  }
  else
    square.style.backgroundColor = "black";
}

function scoreInc()
{
  if(window.localStorage.getItem("number")==null)
    window.localStorage.setItem("number",0);
  let output = window.localStorage.getItem("number");
  dec=0.02;
  if(bool)
    output++;
  window.localStorage.setItem("number",output);
  let str = "Score: "+ window.localStorage.getItem("number");
  document.getElementById("score").innerHTML = str;
}

function change(nextPage)
{
  window.location.href = nextPage;
  location.replace(nextPage); 
}

function showScore()
{
  let ki = "Final Score: "+window.localStorage.getItem("number") +"<br> Fastest Time: " + window.localStorage.getItem("backT");
  document.getElementById("fin").innerHTML = ki;  
}