let min=document.querySelector("#minValue");
let max=document.querySelector("#maxValue");

let rangeX=document.querySelector('#range');
let amountX=document.querySelector('#amount');

rangeX.addEventListener('input',function(){
        // let valueX=rangeX.value;
        // amountX.innerText=valueX;
        

      let  valueMin=min.value;
      let  valueMax=max.value;
      rangeX.setAttribute('min',valueMin);
      rangeX.setAttribute('max',valueMax);
      let vai=rangeX.value;
      amountX.innerText=vai;
});