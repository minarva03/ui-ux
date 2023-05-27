let clickBtn = document.getElementById('click');
let clickBtn2 = document.getElementById('btndiv2')
let titleBar =document.getElementById('titlediv')
let candleImg=document.getElementById('candle');
let candle2Img=document.getElementById('candle2')
let fireImg=document.getElementById('fire')
let fire2Img=document.getElementById('fire2')
let ballonImg = document.getElementById('ballon')
let ballon2Img = document.getElementById('ballon2')



let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
let img5 = document.getElementById('img5')
let img6 = document.getElementById('img6')
let cakeImg=document.getElementById('cake')

$('#blast').css('display','none')
$('#blast2').css('display','none')

// audio..
 let lSound= document.getElementById('lsound')
 let fSound= document.getElementById('fsound')
 let bSound= document.getElementById('bsound')

titleBar.style.display='none';
cakeImg.style.display='none';
candleImg.style.display='none';
candle2Img.style.display='none';
fireImg.style.display='none';
fire2Img.style.display='none';
ballonImg.style.display='none';
ballon2Img.style.display='none';
clickBtn2.style.display='none';

clickBtn.addEventListener('click',function(){
   lSound.style.display='none'
   fSound.style.display='none'
setTimeout(() => {
   img1.setAttribute('src','images/bulb-3 - Copy (2).png')
  setTimeout(() => {
   lSound.play()
  }, 500);
}, 500);

setTimeout(() => {
    img2.setAttribute('src','images/bulb-3 - Copy (2).png')
   
 }, 1000);

 setTimeout(() => {
    img3.setAttribute('src','images/bulb-3 - Copy (2).png')
   setTimeout(() => {
      
   }, 500);
 }, 1500);

 setTimeout(() => {
    img4.setAttribute('src','images/bulb-3 - Copy (2).png')
 }, 2000);

 setTimeout(() => {
    img5.setAttribute('src','images/bulb-3 - Copy (2).png')
  
 }, 2500);

 setTimeout(() => {
    img6.setAttribute('src','images/bulb-3 - Copy (2).png')
 }, 3000);

 setTimeout(() => {
 img1.classList.add('onbulbclass');
 img2.classList.add('onbulbclass');
 img3.classList.add('onbulbclass');
 img4.classList.add('onbulbclass');
 img5.classList.add('onbulbclass');
 img6.classList.add('onbulbclass');
 }, 4000);

 setTimeout(() => {
     img1.style.display='none';
     img2.style.display='none';
     img3.style.display='none';
     img4.style.display='none';
     img4.style.display='none';
     img5.style.display='none';
     img6.style.display='none';
 }, 5010);
// setTimeout(() => {
//     document.querySelector('body').classList.add('bodyclass');
   
// }, 6000);
setTimeout(() => {
    titleBar.style.display='block'
}, 6001);
setTimeout(() => {
   cakeImg.style.display='block'
   candleImg.style.display='block'
   candle2Img.style.display='block'
}, 6500);

 clickBtn2.style.display='block'

})

clickBtn2.addEventListener('click',function () {
 alert('If only everyone had an amazing sister like you! The world would be a much better place. Happy birthday  Minarva....! ')
 cakeImg.setAttribute('src','images/last.gif')
   candle2Img.style.display='none'
   candleImg.style.display='none'
   fire2Img.style.display='none'
   fireImg.style.display='none'
})

candleImg.addEventListener('click' , function () {
   fireImg.style.display='block';
   ballonImg.style.display='block';
  fSound.play();

})
candle2Img.addEventListener('click' , function () {
   fire2Img.style.display='block';
   ballon2Img.style.display='block';
   fSound.play();
})
ballonImg.addEventListener('click',function () {
   ballonImg.style.display='none'
   $('#blast').fadeIn(1000);
   $('#blast').fadeOut(3000);
   bSound.play()
})
ballon2Img.addEventListener('click',function () {
   ballon2Img.style.display='none'
   $('#blast2').slideDown(1000);
   $('#blast2').fadeOut(2000);
   bSound.play()
})



