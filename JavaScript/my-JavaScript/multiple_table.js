
let input=document.querySelector("#input")
let result=document.querySelector("#result")
let p1=document.querySelector("#p1")
let p2=document.querySelector("#p2")
let p3=document.querySelector("#p3")
let p4=document.querySelector("#p4")
let p5=document.querySelector("#p5")
let p6=document.querySelector("#p6")
let p7=document.querySelector("#p7")
let p8=document.querySelector("#p8")
let p9=document.querySelector("#p9")
let p10=document.querySelector("#p10")

result.style.width="15rem";

// result.style.position="relative";
// result.style.left="30rem";
// result.style.top="-10rem";

input.addEventListener("keyup",function(){
    result.style.padding="2rem";
     result.style.border="3px solid white";
     result.style.boxShadow="0 0 7px black"
     result.style.borderRadius="10px";

 let value=input.value;
 p1.innerText=value+" * 1="+value*1;
 p2.innerText=value+" * 2="+value*2;
 p3.innerText=value+" * 3="+value*3;
 p4.innerText=value+" * 4="+value*4;
 p5.innerText=value+" * 5="+value*5;
 p6.innerText=value+" * 6="+value*6;
 p7.innerText=value+" * 7="+value*7;
 p8.innerText=value+" * 8="+value*8;
 p9.innerText=value+" * 9="+value*9;
 p10.innerText=value+" * 10="+value*10;

})