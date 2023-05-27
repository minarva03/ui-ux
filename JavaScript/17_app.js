// Select selcet box
let selectBox=document.querySelector("#selectcity");
selectBox.addEventListener("change",function(){
// for testing 
// alert('Thank u');

// first we have to get the value from the select box 
let selectData=selectBox.value;

// selcet h2 
let headingData=document.querySelector("#heading2");
headingData.innerText=selectData;
});
