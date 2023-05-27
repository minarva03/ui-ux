


let button=document.querySelector("#btn");
let input=document.querySelector("#input");
let yes=document.querySelector("#yes");

 input.addEventListener("keyup",function(){
   
      
    button.addEventListener("click",function(){
    
        let heading=document.querySelector(".head");
        // yes.style.color="";
        // yes.style.height="55px";
        // yes.style.width="365px";
        // yes.style.text="center";
        // yes.style.backgroundColor="yellow";
        // yes.style.border="5px solid gray";
        let value1=input.value;
        let arrValue=value1.split('');
       let reveArray=arrValue.reverse();
       let revString=reveArray.join('');
        // alert(value1.length);
        // let len=value1.length;
        // let mid=Math.floor(len/2);
        // for(let i=0;i<mid;i++){
  
        //   if(value1[i] != value1[len-1-i]){
        //     //   yes.innerText=" not palindrom";
        //     alert("not palindrom");
           
        //   }  
        //   else{
        //     alert("palindrom");
        //   }
        // }
       if (value1==revString){
        
        yes.innerText="The given word is palindrome";
       }
       else{
       
        yes.innerText="No!! It's  not palindrome";
           
       }
           
    });
    
 });
  
   