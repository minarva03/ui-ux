let fanBtnOn=document.getElementById('fanBtnon');
let fanBtnof=document.getElementById('fanBtnof');
let bulbOn=document.getElementById('bulbon');
let bulbOf=document.getElementById('bulbof')


let fanImg=document.getElementById('fan-img');
let bulb=document.getElementById('bulb');


let para1=document.getElementById('para-1')
let para2=document.getElementById('para-2')

let ware1=document.getElementById('ware-1')
let ware2=document.getElementById('ware-2')
let ware3=document.getElementById('ware-3')
let ware4=document.getElementById('ware-4')
fanBtnOn.addEventListener('click',function(){
  let fanImg = document.getElementById('fan-img');
  fanImg.classList.add('fan-animate')
  ware1.classList.add('prositive')
  ware3.classList.add('prositive')
  para1.innerText="Fan-on";
  para1.style.color="green";

   })

fanBtnof.addEventListener('click',function(){
let fanImg = document.getElementById('fan-img');
fanImg.classList.remove('fan-animate');
ware1.classList.remove('prositive')
ware3.classList.remove('prositive')
para1.innerText="Fan-off";
para1.style.color="red";

   })

bulbOn.addEventListener('click',function(){
bulb.setAttribute('src','images/bulb-3 - Copy (2).png')
para2.innerText="Bulb-on";
para2.style.color="green";
ware2.classList.add('prositive')
ware4.classList.add('prositive')
})

bulbOf.addEventListener('click',function(){
   bulb.setAttribute('src','images/bulb-3 - Copy.png')
   para2.innerText="Bulb-off";
para2.style.color="red";
   ware2.classList.remove('prositive')
     ware4.classList.remove('prositive')
})
