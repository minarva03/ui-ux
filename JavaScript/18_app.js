//select element
let passwordBox=document.querySelector("#password");
let checkBox=document.querySelector("#checkbox");

// chnage event
checkBox.addEventListener('change',function(){
// to get the type
let getAttribute=passwordBox.getAttribute('type');

// password to text  or text to password 
if(getAttribute=='password'){
        //chnage the attribute value 
        passwordBox.setAttribute('type','text');
}
else{
        //chnage the attribute value
        passwordBox.setAttribute('type','password');
}
});