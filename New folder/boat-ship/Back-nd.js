let light=document.getElementById('light');
let start=document.getElementById('start');
let stop = document.getElementById('stop');

let lon =document.getElementById('lon');
let lofx =document.getElementById('loff');
let lightx = document.getElementById('light');
let backimg = document.getElementById('backimg');
let rivimg = document.getElementById('rivimg');
let bote = document.getElementById('bote');

let para = document.getElementById('para');
let para2 = document.getElementById('para2')


// light switch
lightx.style.display='none'
lon.addEventListener('click',function(){
light.style.display='block';
para2.innerText='on';
para2.style.color='yellow'
})
lofx.addEventListener('click',function(){
    light.style.display='none';
    para2.innerText='off';
    para2.style.color='red';
 })

 // Engine Switch..

start.addEventListener('click',function(){
   bote.classList.add('botex');
   backimg.classList.add('backimgx');
   rivimg.classList.add('rivimgx')
   para.innerText='Start';
   para.style.color='yellow';
 
})

stop.addEventListener('click',function(){

    bote.classList.remove('botex');
    backimg.classList.remove('backimgx');
    rivimg.classList.remove('rivimgx')
    para.innerText='Stop';
    para.style.color='red';
 })


