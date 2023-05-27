
let regdForm=document.querySelector("#regdForm");
let btn=document.querySelector("#button");

btn.addEventListener('click',function(event){
    
    event.preventDefault();
   if (validateMyForm()){
   
   };
});

let validateMyForm=()=>{

    checkUserName();
    checkEmail();
    checkMobile();
    checkPassword();
    checkConfirmPassword();

};

let checkUserName=()=>{

    let userInput=document.querySelector("#username");
    let feedback=document.querySelector("#feedbackUserName");

    let regularExp=/^[a-zA-Z\-]+$/;

    if(regularExp.test(userInput.value)){
        success(userInput,feedback);
    }
    else{
         failure(userInput,feedback);
    }
};

let checkEmail=()=>{

    let userInput=document.querySelector("#email");
    let feedback=document.querySelector("#feedbackEmail");

    let regularExp= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regularExp.test(userInput.value)){
        success(userInput,feedback);
    }
    else{
         failure(userInput,feedback);
    }
};
let checkMobile=()=>{

    let userInput=document.querySelector("#number");
    let feedback=document.querySelector("#feedbackNumber");

    let regularExp= /^[789]\d{9}$/;

    if (regularExp.test(userInput.value)){
        success(userInput,feedback);
       
    }
    else{
         failure(userInput,feedback);
    }
};
let checkPassword=()=>{

    let userInput=document.querySelector("#password");
    let feedback=document.querySelector("#feedbackPassword");

    let regularExp= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (regularExp.test(userInput.value)){
        success(userInput,feedback);
    }
    else{
         failure(userInput,feedback);
    }
};
let checkConfirmPassword=()=>{

    let userInput=document.querySelector("#ConfirmPassword");
    let feedback=document.querySelector("#feedbackConfirmPassword");
    let passwordChecker=document.querySelector('#password');
    

    let regularExp= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (regularExp.test(userInput.value) && userInput.value===passwordChecker.value){
        success(userInput,feedback);
        window.open("https://www.amazon.com/");
    }
    else{
         failure(userInput,feedback);
    }
};

 let success=(userInput,feedback)=>{

    userInput .classList.add('Approve');
   userInput.classList.remove('notApprove');

   feedback.classList.add('ApproveText');
    feedback.classList.remove('notApproveText');

    feedback.innerText=`valid ${userInput.placeholder}`;
}

let failure=(userInput,feedback)=>{

    userInput.classList.remove('Approve');
    userInput.classList.add('notApprove');
    // let feedback1=document.querySelector("#feedbackConfirmPassword");
   feedback.classList.remove('ApproveText');
    feedback.classList.add('notApproveText');
    feedback.innerText=`Please Enter Valid ${userInput.placeholder}`;
   feedback1.innerText=`Please  ${userInput.placeholder}`;
}

let username=document.querySelector("#username");

username.addEventListener('keyup',function(){
        checkUserName();
});

let useremail=document.querySelector("#email");

useremail.addEventListener('keyup',function(){
        checkEmail();
});

let usermob=document.querySelector("#number");

usermob.addEventListener('keyup',function(){
       checkMobile();
});

let userpassword=document.querySelector("#password");

userpassword.addEventListener('keyup',function(){
       checkPassword();
});

let userconfirmpw=document.querySelector("#ConfirmPassword");

userconfirmpw.addEventListener('',function(){
        checkConfirmPassword();
});

