let copy1=document.querySelector("#loca");
copy1.value=document.URL;
function copy(){
  copy1.select();
    document.execCommand('copy');
}
// let btn=document.querySelector("#btns");
// let new1=document.querySelector("#new");

// btn.addEventListener("click",function(){

// copy.select();
// let url=document.execCommand("copy");


// });
//------------------------------------------
// let url=document.querySelector("#loca").innerHTML=window.location.href;
// let copy=document.querySelector("#copy");
// var $temp = $("<input>");
// var $url = $(location).attr('href');

// $('#clipboard').on('click', function() {
//   $("body").append($temp);
//   $temp.val($url).select();
//   document.execCommand("copy");

//   $temp.remove();
  
// })
//--------------------------------------------------
// function copy(){
//    // let copy1=document.querySelector("#loca").innerHTML=window.location.href;
//     copy.select();
//     document.execCommand('copy');
//     //btn.value=copy1;
// }
// document.querySelector("#btns").addEventListener("click",copy);
