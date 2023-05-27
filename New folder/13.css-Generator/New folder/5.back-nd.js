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




function call(l1txt, l2txt, l3txt, l4txt) {
  l1.innerText = l1txt;
  l2.innerText = l2txt;
  l3.innerText = l3txt;
  l4.innerText = l4txt;
}

 



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
        para.value=`border: ${range1.value}px solid ${color.value}`;
    })
    range2.addEventListener('input',callme);
    function callme(){
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

