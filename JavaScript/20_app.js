let textareaBox=document.querySelector("#textarea");
let charBox=document.querySelector("#char");

textareaBox.addEventListener('keyup',function(){
let length=textareaBox.value.length;
charBox.innerText=length;
});
