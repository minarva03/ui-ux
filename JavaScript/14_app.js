// let uiDetails=()=>{

// let h4TagMsg=document.querySelector('#msg');
// h4TagMsg.innerText=" UI Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ea quasi. Quam sint autem cumque architecto adipisci deserunt voluptas, maxime officia deleniti itaque alias soluta doloremque asperiores debitis, corporis aperiam";
// h4TagMsg.style.backgroundColor='red';
// h4TagMsg.style.boxShadow='0 0 10px black';
// h4TagMsg.style.padding='18px';
// }


// let pythonDetails=()=>{

// let h4TagMsg=document.querySelector('#msg');
// h4TagMsg.innerText=" Python Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ea quasi. Quam sint autem cumque architecto adipisci deserunt voluptas, maxime officia deleniti itaque alias soluta doloremque asperiores debitis, corporis aperiam";
// h4TagMsg.style.backgroundColor='blue';
// h4TagMsg.style.boxShadow='0 0 10px black';
// h4TagMsg.style.padding='18px';

// }


// let javaDetails=()=>{

// let h4TagMsg=document.querySelector('#msg');
// h4TagMsg.innerText=" java Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ea quasi. Quam sint autem cumque architecto adipisci deserunt voluptas, maxime officia deleniti itaque alias soluta doloremque asperiores debitis, corporis aperiam";
// h4TagMsg.style.backgroundColor='green';
// h4TagMsg.style.boxShadow='0 0 10px black';
// h4TagMsg.style.padding='18px';

// }


// let phpDetails=()=>{

// let h4TagMsg=document.querySelector('#msg');
// h4TagMsg.innerText=" php Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ea quasi. Quam sint autem cumque architecto adipisci deserunt voluptas, maxime officia deleniti itaque alias soluta doloremque asperiores debitis, corporis aperiam";
// h4TagMsg.style.backgroundColor='yellow';
// h4TagMsg.style.boxShadow='0 0 10px black';
// h4TagMsg.style.padding='18px';
// }


// -------------------------------code optimization-----------------

let displayMsg=(msg,col)=>{
let pTag=document.querySelector("#msg-para");
pTag.innerText=msg;
pTag.style.backgroundColor=col;
pTag.style.boxShadow='0 0 10px black';
pTag.style.padding='18px';
}


// -----------------------------------------event linster------------

let uiBtn=document.querySelector('#ui-btn');

// set an event for this elemnet

uiBtn.addEventListener('click',function(){
displayMsg('Ui is best','red');
});


let pythonBtn=document.querySelector('#python-btn');

// set an event for this elemnet

pythonBtn.addEventListener('click',function(){
displayMsg('python is good','yellow');
});


let javaBtn=document.querySelector('#java-btn');

// set an event for this elemnet

javaBtn.addEventListener('click',function(){
displayMsg('java is fine','blue');
});


let phpBtn=document.querySelector('#php-btn');

// set an event for this elemnet

phpBtn.addEventListener('click',function(){
displayMsg('php is very ok','green');
});
