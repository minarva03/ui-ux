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


function call(l1txt, l2txt, l3txt, l4txt) {
  l1.innerText = l1txt;
  l2.innerText = l2txt;
  l3.innerText = l3txt;
  l4.innerText = l4txt;
}

