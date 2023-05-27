let counterBox=document.querySelector("#counter");
let addBox=document.querySelector("#add");
let subBox=document.querySelector("#sub");
let resetBox=document.querySelector("#reset");

addBox.addEventListener('click',function(){
        counterBox.innerText++;
});

subBox.addEventListener('click',function(){
        counterBox.innerText--;
});

resetBox.addEventListener('click',function(){
        counterBox.innerText=0;
});