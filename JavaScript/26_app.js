//here we will use submit event 
//get the form
let registractionFormBox=document.querySelector("#register-form");

registractionFormBox.addEventListener('submit',function(event){
        event.preventDefault();
        if(validateMyForm()){
                alert('successfully data submiteed')
        }
});

let validateMyForm=()=>{
        checkUserName();
        checkEmail();
        checkMobile();
        checkPassword();
        checkConfirmPassword();
};

//username validation 
let checkUserName=()=>{
        //get the username  and and that particular div for displaying msg
        let userinputBox=document.querySelector('#username');
        let userMsgBox=document.querySelector('#username-msg');

        //now actual validata will be start 
        let regularExp=/^[a-zA-Z\-]+$/;

        if(regularExp.test(userinputBox.value)){
                successValidate(userinputBox,userMsgBox);
        }
        else{
                invalidValidate(userinputBox,userMsgBox);
        }
};


//email validation 
let checkEmail=()=>{
        //get the username  and and that particular div for displaying msg
        let userinputBox=document.querySelector('#email');
        let userMsgBox=document.querySelector('#email-msg');

        //now actual validata will be start 
        let regularExp= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(regularExp.test(userinputBox.value)){
                successValidate(userinputBox,userMsgBox);
        }
        else{
                invalidValidate(userinputBox,userMsgBox);
        }
};


//mobile validation 
let checkMobile=()=>{
        //get the username  and and that particular div for displaying msg
        let userinputBox=document.querySelector('#mobile');
        let userMsgBox=document.querySelector('#mobile-msg');

        //now actual validata will be start 
        let regularExp= /^[789]\d{9}$/;

        if(regularExp.test(userinputBox.value)){
                successValidate(userinputBox,userMsgBox);
        }
        else{
                invalidValidate(userinputBox,userMsgBox);
        }
};

//password validation 
let checkPassword=()=>{
        //get the username  and and that particular div for displaying msg
        let userinputBox=document.querySelector('#password');
        let userMsgBox=document.querySelector('#password-msg');
        var x=userinputBox.value;

        //now actual validata will be start 
        let regularExp= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if(regularExp.test(userinputBox.value)){
                successValidate(userinputBox,userMsgBox);
        }
        else{
                invalidValidate(userinputBox,userMsgBox);
        }
};


//cONFIRM password validation 
let checkConfirmPassword=()=>{
        //get the username  and and that particular div for displaying msg
        let userinputBox=document.querySelector('#c-password');
        let passwordChecker=document.querySelector('#password');
        let userMsgBox=document.querySelector('#c-password-msg');

        //now actual validata will be start 
        let regularExp= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if(regularExp.test(userinputBox.value) && userinputBox.value===passwordChecker.value){
                successValidate(userinputBox,userMsgBox);
        }
        else{
                invalidValidate(userinputBox,userMsgBox);
        }
};

//successValidate function ( additional design based on success and failue )
 
let successValidate=(userinputBox,userMsgBox)=>{
        //Add sucess design 
        userinputBox.classList.add('form-valid');
        //remove previous design 
        userinputBox.classList.remove('form-invalid');
        //Add sucess text 
        userMsgBox.classList.add('text-success');
        //Add fail text 
        userMsgBox.classList.remove('text-fail');

        userMsgBox.innerText="Everything fine"; // bind this data in divBox
};

//invalidValidate function ( additional design based on failue and success )

let invalidValidate=(userinputBox,userMsgBox)=>{
        //remove previous design 
        userinputBox.classList.remove('form-valid');
        //Add sucess design 
        userinputBox.classList.add('form-invalid');
        //Add fail text 
        userMsgBox.classList.remove('text-success');
        //Add sucess text 
        userMsgBox.classList.add('text-fail');
        userMsgBox.innerText=`Please Enter Valid ${userinputBox.placeholder}`; // bind this data in divBox

};

//extra with keypress  
// let usernameBox=document.querySelector("#username");

// usernameBox.addEventListener('keyup',function(){
//         checkUserName();
// });


// let emailBox=document.querySelector("#email");

// emailBox.addEventListener('keyup',function(){
//         checkEmail();
// });



// let mobileBox=document.querySelector("#mobile");

// mobileBox.addEventListener('keyup',function(){
//         checkMobile();
// });


// let passwordBox=document.querySelector("#password");

// passwordBox.addEventListener('keyup',function(){
//         checkPassword();
// });


// let cPasswordBox=document.querySelector("#c-password");

// cPasswordBox.addEventListener('keyup',function(){
//         checkConfirmPassword();
// });


