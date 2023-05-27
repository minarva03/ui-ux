// call All

let allData = document.getElementById("all-data");
let colorBox1 = document.getElementById("color1");
let colorBox2 = document.getElementById("color2");
let colorBox3 = document.getElementById("color3");
let adjustBox1 = document.getElementById("adj1");
let adjustBox2 = document.getElementById("adj2");

let resultBox = document.getElementById("resultdiv");
let coadBox = document.getElementById("coadpara");
let copyBtn = document.getElementById("copy-btn");

// style add..
allData.style.display = "none";

//  -------------------------------------LINER-GRIDENTS-----------------------------

let linerGridentBtn = document.getElementById("linergradient");
linerGridentBtn.addEventListener("click", function () {
  allData.style.display = "block";

  colorBox1.value = "#1b5782";
  colorBox2.value = "#eb5e16";
  colorBox3.value = "#00d4ff";
  resultBox.style.background = `linear-gradient(${adjustBox2.value}deg, ${colorBox1.value} 0%, ${colorBox2.value} ${adjustBox1.value}%,${colorBox3.value} 100%`;
  coadBox.value = `  background-image: linear-gradient(${adjustBox2.value}deg, ${colorBox1.value} 0%, ${colorBox2.value} ${adjustBox1.value}%,${colorBox3.value} 100%);`;
  function call() {
    resultBox.style.background = `linear-gradient(${adjustBox2.value}deg, ${colorBox1.value} 0%, ${colorBox2.value} ${adjustBox1.value}%,${colorBox3.value} 100%`;
    coadBox.value = `  background-image: linear-gradient(${adjustBox2.value}deg, ${colorBox1.value} 0%, ${colorBox2.value} ${adjustBox1.value}%,${colorBox3.value} 100%);`;
  }
  colorBox1.addEventListener("input", function () {
    call();
  });

  colorBox2.addEventListener("input", function () {
    call();
  });

  colorBox3.addEventListener("input", function () {
    call();
  });
  adjustBox1.addEventListener("input", function () {
    call();
  });
  adjustBox2.addEventListener("input", function () {
    call();
  });
  copyBtn.addEventListener("click", function () {
    coadBox.select();
    document.execCommand("copy");
    alert('Your Copy Is SucessFull')
    window.location.reload(true)
  });
});

//  ------------------------------------- REAPETING LINER-GRIDENTS-----------------------------
let repeatingLinerBtn = document.getElementById("repeatinglinear");
repeatingLinerBtn.addEventListener("click", function () {
  allData.style.display = "block";

  colorBox1.value = " #2086df";
  colorBox2.value = "#ffffff";
  colorBox3.value = "#0905fa";
  resultBox.style.background = `background  repeating-linear-gradient(${adjustBox2.value}deg, ${colorBox1.value},${colorBox2.value},${colorBox3.value}, transparent ${adjustBox1.value}px)`;
  coadBox.value = `  background-image:  repeating-linear-gradient(${adjustBox2.value}deg, ${colorBox1.value},${colorBox2.value},${colorBox3.value}, transparent ${adjustBox1.value}px);`;

  function call() {
    resultBox.style.background = `background  repeating-linear-gradient(${adjustBox2.value}deg, ${colorBox1.value},${colorBox2.value},${colorBox3.value}, transparent ${adjustBox1.value}px)`;
    coadBox.value = `  background-image:  repeating-linear-gradient(${adjustBox2.value}deg, ${colorBox1.value},${colorBox2.value},${colorBox3.value}, transparent ${adjustBox1.value}px);`;
  }
  colorBox1.addEventListener("input", function () {
    call();
  });

  colorBox2.addEventListener("input", function () {
    call();
  });

  colorBox3.addEventListener("input", function () {
    call();
  });

  adjustBox1.addEventListener("input", function () {
    call();
  });
  adjustBox2.addEventListener("input", function () {
    call();
  });

  copyBtn.addEventListener("click", function () {
    coadBox.select();
    document.execCommand("copy");
    alert('Your Copy Is SucessFull')
    window.location.reload(true)
  });
});

// ----------------------------------------------RADIAL-GRIDENT---------------------------------------------------

let radialgradientBtn = document.getElementById("radialgradient");
radialgradientBtn.addEventListener("click", function () {
  allData.style.display = "block";

  colorBox1.value = " #67ff14";
  colorBox2.value = "#575f98";
  colorBox3.value = "#11ebee";
  adjustBox2.value = "50";
  adjustBox1.style.display = "none";
  resultBox.style.background = `background  radial-gradient(circle, ${colorBox1.value} 0%,${colorBox2.value} ${adjustBox2.value}%,${colorBox3.value} 100%)`;
  coadBox.value = `  background-image:  radial-gradient(circle, ${colorBox1.value} 0%,${colorBox2.value} ${adjustBox2.value}%,${colorBox3.value} 100%);`;

  function call() {
    resultBox.style.background = `background  radial-gradient(circle, ${colorBox1.value} 0%,${colorBox2.value} ${adjustBox2.value}%,${colorBox3.value} 100%)`;
    coadBox.value = `  background-image:  radial-gradient(circle, ${colorBox1.value} 0%,${colorBox2.value} ${adjustBox2.value}%,${colorBox3.value} 100%);`;
  }
  colorBox1.addEventListener("input", function () {
    call();
  });

  colorBox2.addEventListener("input", function () {
    call();
  });

  colorBox3.addEventListener("input", function () {
    call();
  });

  adjustBox1.addEventListener("input", function () {
    call();
  });
  adjustBox2.addEventListener("input", function () {
    call();
  });

  copyBtn.addEventListener("click", function () {
    coadBox.select();
    document.execCommand("copy");
    alert('Your Copy Is SucessFull')
    window.location.reload(true)
  });
});

// -------------------------------------------Reapeting Redial Grident--------------------------------------------

let repetingradialBtn = document.getElementById("repetingradial");
repetingradialBtn.addEventListener("click", function () {
  allData.style.display = "block";

  colorBox1.value = " #67ff14";
  colorBox2.value = "#575f98";
  colorBox3.value = "#11ebee";
  adjustBox2.value = "50";
  adjustBox1.style.display = "none";
  resultBox.style.background = `background repeating-radial-gradient( ${colorBox1.value},${colorBox2.value}, ${colorBox3.value}, transparent ${adjustBox2.value}px)`;
  coadBox.value = `  background-image:  repeating-radial-gradient( ${colorBox1.value},${colorBox2.value}, ${colorBox3.value}, transparent ${adjustBox2.value}px);`;

  function call() {
    resultBox.style.background = `background  repeating-radial-gradient( ${colorBox1.value},${colorBox2.value}, ${colorBox3.value}, transparent ${adjustBox2.value}px)`;
    coadBox.value = `  background-image:  repeating-radial-gradient( ${colorBox1.value},${colorBox2.value}, ${colorBox3.value}, transparent ${adjustBox2.value}px);`;
  }
  colorBox1.addEventListener("input", function () {
    call();
  });

  colorBox2.addEventListener("input", function () {
    call();
  });

  colorBox3.addEventListener("input", function () {
    call();
  });

  adjustBox1.addEventListener("input", function () {
    call();
  });
  adjustBox2.addEventListener("input", function () {
    call();
  });

  copyBtn.addEventListener("click", function () {
    coadBox.select();
    document.execCommand("copy");
    alert('Your Copy Is SucessFull')
    window.location.reload(true)
  });
});

// ------------------------------------------Conic-Grident--------------------------------
let conicBtn = document.getElementById("conicgrident");
conicBtn.addEventListener('click', function() {
  allData.style.display = "block";

  colorBox1.value = "#009688";
  colorBox2.value = "#3e2723";
  colorBox3.value = "#9e9e9e";
  adjustBox2.value = "50";
  adjustBox1.style.display = "none";

  resultBox.style.background = `background conic-gradient(from ${adjustBox2.value}deg,${colorBox1.value},${colorBox2.value},${colorBox3.value})`;
  coadBox.value = `background-image: conic-gradient(from ${adjustBox2.value}deg,${colorBox1.value},${colorBox2.value},${colorBox3.value});`;
 function call(){
  resultBox.style.background = `background conic-gradient(from ${adjustBox2.value}deg,${colorBox1.value},${colorBox2.value},${colorBox3.value})`;
  coadBox.value = `background-image: conic-gradient(from ${adjustBox2.value}deg,${colorBox1.value},${colorBox2.value},${colorBox3.value});`;
 }

 colorBox1.addEventListener("input", function () {
  call();
});

colorBox2.addEventListener("input", function () {
  call();
});

colorBox3.addEventListener("input", function () {
  call();
});

// adjustBox1.addEventListener("input", function () {
//   call();
// });
adjustBox2.addEventListener("input", function () {
  call();
});

copyBtn.addEventListener("click", function () {
  coadBox.select();
  document.execCommand("copy");
  alert('Your Copy Is SucessFull')
  window.location.reload(true)
});
});
