let alldata = document.getElementById("all-data");
let genDiv = document.getElementById("gen-div");
let resultDiv = document.getElementById("result-div");

//Input Range..
let range1 = document.getElementById("customRange1");
let range2 = document.getElementById("customRange2");
let range3 = document.getElementById("customRange3");
let range4 = document.getElementById("customRange4");
let range5= document.getElementById('customRange5')
let color = document.getElementById("color");

// All Input Level..
let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");

// All Button..
let boxsadowbtn = document.getElementById("box-sadowbtn");
let txtsadowBtn = document.getElementById("text-sadowbtn");
let colorBtn = document.getElementById("color-btn");
let fontBtn = document.getElementById("font-btn");
let backGroundBtn = document.getElementById("back-groundbtn");
let copybtn = document.getElementById("copybtn");

//let txtsadowBtn = document.getElementById('text-sadowbtn');
let borderBtn = document.getElementById("border-btn");
let borderredusBtn = document.getElementById("border-redusbtn");

let para = document.getElementById("coadpara");
let copy = document.getElementById("copy-btn");


alldata.style.display = "none";

//Box Sadow Btn
boxsadowbtn.addEventListener("click", function () {
  alldata.style.display = "block";
  range5.style.display="none";

  l1.innerText = "Horizontal Shadow Length";
  l2.innerText = "Vertical Shadow Length";
  l3.innerText = "Blur Radius";
  l4.innerText = "Spread Radius";

  resultDiv.style.background = "#00bcd4";
  resultDiv.style.boxShadow = " 10px 10px 5px 0px black ";
  para.value="box-shadow:  10px 10px 5px 0px black"

  let x1 = range1.addEventListener("input", function () {
    range1.setAttribute("min", "-200");
    range1.setAttribute("max", "200");
    resultDiv.style.boxShadow = `${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px rgba(0 , 0 ,0 , 1)`;
    para.value = `box-shadow: ${range1.value}px 10px ${range3.value}px ${range4.value}px ${color.value} ;`;
  });

  let x2 = range2.addEventListener("input", function () {
    range2.setAttribute("min", "-200");
    range2.setAttribute("max", "200");
    resultDiv.style.boxShadow = `${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px rgba(0 , 0 ,0 , 1)`;
    para.value = `box-shadow: ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ${color.value} ;`;
  });

  let x3 = range3.addEventListener("input", function () {
    range3.setAttribute("min", "0");
    range3.setAttribute("max", "400");
    resultDiv.style.boxShadow = `${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px rgba(0 , 0 ,0 , 1)`;
    para.value = `box-shadow: ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ${color.value} ;`;
  });

  let x4 = range4.addEventListener("input", function () {
    range3.setAttribute("min", "0");
    range3.setAttribute("max", "190");
    resultDiv.style.boxShadow = `${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px rgba(0 , 0 ,0 , 1)`;
    para.value = `box-shadow: ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ${color.value} ;`;
  });

  let x5 = color.addEventListener("input", function () {
    resultDiv.style.boxShadow = `${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ${color.value}`;
    para.value = `box-shadow: ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ${color.value} ;`;
  });

  copy.addEventListener("click", function () {
    para.select();
    alert('Your Copy Is SucessFull')
    document.execCommand("copy");
    window.location.reload(true)
  });
});

function call(l1txt, l2txt, l3txt, l4txt) {
  l1.innerText = l1txt;
  l2.innerText = l2txt;
  l3.innerText = l3txt;
  l4.innerText = l4txt;
}

// Text Sadow......................................

txtsadowBtn.addEventListener("click", function () {
  alldata.style.display = "block";
  range4.style.display = "none";
  range5.style.display="none";
  resultDiv.style.background = "white";
  resultDiv.style.boxShadow = "0px 0px 0px 0px white";

  

  call("Horizontal Shadow Length", "Vertical Shadow Length", "Blur Radius","");

  resultDiv.style.backgroundColor = "none";
  let resultpara = document.getElementById("resultpara");
  resultpara.style.color = "black";
  resultpara.style.textShadow="0px 0px 10px 10px black" 
  resultpara.style.textShadow=" 4px 4px 2px rgba(0,0,0,0.6)"
  para.value="text-shadow: 4px 4px 2px rgba(0,0,0,0.6)"
  resultpara.innerText = "Text - Sadows";

  let x1 = range1.addEventListener("input", function () {
    range1.setAttribute("min", "-200");
    range1.setAttribute("max", "200");
    resultpara.style.textShadow = `${range1.value}px ${range2.value}px ${range3.value}px  rgba(0 , 0 ,0 , 1)`;
    para.value = `text-shadow: ${range1.value}px ${range2.value}px ${range3.value}px ${color.value} ;`;
  });

  let x2 = range2.addEventListener("input", function () {
    range2.setAttribute("min", "-200");
    range2.setAttribute("max", "200");
    resultpara.style.textShadow = `${range1.value}px ${range2.value}px ${range3.value}px rgba(0 , 0 ,0 , 1)`;
    para.value = `text-shadow: ${range1.value}px ${range2.value}px ${range3.value}px  ${color.value} ;`;
  });

  let x3 = range3.addEventListener("input", function () {
    range3.setAttribute("min", "0");
    range3.setAttribute("max", "100");
    resultpara.style.textShadow = `${range1.value}px ${range2.value}px ${range3.value}px  rgba(0 , 0 ,0 , 1)`;
    para.value = `text-shadow: ${range1.value}px ${range2.value}px ${range3.value}px  ${color.value} ;`;
  });

  let x4 = color.addEventListener("input", function () {
    resultpara.style.textShadow = `${range1.value}px ${range2.value}px ${range3.value}px  ${color.value}`;
    para.value = `text-shadow: ${range1.value}px ${range2.value}px ${range3.value}px  ${color.value} ;`;
  });

  copy.addEventListener("click", function () {
    para.select();
    alert('Your Copy Is SucessFull')
    document.execCommand("copy");
    window.location.reload(true)
  });
});

// Text Color
colorBtn.addEventListener("click",function(){
    alldata.style.display="block";
    range4.style.display="none"
    range5.style.display="none";
    call("Red","Green","Blue","Alpha");
    let resultpara = document.getElementById("resultpara");
    resultpara.innerText="Text - Color"
    resultpara.style.color = "black";
    para.value="color: rgb(0,0,0);"

    range1.setAttribute("min","0");
    range1.setAttribute("max","255");
    range1.setAttribute("value","127.5");


    range2.setAttribute("min","0");
    range2.setAttribute("max","255");
    range4.setAttribute("value","127.5");

    range3.setAttribute("min","0");
    range3.setAttribute("max","255");
    range3.setAttribute("value","127.5");
    


    function redhe(){
        let redval=range1.value;
       let grenval=range2.value;
       let blueval=range3.value;
       let alpha=range4.value;
    //rgb(255,255,255)
    let colorgen=color.value="rgb("+redval+","+grenval+","+blueval+")";
    resultpara.style.color=colorgen;
    para.value="color: " +colorgen;
    }

    range1.addEventListener("input",redhe);
range2.addEventListener("input",redhe);
range3.addEventListener("input",redhe);
range4.addEventListener("input",redhe);
  color.addEventListener('input',function(){
    let x= resultpara.style.color=color.value;
   para.value="color:"+color.value;
  })

  copy.addEventListener("click", function () {
    para.select();
    alert('Your Copy Is SucessFull')
    document.execCommand("copy");
    window.location.reload(true)
  });
})

//Back-Ground
backGroundBtn.addEventListener("click",function(){
    
    alldata.style.display="block";
    range4.style.display="none"
    range5.style.display="none";
    call("Red","Green","Blue","Alpha");
    resultDiv.style.backgroundColor="rgb(126,50,128)";
    para.value="background-color : rgb(126,50,128);"

    range1.setAttribute("min","0");
    range1.setAttribute("max","255");
    range1.setAttribute("value","127.5");


    range2.setAttribute("min","0");
    range2.setAttribute("max","255");
    range4.setAttribute("value","127.5");

    range3.setAttribute("min","0");
    range3.setAttribute("max","255");
    range3.setAttribute("value","127.5");


    function redhe(){
        let redval=range1.value;
       let grenval=range2.value;
       let blueval=range3.value;
       let alpha=range4.value;
    //rgb(255,255,255)
    let colorgen=color.value="rgb("+redval+","+grenval+","+blueval+")";
    resultDiv.style.backgroundColor=colorgen;
    para.value="background-color : "+ colorgen;
    }

    range1.addEventListener("input",redhe);
range2.addEventListener("input",redhe);
range3.addEventListener("input",redhe);
range4.addEventListener("input",redhe);
  color.addEventListener('input',function(){
    let x= resultDiv.style.backgroundColor=color.value;
   para.value="background-color : "+color.value;
  })

  copy.addEventListener("click", function () {
    para.select();
    alert('Your Copy Is SucessFull')
    document.execCommand("copy");
    window.location.reload(true)
  });
    
})

//Border-Redus

borderredusBtn.addEventListener('click',function(){
    alldata.style.display="block";
    resultDiv.style.background="green"
   //  range5.style.display="block";
   call("Top Left Radius","Top Right Radius","Bottom Right Radius","Bottom Left Radius")
   color.style.display="none";
   document.getElementById('l5').innerText="Result";
   document.getElementById('l6').innerText="All Corners Radius";
  
    para.value=" border-radius: 0px 0px 0px 0px"
   
    range1.setAttribute("min","0");
    range1.setAttribute("max","196");
    range1.setAttribute("value","0");


    range2.setAttribute("min","0");
    range2.setAttribute("max","196");
    range2.setAttribute("value","0");

    range3.setAttribute("min","0");
    range3.setAttribute("max","196");
    range3.setAttribute("value","0");

    
    range4.setAttribute("min","0");
    range4.setAttribute("max","196");
    range4.setAttribute("value","0");


   
range1.addEventListener('input',function(){
    resultDiv.style.borderRadius=` ${range1.value}px 0px 0px 0px`;
    para.value= `border-radius: ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ;`
  
})
range2.addEventListener('input',function(){
    resultDiv.style.borderRadius=` ${range1.value}px ${range2.value}px 0px 0px`;
    para.value= `border-radius: ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ;`
})
range3.addEventListener('input',function(){
    resultDiv.style.borderRadius=` ${range1.value}px ${range2.value}px ${range3.value}px 0px`;
    para.value= `border-radius: ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ;`
})
range4.addEventListener('input',function(){
    resultDiv.style.borderRadius=` ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px`;

    para.value= `border-radius: ${range1.value}px ${range2.value}px ${range3.value}px ${range4.value}px ;`
})

   

     
   let range5= document.getElementById('customRange5');
   range5.addEventListener('input',function(){
    resultDiv.style.borderRadius=range5.value+"px";
    para.value= `border-radius:  ${range5.value}px ;`
   })

   copy.addEventListener("click", function () {
    para.select();
    alert('Your Copy Is SucessFull')
    document.execCommand("copy");
    window.location.reload(true)
  });
})

// Border 

borderBtn.addEventListener('click',function(){

    resultDiv.style.background="#00bcd4";
    alldata.style.display="block";
    range3.style.display="none";
    range4.style.display="none";
    range5.style.display="none";
    
    range1.setAttribute("min","0");
    range1.setAttribute("max","60");
    range1.setAttribute("value","0");


    range2.setAttribute("min","0");
    range2.setAttribute("max","8");
    range2.setAttribute("value","0");
    call("Border-Width","Border-Style")

    resultDiv.style.border="2px solid black"

    range1.addEventListener('input',function(){
        resultDiv.style.border=`${range1.value}px solid ${color.value}`
        para.value=`${range1.value}px ${range2.value} ${color.value}`;
    })
    range2.addEventListener('input',callme);
    function callme(){
        if (range2.value== 1) {
            resultDiv.style.border=` ${range1.value}px solid ${color.value}`
            para.value=`border: ${range1.value}px solid ${color.value}`;
        }else if(range2.value==2){
            resultDiv.style.border=`${range1.value}px dotted ${color.value}`
            para.value=`border: ${range1.value}px dotted ${color.value}`;
        }else if(range2.value==3){
            resultDiv.style.border=`${range1.value}px dashed ${color.value}`
            para.value=`border: ${range1.value}px dashed ${color.value}`;
        }else if(range2.value==4){
            resultDiv.style.border=`${range1.value}px double ${color.value}`
            para.value=`border: ${range1.value}px double ${color.value}`;
        }else if(range2.value==5){
            resultDiv.style.border=`${range1.value}px groove ${color.value}`
            para.value=` border: ${range1.value}px groove ${color.value}`;
        }else if(range2.value==6){
            resultDiv.style.border=`${range1.value}px ridge ${color.value}`
            para.value=`border: ${range1.value}px ridge ${color.value}`;
        }else if(range2.value==7){
            resultDiv.style.border=`${range1.value}px inset ${color.value}`
            para.value=`border: ${range1.value}px inset ${color.value}`;
        }else if(range2.value==8){
            resultDiv.style.border=`${range1.value}px outset  ${color.value}`
            para.value=` border: ${range1.value}px outset ${color.value}`;
        }

      
    }
        
     

    color.addEventListener('input',function(){
       
        resultDiv.style.border=`${range1.value}px ${range2.value} ${color.value}`;
        para.value=`border: ${range1.value}px ${range2.value} ${color.value}`;

         if (range2.value== 1) {
            resultDiv.style.border=` ${range1.value}px solid ${color.value}`
            para.value=`border: ${range1.value}px solid ${color.value}`;
        }else if(range2.value==2){
            resultDiv.style.border=`${range1.value}px dotted ${color.value}`
            para.value=`border: ${range1.value}px dotted ${color.value}`;
        }else if(range2.value==3){
            resultDiv.style.border=`${range1.value}px dashed ${color.value}`
            para.value=`border: ${range1.value}px dashed ${color.value}`;
        }else if(range2.value==4){
            resultDiv.style.border=`${range1.value}px double ${color.value}`
            para.value=`border: ${range1.value}px double ${color.value}`;
        }else if(range2.value==5){
            resultDiv.style.border=`${range1.value}px groove ${color.value}`
            para.value=` border: ${range1.value}px groove ${color.value}`;
        }else if(range2.value==6){
            resultDiv.style.border=`${range1.value}px ridge ${color.value}`
            para.value=`border: ${range1.value}px ridge ${color.value}`;
        }else if(range2.value==7){
            resultDiv.style.border=`${range1.value}px inset ${color.value}`
            para.value=`border: ${range1.value}px inset ${color.value}`;
        }else if(range2.value==8){
            resultDiv.style.border=`${range1.value}px outset  ${color.value}`
            para.value=` border: ${range1.value}px outset ${color.value}`;
        }
       
    })

    
   copy.addEventListener("click", function () {
    para.select();
    alert('Your Copy Is SucessFull')
    document.execCommand("copy");
    window.location.reload(true)
  });

})