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

   

     
//    let range5= document.getElementById('customRange5');
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


