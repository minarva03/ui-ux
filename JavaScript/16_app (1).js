let emailBox=document.querySelector("#emailaddress");
emailBox.addEventListener("keyup",function(){
// alert('thanku '); // this is for testing purpose 

// first now i want to access emailBox value 
let emailData=emailBox.value;
//selcet h2 
let msgElement=document.querySelector("#heading2");
msgElement.innerText=emailData;
});