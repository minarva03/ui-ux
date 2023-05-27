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




//Box Sadow Btn


function call(l1txt, l2txt, l3txt, l4txt) {
  l1.innerText = l1txt;
  l2.innerText = l2txt;
  l3.innerText = l3txt;
  l4.innerText = l4txt;
}


// Text Color

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


